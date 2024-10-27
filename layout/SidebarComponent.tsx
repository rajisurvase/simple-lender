
import * as React from "react";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import LogoutIcon from '@mui/icons-material/Logout';
import { sideLabel } from "./HeaderComponent";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { logout } from "@/redux-toolkit/slices/userSlice";
import { Stack, styled } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import MainLogoComponent from "@/components/AppLogo/MainLogoComponent";
import { parseCookies } from "nookies";
import { loginAccessTokenCookieName } from "@/config/constants";

const SideBarStyle = styled(Box)(({ theme }) => ({
  backgroundColor: '#D289FF',
  display: 'none',
  height: '100vh',
  color: '#FFFFFF', // Setting the text color to white

  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}));

const SidebarComponent = () => {
  const pathname = usePathname()

  const dispatch = useAppDispatch();
  const cookies = parseCookies();
  const token = cookies?.[loginAccessTokenCookieName];

  const handleAuth = () => {
      dispatch(logout());   
  };
  return (
    <SideBarStyle>
       <MainLogoComponent
        height={66}
        width={110}
       />
      <Box sx={{ px: { xs: 2, md: 4 } }} >
        {sideLabel?.map((item, index) => {
          const isActive = pathname === item.link;
          return (
            <>  
            <Link key={index} href={item?.link}>
              <Stack display="flex" flexDirection="row" alignItems="center" >
               <Box pr={2} py={1} >
               {item?.icon} 
               </Box>
              <ListItemText primary={item?.name}/>
              </Stack>
              </Link>
              </>
          );
        })}

        {/* {isLoggedIn && ( */}
          <Link href={"/profile"}>
          <Stack display="flex" flexDirection="row" alignItems="center">
           <Box pr={2} py={1} >
           <PersonOutlineOutlinedIcon fontSize="small" />
           </Box>
          <ListItemText primary={"Profile"}/>
          </Stack>
          </Link>
        {/* )} */}
         <Link href={"javascript:void()"} onClick={handleAuth} >
          <Stack display="flex" flexDirection="row" alignItems="center">
           <Box pr={2} py={1} >
           <LogoutIcon fontSize="small" />
           </Box>
          <ListItemText primary={token ? "Logout" : "Sign In"} />
          </Stack>
          </Link>
      </Box>
    </SideBarStyle>
  );
};

export default SidebarComponent;
