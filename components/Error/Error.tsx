import { Alert } from "@mui/material";
import React from "react";

const Error = ({ text<string> =  "something went wrong" }) => {
  return <Alert severity="error">{text}</Alert>;
};

export default Error;
