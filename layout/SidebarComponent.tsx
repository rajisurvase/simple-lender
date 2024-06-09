import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from '@mui/material/ListItemIcon';
import Link from "next/link";
import LogoutIcon from '@mui/icons-material/Logout';
import { sideLabel } from "./HeaderComponent";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { logout } from "@/redux-toolkit/slices/userSlice";
import { Stack, styled } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import assest from "@/json/assest";
import MainLogoComponent from "@/components/AppLogo/MainLogoComponent";

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
  const router = useRouter();
  const pathname = usePathname()

  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((s) => s.userSlice);

  const handleAuth = () => {
    if (isLoggedIn) {
      dispatch(logout());
    } else {
      router.push("/auth/signin");
    }
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

        {isLoggedIn && (
          <Link href={"/profile"}>
          <Stack display="flex" flexDirection="row" alignItems="center">
           <Box pr={2} py={1} >
           <PersonOutlineOutlinedIcon fontSize="small" />
           </Box>
          <ListItemText primary={"Profile"}/>
          </Stack>
          </Link>
        )}
         <Link href={"/javascript:void()"} onClick={handleAuth} >
          <Stack display="flex" flexDirection="row" alignItems="center">
           <Box pr={2} py={1} >
           <LogoutIcon fontSize="small" />
           </Box>
          <ListItemText primary={isLoggedIn ? "Logout" : "Sign In"} />
          </Stack>
          </Link>
      </Box>
    </SideBarStyle>
  );
};

export default SidebarComponent;
