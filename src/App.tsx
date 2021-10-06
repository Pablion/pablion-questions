// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  styled,
  ButtonGroup,
  Button,
  Typography,
} from "@mui/material";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { orange, yellow } from "@mui/material/colors";
import { MUI_PCS } from "./MUI501-props-changes-style/MUI_PCS";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: yellow["A700"] },
      secondary: { main: orange["A700"] },
    },
  });

  const AppWarp = styled("div")({
    backgroundColor: "#080808",
    minHeight: "100vh",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // fontSize: "calc(10px + 2vmin)",
    color: theme.palette.text.primary,
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AppWarp>
          <BrowserRouter>
            MUI:
            <ButtonGroup>
              <Button href="/MUI_PCS">props changes style</Button>
            </ButtonGroup>
            <Switch>
              <Route exact path="/">
                <Typography variant="h2">
                  Select from samples above to show content
                </Typography>
              </Route>
              <Route path="/MUI_PCS" children={<MUI_PCS />} />
            </Switch>
          </BrowserRouter>
        </AppWarp>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
