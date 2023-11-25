import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
  import React, { FormEvent, useState } from "react";
  import Paper from "@mui/material/Paper";
  import InputBase from "@mui/material/InputBase";
  import MenuIcon from "@mui/icons-material/Menu";
  import SearchIcon from "@mui/icons-material/Search";
  import IconButton from "@mui/material/IconButton";
  import DashboardIcon from "@mui/icons-material/Dashboard";
  import GroupAddIcon from "@mui/icons-material/GroupAdd";
  import ListItemIcon from "@mui/material/ListItemIcon";
  import Link from "next/link";
  import LogoutIcon from "@mui/icons-material/Logout";
  import Drawer from "@mui/material/Drawer";
  import List from "@mui/material/List";
  import ListItem from "@mui/material/ListItem";
  import ListItemButton from "@mui/material/ListItemButton";
  import ListItemText from "@mui/material/ListItemText";
//   import {  usePathname } from "next/navigation";
  import CalculateIcon from '@mui/icons-material/Calculate';
import Button from "@mui/material/Button";
import { useAppSelector } from "@/hooks/useAppSelector";
import Avatar from "@mui/material/Avatar";
  
  const sideLabel = [
    {
      id: 1,
      name: "Dashboard",
      icon: <DashboardIcon />,
      link: "/",
    },
    {
      id: 2,
      name: "Borrowers",
      icon: <GroupAddIcon />,
      link: "/borrowers"
    },
    {
      id: 3,
      name: "Calculator",
      icon: <CalculateIcon />,
      link: "/calculator"
    }
    // {
    //   id: 2,
    //   name: "Records",
    //   icon: <GroupAddIcon />,
    //   link: "/records",
    // },
  ];
  const HeaderComponent = () => {
    // const router = useRouter();
    const pathname = "/"
    const [result, setResult] = React.useState(false);
    const [data, setData] = useState("");
    const {userData, isLoggedIn}= useAppSelector((a)=>a.userSlice)
  
    const handleSubmit = (e : FormEvent) => {
      e.preventDefault();
      // if (data) {
        // router.push(`/?find=${data}`);
      // }
    };
  
    // useEffect(() => {
    //   setData(router?.query?.find);
    // }, [router?.query?.find]);
  
    return (
      <Box py={1} px={1}>
        <Grid container alignItems="center">
          <Grid
            item
            lg={5}
            md={5}
            sm={5}
            xs={2}
            display="flex"
            alignItems="center"
          >
            <Box display={{ xs: "block", lg: "none" }}>
              <IconButton onClick={() => setResult(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer open={result} onClick={() => setResult(false)}>
                <Box
                  sx={{ width: 250, backgroundColor: "#CEF3FF", height: "100vh" }}
                  onClick={() => setResult(false)}
                  onKeyDown={() => setResult(false)}
                >
                  <List>
                    <Box>
                      <Typography textAlign="center" py={3}>
                        Logo
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                    >
                      <div>
                        {sideLabel?.map((item, index) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <div key={index}>
                            <Link href={item?.link}>
                              <ListItem key={item?.id} disablePadding>
                                <ListItemButton>
                                  <ListItemIcon>{item?.icon}</ListItemIcon>
                                  <ListItemText primary={item?.name} />
                                </ListItemButton>
                              </ListItem>
                            </Link>
                          </div>
                        ))}
                      </div>
                      <div>
                        <ListItem disablePadding>
                          <ListItemButton
                            // onClick={() => (isLoggedIn ? signOut() : signIn())}
                          >
                            <ListItemIcon color="white">
                              <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary={isLoggedIn ? "logout" : "SignIn"}
                            />
                          </ListItemButton>
                        </ListItem>
                      </div>
                    </Box>
                  </List>
                </Box>
              </Drawer>
            </Box>
            <Typography display={{ xs: "none", lg: "block" }} variant="h6" pl={2}>
              {" "}
              Total Borrowers
            </Typography>
          </Grid>
         {pathname === '/' &&  <Grid item lg={5} md={7} sm={7} xs={10}>
            <Paper
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <InputBase
                value={data}
                onChange={(e) => setData(e.target.value)}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Borrower Name"
              />
              <IconButton type="submit" >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid> }
         
          <Grid
            item
            lg={2}
            display={{ xs: "none", lg: "block" }}
          >
            {isLoggedIn ?
            <Link href="/profile" >
              <Box display="flex" justifyContent='end'   >
                <Box pr={2}>
                  <Avatar alt="Piraji survase" src="https://image.shutterstock.com/mosaic_250/301519563/1139558762/stock-photo-image-of-hesitant-unshaven-european-male-with-thick-beard-holds-chin-purses-lips-with-clueless-1139558762.jpg" />
                </Box>
                <div>
                  <Typography fontSize={13}>{userData?.fullName}</Typography>
                  <Typography fontSize={13}>Super Admin</Typography>
                </div>
              </Box>
              </Link>
             :
              <Box textAlign='center' >
                <Button variant='outlined'
                //  onClick={() => signIn()}
                  >SignIn</Button>
              </Box>
             } 
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default HeaderComponent;