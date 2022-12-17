import Loader from "@/ui/Loader/Loder";
import Typography from "@mui/material/Typography";
import Error from "../Error/Error";

interface DataWrapperProps {
  children: JSX.Element | JSX.Element[];
  isLoading?: boolean;
  isRefetching?: boolean;
  isError?: boolean;
  hasInitialState?: boolean;
  initialState?: JSX.Element | JSX.Element[];
  hasInfinite?: boolean;
  hasinfiniteLoader?: boolean;
  infiniteLoader?: JSX.Element | JSX.Element[];
  loader?: JSX.Element | JSX.Element[];
  refetchingLoader?: JSX.Element | JSX.Element[];
  errText?: string;
}

const DataWrapper = (props: DataWrapperProps) => {
  const {
    isLoading,
    isError,
    isRefetching,
    children,
    hasInitialState,
    initialState,
    hasInfinite = false,
    infiniteLoader,
    loader,
    refetchingLoader = null,
    errText = "Something went wrong",
    hasinfiniteLoader = false
  } = props;

  // checking for initial state
  if (hasInitialState && !isLoading) {
    return initialState;
  }

  // when the api is in pending state
  if (isLoading) {
    return loader || <Loader />;
  }

  if (isError) {
    return <Error text={errText} />;
  }

  if (isRefetching) {
    return refetchingLoader || <Typography>Refetching...</Typography>;
  }

  if (hasInfinite) {
    return (
      <>
        {children}
        {hasinfiniteLoader && infiniteLoader}
      </>
    );
  }

  return children;
};

export default DataWrapper;
