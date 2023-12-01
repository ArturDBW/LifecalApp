import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const HeaderContainerStyled = styled.header``;

export default function Header() {
  return (
    <HeaderContainerStyled>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit" component="div" py={3}>
            CalcCalories
          </Typography>
        </Toolbar>
      </AppBar>
    </HeaderContainerStyled>
  );
}
