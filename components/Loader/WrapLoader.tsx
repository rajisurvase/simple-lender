/* eslint-disable import/newline-after-import */
/* eslint-disable react/jsx-no-undef */
import assest from "@/json/assest";
import { Box, styled } from "@mui/system";
import Image from "next/image";
import React from "react";
const WrapperLoader = styled(Box)``;
export default function WrapLoader() {
  return (
    <WrapperLoader>
      <Box className="wrapper_loaderMain">
        <Box className="wrapper_loaderMainInner" sx={{backgroundColor:"skyblue"}} >
          <i>
            <Image src={assest.letterS} alt="icon" width={100} height={100} />
          </i>
          <i>
            <Image src={assest.letterC} alt="icon" width={100} height={100} />
          </i>
          <i>
            <Image src={assest.letterA} alt="icon" width={100} height={100} />
          </i>
          <i>
            <Image src={assest.letterA} alt="icon" width={100} height={100} />
          </i>
        </Box>
      </Box>
    </WrapperLoader>
  );
}
