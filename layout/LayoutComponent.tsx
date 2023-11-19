
import { loginAccessTokenCookieName } from '@/config/constants';
import { parseCookies } from 'nookies';
import React from 'react'
import Box from '@mui/material/Box';
// eslint-disable-next-line mui-path-imports/mui-path-imports
import { Grid } from '@mui/material';
import SingInComponent from 'app/auth/signin/page';
import SidebarComponent from './SidebarComponent';
import HeaderComponent from './HeaderComponent';

const LayoutComponent = ({children} : {children : React.ReactNode}) => {

  const cookies = parseCookies();
  const token = cookies?.[loginAccessTokenCookieName];

  return (
    <Box>
    {/* {session && ( */}
      <Grid container >
            <Grid item lg={1.5}  ><SidebarComponent /> </Grid>
            <Grid item lg={10.5} xs={12} >
                <Grid container >
                    <Grid item xs={12}><HeaderComponent /></Grid>
                    <Grid item xs={12}  >{children}</Grid>
                </Grid>
            </Grid>
        </Grid>
    {/* )}  */}
    {token && (
      <SingInComponent />
    )}
    </Box>
  )
}

export default LayoutComponent