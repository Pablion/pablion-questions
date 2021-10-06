// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material";

import { orange, yellow } from "@mui/material/colors";
import { MUI_PPCS } from "./MUI501-passing-props-changes-style/MUI_PPCS";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: yellow["A700"] },
      secondary: { main: orange["A700"] },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <MUI_PPCS />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
