// yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material
// yarn remove @mui/material @emotion/react @emotion/styled @mui/icons-material

import {
  Box,
  ButtonGroup,
  Button,
  IconButton,
  Typography,
  styled,
  Paper,
  Divider,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

export function MUI_PCS() {
  useTheme();
  const RowBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  });

  function IconButtonWithoutProps() {
    return (
      <IconButton>
        <Google />
      </IconButton>
    );
  }

  function IconButtonWithProps(iconProps: any) {
    return (
      <IconButton {...iconProps}>
        <Google />
      </IconButton>
    );
  }
  function IconButtonWithPropsWithOnClick(iconProps: any) {
    return (
      <IconButton
        onClick={() => {
          alert("useless click");
        }}
        {...iconProps}
      >
        <Google />
      </IconButton>
    );
  }
  return (
    <Box>
      <Typography variant="h3">
        Props of elements in <code>ButtonGroup</code> is changing style.
      </Typography>
      I think it's unintentional
      <Divider sx={{ m: 2 }} />
      <Typography variant="h4">
        Property <code>href</code> changes the right border of last element
      </Typography>
      <RowBox>
        <Paper>
          <ButtonGroup>
            <Button href="/">btn</Button>
            <IconButton>
              <Google />
            </IconButton>
          </ButtonGroup>
          <br />
          Button with href
        </Paper>
        <Paper>
          <ButtonGroup>
            <Button>btn</Button>
            <IconButton>
              <Google />
            </IconButton>
          </ButtonGroup>
          <br />
          Button without href
        </Paper>
      </RowBox>
      <Divider sx={{ m: 2 }} />
      <Typography variant="h4">
        Passing empty <code>props</code> changes color (maybe it's caused by{" "}
        <code>useTheme</code>?)
      </Typography>
      <RowBox>
        <Paper>
          <ButtonGroup>
            <IconButton>
              <Google />
            </IconButton>
            <IconButton>
              <Google />
            </IconButton>
            <Button href="/">btn</Button>
            <IconButton>
              <Google />
            </IconButton>
            <IconButton>
              <Google />
            </IconButton>
          </ButtonGroup>
          <br />
          With <code>IconButton</code> and <code>{"<MUI_ICON>"}</code>, all
          good.
        </Paper>
        <Paper>
          <ButtonGroup>
            <IconButtonWithoutProps />
            <IconButtonWithoutProps />
            <Button href="/">btn</Button>
            <IconButtonWithoutProps />
            <IconButtonWithoutProps />
          </ButtonGroup>
          <br /> Using new component <code>IconButton</code> without{" "}
          <code>props</code>.
          <br /> Misbehavior: buttons are white and not in group.
          <br /> See the hover highlight of second and third "G"
        </Paper>
        <Paper>
          <ButtonGroup>
            <IconButtonWithProps />
            <IconButtonWithProps />
            <Button href="/">btn</Button>
            <IconButtonWithProps />
            <IconButtonWithProps />
          </ButtonGroup>
          <br /> Using new component <code>IconButton</code> with{" "}
          <code>props</code>.
        </Paper>
      </RowBox>
      <Divider sx={{ m: 2 }} />
      <Typography variant="h4">
        More <code>IconButton</code> with <code>props</code>.
      </Typography>
      <RowBox>
        <Paper>
          <ButtonGroup size="large">
            <IconButtonWithProps />
            <IconButtonWithProps />
            <IconButtonWithProps />
            <Button href="/">btn</Button>
            <Button href="/">btn</Button>
          </ButtonGroup>
          <br />
          All <code>IconButton</code>-s are on one side.
          <br />
          Incoherent behavior but I like:
          <br /> The hover background of last <code>IconButton</code> will
          change.
        </Paper>
        <Paper>
          <ButtonGroup size="large">
            <IconButtonWithProps />
            <IconButtonWithProps />
            <Button href="/">btn</Button>
            <IconButtonWithProps />
            <IconButtonWithProps />
          </ButtonGroup>
          <br />
          Large size. All good.
        </Paper>
        <Paper>
          <ButtonGroup size="large">
            <IconButtonWithPropsWithOnClick />
            <IconButtonWithPropsWithOnClick />
            <Button href="/">btn</Button>
            <IconButtonWithPropsWithOnClick />
            <IconButtonWithPropsWithOnClick />
          </ButtonGroup>
          <br />
          With <code>onClick</code>. All good.
        </Paper>
      </RowBox>
    </Box>
  );
}
