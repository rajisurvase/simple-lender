import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import NextProgress from "next-progress";
import HeaderSkeleton from "@/ui/Skeletons/HeaderSkeleton";

const Header = dynamic(() => import("../Header/Header"), { suspense: true });
const Footer = dynamic(() => import("../Footer/Footer"), { suspense: true });

type wrapperProps = {
  children: JSX.Element | JSX.Element[];
};

const Wrapper = (props: wrapperProps) => {
  const { children } = props;
  return (
    <>
      <NextProgress height={8} color="green" />
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>

      {children}

      <Suspense fallback={<HeaderSkeleton />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Wrapper;
