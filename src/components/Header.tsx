import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <header>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit" component="div" py={3}>
            Lifecal
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}
