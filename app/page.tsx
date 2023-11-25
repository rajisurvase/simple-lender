/* eslint-disable mui-path-imports/mui-path-imports */
/* eslint-disable react/jsx-curly-brace-presence */
// eslint-disable-next-line lines-around-directive
"use client"

// import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import WrapLoader from "@/components/Loader/WrapLoader";
import { Box, Button, Card, Divider, Grid, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import BorrowersTable from "@/components/Borrower/BorrowersTable";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(true)
  //  const {userData, isLoggedIn} = useSelector((s)=>s.userSlice)

  useEffect(() => {
    enqueueSnackbar("Hey! Welcome to next 13!");
    setTimeout(()=>{
      setLoading(false)
    },2000)
  }, []);

  if(loading){
    return <WrapLoader />
  }

  return (
    <div>

        <Grid container spacing={4} p={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              component={Card}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Divider
                orientation="vertical"
                color="#FDA228"
                sx={{ height: 100, width: "0.2rem" }}
              />
              <Box>
                <Typography>Total Amount </Typography>
                <Typography>
                  ₹{" "}
                 0
                </Typography>
              </Box>
              <Box pr={2}>
                <CurrencyRupeeIcon color="success" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              component={Card}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Divider
                orientation="vertical"
                color="green"
                sx={{ height: 100, width: "0.2rem" }}
              />
              <Box>
                <Typography>Total Interest </Typography>
                <Typography>
                  ₹ 0
                </Typography>
              </Box>
              <Box pr={2}>
                <KeyboardDoubleArrowUpOutlinedIcon color="success" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              component={Card}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Divider
                orientation="vertical"
                color="danger"
                sx={{ height: 100, width: "0.2rem" }}
              />
              <Box>
                <Typography>Total Principal </Typography>
                <Typography>
                  ₹ 0
                </Typography>
              </Box>
              <Box pr={2}>
                <RadioButtonCheckedOutlinedIcon color="primary" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              component={Card}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Divider
                orientation="vertical"
                color="#FDA228"
                sx={{ height: 100, width: "0.2rem" }}
              />
              <Box>
                <Typography>Total Amount </Typography>
                <Typography>
                  ₹ 0
                </Typography>
              </Box>
              <Box pr={2}>
                <KeyboardDoubleArrowUpOutlinedIcon color="success" />
              </Box>
            </Box>
          </Grid>
        </Grid>


        <Card style={{ margin: "1rem" }} >
            <Box my={1} textAlign={'right'} >
              <Link href="/borrowers/create" >
                 <Button variant='contained' sx={{borderRadius : '1.5rem', backgroundColor : "#7D8CC4", textTransform:"none"}} endIcon={<AddIcon  sx={{fontSize:'small'}} />} >Add Borrower  </Button>
              </Link>
            </Box>
          <BorrowersTable />
       </Card>
  </div>
  );
}
