// yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material
// yarn remove @mui/material @emotion/react @emotion/styled @mui/icons-material

import {
  Box,
  ButtonGroup,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { Google } from "@mui/icons-material";

export function MUI_PPCS() {
  return (
    <Box>
      <Typography variant="h3">
        Props of elements in <code>ButtonGroup</code> is changing style.
      </Typography>
      I think it's unintentional
      <Typography variant="h3">
        href property changing the right border of last element
      </Typography>
      <Box sx={{ backgroundColor: "aqua" }}>
        <ButtonGroup color="error">
          <Button href="/">btn</Button>
          <IconButton>
            <Google />
          </IconButton>
        </ButtonGroup>
        <ButtonGroup color="error">
          <Button>btn</Button>
          <IconButton>
            <Google />
          </IconButton>
        </ButtonGroup>
      </Box>
      <Box sx={{ backgroundColor: "#fff" }}>
        <ButtonGroup color="error">
          <IconButton>
            <Google />
          </IconButton>
          <IconButton>
            <Google />
          </IconButton>
          <Button href="/"> btn </Button>
          <Button href="/"> btn </Button>
          <IconButton>
            <Google />
          </IconButton>
          <IconButton>
            <Google />
          </IconButton>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
