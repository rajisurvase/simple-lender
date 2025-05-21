
import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';

import SidebarComponent from "./SidebarComponent";
import HeaderComponent from "./HeaderComponent";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useQuery } from "react-query";
import { GetUserProfileDetails } from "@/api/functions/user.api";
import { QUERYKEY } from "@/config/QueryKey";
import { setLoginData } from "@/redux-toolkit/slices/userSlice";



const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const pathname = usePathname()
  const isAuthProcess = pathname?.includes("auth")

  const {isLoading} = useQuery({
    queryFn : GetUserProfileDetails,
    queryKey : [QUERYKEY.user.details],
    enabled : !isAuthProcess,
    onSuccess :(res)=>{
       if(res.status ===200){
        dispatch(setLoginData(res.data))
       }
    }
  })

 if (isLoading) {
  return (
    <Box sx={{ p: 2 }}>
      <Skeleton variant="rectangular" width="100%" height={60} />
      <Skeleton variant="rectangular" width="100%" height={500} sx={{ mt: 2 }} />
    </Box>
  );
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
