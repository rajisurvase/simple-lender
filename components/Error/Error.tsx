import { Alert } from "@mui/material";
import React from "react";

const Error = ({ text: string }) => {
  return <Alert severity="error">{text}</Alert>;
};

export default Error;
