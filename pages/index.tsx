import { useEffect } from "react";
import useNotiStack from "hooks/useNotistack";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import nookies from "nookies";
import { getItemFromCookiesServerSide } from "@/lib/functions/storage.lib";
import Wrapper from "@/layout/wrapper/Wrapper";

const AllButtons = dynamic(() => import("@/components/AllButtons"), {
  ssr: true
});
const AllInputs = dynamic(() => import("@/components/AllInputs"), {
  ssr: true
});
const AllAvatar = dynamic(() => import("@/components/AllAvatar"), {
  ssr: true
});
const AllColors = dynamic(() => import("@/components/AllColors"), {
  ssr: true
});
const HomeSection = dynamic(() => import("@/components/HomeSection"), {
  ssr: true
});


// === get serverside methods ===4
export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  console.log(getItemFromCookiesServerSide(context,"UserGiftListAuthToken:"), "cook");

  return {
    props: {}
  };
};

export default function Home() {
  const { toastSuccess, toastError } = useNotiStack();

  useEffect(() => {
    toastError("err");
    toastSuccess("This is success");
  }, []);

  return (
    <Wrapper>
      <HomeSection title="Theme Colors">
        <AllColors />
      </HomeSection>

      <HomeSection title="Input tags">
        <AllInputs />
      </HomeSection>

      <HomeSection title="Buttons">
        <AllButtons />
      </HomeSection>

      <HomeSection title="Avatar">
        <AllAvatar />
      </HomeSection>
    </Wrapper>
  );
}
