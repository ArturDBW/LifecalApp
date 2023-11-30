import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

const HeaderContainerStyled = styled.header``;

export default function Header() {
  return (
    <HeaderContainerStyled>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" color="inherit" component="div" py={2}>
            CalcCalories
          </Typography>
        </Toolbar>
      </AppBar>
    </HeaderContainerStyled>
  );
}
