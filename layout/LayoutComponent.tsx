// import { loginAccessTokenCookieName } from "@/config/constants";
// import { parseCookies } from "nookies";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
// eslint-disable-next-line mui-path-imports/mui-path-imports
import { Grid } from "@mui/material";
import SidebarComponent from "./SidebarComponent";
import HeaderComponent from "./HeaderComponent";
// import { parseCookies } from "nookies";
// import { loginAccessTokenCookieName } from "@/config/constants";
import WrapLoader from "@/components/Loader/WrapLoader";
import { usePathname } from "next/navigation";
import { parseCookies } from "nookies";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setLoginData } from "@/reduxtoolkit/slices/userSlice";
// import { useSearchParams } from 'next/navigation';

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const pathname = usePathname()
  const isAuthProcess = pathname?.includes("auth")
  const cookies = parseCookies();
  const userDetails = cookies?.userDetails? JSON?.parse(cookies?.userDetails) : "";
  const [loading, setLoading] = useState(true)
  
   useEffect(()=>{
     if(userDetails){
      dispatch(setLoginData(userDetails))
     }
   },[userDetails])
  
  if(loading) {
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
    return <WrapLoader />
  }

  return (
    <Box>
      {!isAuthProcess ? <Grid container>
          <Grid item lg={1.5}>
            <SidebarComponent />{" "}
          </Grid>
          <Grid item lg={10.5} xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <HeaderComponent />
              </Grid>
              <Grid item xs={12}>
                {children}
              </Grid>
            </Grid>
          </Grid>
        </Grid> : (
          <div>
           {children}
          </div>
        ) }
    </Box>
  );
};

export default LayoutComponent;
