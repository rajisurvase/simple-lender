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
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalculateIcon from "@mui/icons-material/Calculate";
import Button from "@mui/material/Button";
import { useAppSelector } from "@/hooks/useAppSelector";
import Avatar from "@mui/material/Avatar";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/redux-toolkit/slices/userSlice";
import PaidIcon from '@mui/icons-material/Paid';
import MainLogoComponent from "@/components/AppLogo/MainLogoComponent";
import { styled } from "@mui/system";
import { Stack } from "@mui/material";

const SideBarStyle = styled(Box)(({ theme }) => ({
  backgroundColor: "#D289FF",
  display: "block",
  height: "100vh",
  color: "#FFFFFF", // Setting the text color to white

  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

export const sideLabel = [
  {
    id: 1,
    name: "Dashboard",
    icon: <DashboardIcon fontSize="small" />,
    link: "/",
  },
  {
    id: 2,
    name: "Borrowers",
    icon: <GroupAddIcon fontSize="small" />,
    link: "/borrowers",
  },
  {
    id: 3,
    name: "Transactions",
    icon: <PaidIcon fontSize="small" />,
    link: "/transactions",
  },
  {
    id: 4,
    name: "Calculator",
    icon: <CalculateIcon fontSize="small" />,
    link: "/calculator",
  },
];

const HeaderComponent = () => {
  const pathname = usePathname()
  const dispatch = useAppDispatch();
  const [result, setResult] = React.useState(false);
  const [data, setData] = useState("");
  const { userData, isLoggedIn } = useAppSelector((a) => a.userSlice);
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleAuth = () => {
    if (isLoggedIn) {
      dispatch(logout());
    } else {
      router.push("/auth/signin");
    }
  };

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
              <SideBarStyle
                onClick={() => setResult(false)}
                onKeyDown={() => setResult(false)}
              >
                <MainLogoComponent height={66} width={110} />
                <Box sx={{ px: 4 }}>
                  {sideLabel?.map((item, index) => {
                    const isActive = pathname === item.link;
                    return (
                      <>
                        <Link key={index} href={item?.link}>
                          <Stack
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                          >
                            <Box pr={2} py={1}>
                              {item?.icon}
                            </Box>
                            <ListItemText primary={item?.name} />
                          </Stack>
                        </Link>
                      </>
                    );
                  })}
                  {isLoggedIn && (
                    <Link href={"/profile"}>
                      <Stack
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                      >
                        <Box pr={2} py={1}>
                          <PersonOutlineOutlinedIcon fontSize="small" />
                        </Box>
                        <ListItemText primary={"Profile"} />
                      </Stack>
                    </Link>
                  )}
                  <Link href={"/javascript:void()"} onClick={handleAuth}>
                    <Stack
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                    >
                      <Box pr={2} py={1}>
                        <LogoutIcon fontSize="small" />
                      </Box>
                      <ListItemText
                        primary={isLoggedIn ? "Logout" : "Sign In"}
                      />
                    </Stack>
                  </Link>
                </Box>
              </SideBarStyle>
            </Drawer>
          </Box>
          <Typography display={{ xs: "none", lg: "block" }} variant="h6" pl={2}>
            {" "}
            Total Borrowers
          </Typography>
        </Grid>
          <Grid item lg={5} md={7} sm={7} xs={10}>
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
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
        <Grid item lg={2} display={{ xs: "none", lg: "block" }}>
          {true ? (
            <Link href="/profile">
              <Box display="flex" justifyContent="end">
                <Box pr={2}>
                  <Avatar
                    alt="Piraji survase"
                    src="https://image.shutterstock.com/mosaic_250/301519563/1139558762/stock-photo-image-of-hesitant-unshaven-european-male-with-thick-beard-holds-chin-purses-lips-with-clueless-1139558762.jpg"
                  />
                </Box>
                <Box>
                  <Typography fontSize={13} fontWeight="bold">
                    {userData?.fullName || "Piraji survase"}
                  </Typography>
                  <Typography fontSize={13}>Admin</Typography>
                </Box>
              </Box>
            </Link>
          ) : (
            <Box textAlign="center">
              <Link href="/auth/signin">
                <Button variant="outlined">SignIn</Button>
              </Link>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderComponent;
