/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable mui-path-imports/mui-path-imports */
import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {  Typography } from "@mui/material";

import ListItemIcon from '@mui/material/ListItemIcon';
import Link from "next/link";
import LogoutIcon from '@mui/icons-material/Logout';
import { sideLabel } from "./HeaderComponent";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';



const SidebarComponent = () => {
const router = useRouter()
const dispatch = useAppDispatch();
const {isLoggedIn} = useAppSelector((s)=>s.userSlice)


const handleAuth =()=>{
  if(isLoggedIn) {
    dispatch(logout())
  } else {
    router.push("/auth/signin")
  } 
}

  return (
    <Box sx={{ backgroundColor: '#CEF3FF' }} display={{ xs: 'none', lg: 'block', height: "100vh" }}>
        <Box>
          <Typography textAlign={'center'} py={3} >Logo</Typography>
        </Box>
        <Box  > 
          
          {sideLabel?.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>
              <Link href={item?.link}  >
                <ListItem disablePadding>
                  <ListItemButton >
                    <ListItemIcon >
                      {item?.icon}
                    </ListItemIcon>
                    <ListItemText primary={item?.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            </div>
          ))}

         {isLoggedIn && <Link href={"/profile"} >
            <ListItem disablePadding>
               <ListItemButton  >
              <ListItemIcon color='white'>
                <PersonOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Profile"} />
             </ListItemButton>
            </ListItem>
          </Link>
          }
          <ListItem disablePadding>
            <ListItemButton onClick={handleAuth} >
              <ListItemIcon color='white'>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={isLoggedIn ? "logout" : "SignIn"} />
            </ListItemButton>
          </ListItem>
          
        </Box>

      </Box>
  )
}

export default SidebarComponent