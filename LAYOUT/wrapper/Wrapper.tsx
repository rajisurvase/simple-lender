import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import NextProgress from "next-progress";
import HeaderSkeleton from "@/ui/Skeletons/HeaderSkeleton";
import useOnlineStatus from "@/hooks/useDetectOnline";


const Header = dynamic(() => import("../Header/Header"), { suspense: true });
const Footer = dynamic(() => import("../Footer/Footer"), { suspense: true });

interface wrapperProps  {
  children: JSX.Element | JSX.Element[];
};

const Wrapper = (props: wrapperProps) => {
  const { children } = props;

  useOnlineStatus()
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
