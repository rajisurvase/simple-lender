import Loader from "@/ui/Loader/Loder";
import React from "react";
import Error from "../Error/Error";

interface DataWrapperProps {
  children: JSX.Element | JSX.Element[];
  isLoading?: boolean;
  isRefetching?: boolean;
  isError?: boolean;
}

const DataWrapper = (props: DataWrapperProps) => {
  const { isLoading, isError, isRefetching, children } = props;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error text="Something went wrong" />;
  }

  if (isRefetching) {
    return <h4>Refetching....</h4>;
  }

  return children;
};

export default DataWrapper;
