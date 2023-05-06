"use client";

import { useMemo } from "react";
// material-ui
import CssBaseline from "@mui/material/CssBaseline";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// project import
import Typography from "./typography";
import palette from "./palette";
import shadows from "./shadows";


// ==============================|| DEFAULT THEME - MAIN  ||============================== //

export default function ThemeCustomization({ children }) {
  // const theme = Palette();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = Typography(`'Poppins', sans-serif`);



  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography:themeTypography,
      shadows: shadows()
    }),
    []
  );

  const themes = createTheme(themeOptions);
  // themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
