"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function Providers({ children }) {
  const { RECAPTCHA_SITE_KEY } = process.env;
  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
