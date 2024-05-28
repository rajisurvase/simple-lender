
import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import SidebarComponent from "./SidebarComponent";
import HeaderComponent from "./HeaderComponent";
import { usePathname } from "next/navigation";
// import { useAppDispatch } from "@/hooks/useAppDispatch";
// import { setLoginData } from "@/redux-toolkit/slices/userSlice";


const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  // const dispatch = useAppDispatch();
  const pathname = usePathname()
  const isAuthProcess = pathname?.includes("auth")
  const userDetails =  "";
  

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
