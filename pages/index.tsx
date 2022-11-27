import { useEffect } from "react";
import useNotiStack from "hooks/useNotistack";
import dynamic from "next/dynamic";

const AllButtons = dynamic(() => import("@/components/AllButtons"));
const AllInputs = dynamic(() => import("@/components/AllInputs"));
const AllAvatar = dynamic(() => import("@/components/AllAvatar"));
const AllColors = dynamic(() => import("@/components/AllColors"));
const HomeSection = dynamic(() => import("@/components/HomeSection"));
const Wrapper = dynamic(() => import("@/layout/wrapper/Wrapper"));

export default function Home() {
  const { toastSuccess, toastError } = useNotiStack();

  useEffect(() => {
    toastError("err");
    toastSuccess("This is sucess");
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
