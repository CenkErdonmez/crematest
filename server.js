const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { randomBytes } = require("crypto");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

// In-memory storage for generated CSRF tokens
const csrfTokens = new Set();

// Function to generate a random CSRF token
const generateCSRFToken = () => {
  const token = randomBytes(16).toString("hex");
  csrfTokens.add(token);
  return token;
};

// Function to validate CSRF token
const isValidCSRFToken = (token) => csrfTokens.has(token);

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === "/a") {
      app.render(req, res, "/a", query);
    } else if (pathname === "/b") {
      app.render(req, res, "/b", query);
    } else if (pathname === "/get-csrf-token") {
      // Route to get a CSRF token
      const csrfToken = generateCSRFToken();
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ csrfToken }));
    } else if (pathname === "/submit-form") {
      // Route to handle form submissions with CSRF token
      const { csrfToken, otherFormData } = query;

      if (isValidCSRFToken(csrfToken)) {
        // CSRF token is valid, handle the form submission
        // Implement your form submission logic here

        res.end("Form submitted successfully!");
      } else {
        // CSRF token is invalid
        res.statusCode = 403; // Forbidden
        res.end("Invalid CSRF token");
      }
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, (err) => {
    if (err) throw err; //console.log(`> Ready on http://localhost:${port}`);
  });
});
