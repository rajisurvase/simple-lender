"use client";

import assest from "@/json/assest";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Link
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <Image src={assest.logo} alt="Vercel Logo" width={72} height={16} />
      </Link>
    </footer>
  );
};

export default Footer;
