import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "@/styles/pages/home.module.scss";
import useNotiStack from "@/hooks/useNotistack";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function Home() {
  const { toastSuccess, toastError } = useNotiStack();

  useEffect(() => {
    toastError("err");
    toastSuccess("This is sucess");
  }, []);

  return (
    <>
      <Wrapper>
        <h1>This is home page</h1>
      </Wrapper>
    </>
  );
}
