"use client";

import dynamic from "next/dynamic";
import React from "react";

const Header = dynamic(() => import("../Header/Header"), { suspense: true });
const Footer = dynamic(() => import("../Footer/Footer"), { suspense: true });

interface wrapperProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

const Wrapper = (props: wrapperProps) => {
  const { children } = props;
  return (
    <>
      <Header />

      <body>{children}</body>

      <Footer />
    </>
  );
};

export default Wrapper;
