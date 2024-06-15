"use client";

import BorrowersTable from "@/components/Borrower/BorrowersTable";
import { Card } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Card style={{ margin: "1rem" }}>
      <BorrowersTable />
    </Card> 
    
  );
};

export default page;
