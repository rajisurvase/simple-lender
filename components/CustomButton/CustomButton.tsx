import Loader from "@/ui/Loader/Loder";
import { Button } from "@mui/material";
import React from "react";


type CustomButtonProps = {
    children :React.ReactNode
    type : "button" | "submit" | "reset";
    isLoading? : boolean
}
const CustomButton = ({type, children, isLoading, ...rest} :CustomButtonProps ) => {
  return (
    <Button {...rest}
      type={type}
      disabled={isLoading}
      fullWidth
      sx={{ backgroundColor: "#7D8CC4" }}
      variant="contained"
    >
      {isLoading ? <Loader  /> : children}
    </Button>
  );
};

export default CustomButton;
