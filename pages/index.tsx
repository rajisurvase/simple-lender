import { fetchAboutUs } from "@/api/functions/cms.api";
import AllAssets from "@/components/AllAssets";
import AllModals from "@/components/AllModals";
import DataWrapper from "@/components/DataWrapper/DataWrapper";
import Wrapper from "@/layout/wrapper/Wrapper";
import AboutSkeleton from "@/ui/Skeletons/AboutSkeleton";
import Divider from "@mui/material/Divider";
import useNotiStack from "hooks/useNotistack";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useQuery } from "react-query";

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
  return {
    props: {}
  };
};

export default function Home() {
  const { toastSuccess, toastError } = useNotiStack();
  const { isLoading, isError, data, error, isRefetching } = useQuery(
    "fetchAboutUs",
    fetchAboutUs,
    {
      refetchOnReconnect: true
    }
  );

  useEffect(() => {
    toastError("err");
    toastSuccess("This is success");
  }, []);

  return (
    <Wrapper>
      <HomeSection title="Fetch cms api with react-query - useQuery() ">
        <DataWrapper
          isError={isError}
          isLoading={isLoading}
          loader={<AboutSkeleton />}
          isRefetching={isRefetching}
        >
          <h1>{data?.data?.title}</h1>
          <Divider />
          <p>{data?.data?.description}</p>
        </DataWrapper>
      </HomeSection>

      <HomeSection title="Theme Colors">
        <AllColors />
      </HomeSection>

      <HomeSection title="All assets">
        <AllAssets />
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

      <HomeSection title="Modals">
        <AllModals />
      </HomeSection>
    </Wrapper>
  );
}
