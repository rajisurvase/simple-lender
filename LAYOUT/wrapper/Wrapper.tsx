import dynamic from "next/dynamic";
import React from "react";
import NextProgress from "next-progress";

const Header = dynamic(() => import("../Header/Header"));
const Footer = dynamic(() => import("../Footer/Footer"));

type wrapperProps = {
  children: JSX.Element|JSX.Element[];
};

const Wrapper = (props: wrapperProps) => {
  const { children } = props;
  return (
    <>
      <NextProgress height={8} color="green" />
      <Header />
      {children}
      <Footer />
  
    </>
  
  );
};

export default Wrapper;
