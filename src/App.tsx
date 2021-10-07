import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  styled,
  ButtonGroup,
  Button as MUIButton,
  Typography,
  IconButton,
  Box,
  ButtonProps,
} from "@mui/material";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { orange, yellow } from "@mui/material/colors";
import { MUI_PCS } from "./MUI501-props-changes-style/MUI_PCS";
import { GitHub } from "@mui/icons-material";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: yellow["A700"] },
      secondary: { main: orange["A700"] },
    },
  });

  function Button({ href, ...props }: ButtonProps) {
    return href ? (
      <MUIButton href={"/pablion-questions" + href} {...props}></MUIButton>
    ) : (
      <MUIButton {...props}></MUIButton>
    );
  }

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

  const Header = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AppWarp>
          <BrowserRouter basename="/pablion-questions">
            <Header>
              <Box>
                MUI:
                <ButtonGroup>
                  <Button href="/MUI_PCS">props changes style</Button>
                </ButtonGroup>
              </Box>
              <Box>
                Source code:
                <ButtonGroup>
                  <IconButton href="https://github.com/Pablion/pablion-questions/blob/master/src/MUI501-props-changes-style/MUI_PCS.tsx">
                    <GitHub fontSize="medium" />
                  </IconButton>
                </ButtonGroup>
              </Box>
            </Header>
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
