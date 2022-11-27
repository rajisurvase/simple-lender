import React from "react";
import colors from "@/styles/abstracts/_variable.module.scss";
import dynamic from "next/dynamic";

const Stack = dynamic(() => import("@mui/material/Stack"));
const Box = dynamic(() => import("@mui/material/Box"));

const AllColors = () => {

  return (
    <Stack direction="row" flexWrap="wrap">
      {Object.keys(colors).map((item: string) => (
        <Box
          sx={{
            backgroundColor: colors[item],
            height: 80,
            width: 80,
            margin: 2
          }}
        >
          <span>{colors[item]}</span>
        </Box>
      ))}
    </Stack>
  );
};

export default AllColors;
