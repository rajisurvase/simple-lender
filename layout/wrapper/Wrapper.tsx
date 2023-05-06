"use client";

import dynamic from "next/dynamic";
import React from "react";
import NextProgress from "next-progress";
import useOnlineStatus from "@/hooks/useDetectOnline";

const Header = dynamic(() => import("../Header/Header"), { suspense: true });
const Footer = dynamic(() => import("../Footer/Footer"), { suspense: true });

interface wrapperProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

const Wrapper = (props: wrapperProps) => {
  const { children } = props;

  useOnlineStatus();
  return (
    <>
      <NextProgress height={8} color="green" />

      <Header />

      <body>{children}</body>

      <Footer />
    </>
  );
};

export default Wrapper;
