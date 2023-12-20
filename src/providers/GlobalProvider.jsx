"use client";
import React, { useEffect } from "react";
import Header from "@/components/ui/Header/Header";
import Footer from "@/components/ui/Footer/Footer";
import Counter from "@/components/ui/Counter";
import { usePathname, useRouter } from "next/navigation";
import { HomeQuote } from "@/components/home";
const GlobalProvider = ({ children, footerData, languague, counterData }) => {
  const pathname = usePathname();

  return (
    <main>
      <Header languague={languague} />
      {children}
      {pathname === "/" || pathname === "/contact" ? "" : <HomeQuote />}
      <Counter data={counterData} languague={languague} />
      <Footer footerData={footerData} languague={languague} />
    </main>
  );
};

export default GlobalProvider;
