"use client";

import BorrowerDetails from "@/components/Borrower/BorrowerDetails";
import TransitionTable from "@/components/Borrower/Transition/TransitionTable";
import { Box, Card } from "@mui/material";
import React from "react";

type IPageProps = {
  params: {
    BorrowerId: string;
    RecordId : string
  };
};
const Page = ({ params }: IPageProps) => {
    // console.log("params", params?.RecordID)
  return (
    <Box m="1rem">
       <BorrowerDetails />
      <Card>
        <TransitionTable recordId={params?.RecordId as string} />
      </Card>
    </Box>
  );
};

export default Page;
