"use client";
import React, { useEffect, useState } from "react";

const AboutVideo = ({ data }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.2}px)`,
  };

  return (
    <div
      className="relative  w-full h-[100vh] overflow-hidden"
      style={parallaxStyle}
    >
      <video
        className="fixed bottom-0 left-0 rotate-180 w-full h-[100vh] object-cover object-center z-[-100]"
        preload="auto"
        loop
        autoPlay
        playsInline
      >
        <source src={data} type="video/webm" />
      </video>
    </div>
  );
};

export default AboutVideo;
