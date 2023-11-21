import { Box, Button, Container, Paper } from "@mui/material";
import backgroundImage from "../assets/health.avif";
import { FirstBox } from "../components/FirstBox";
import { useState } from "react";
import { SecondBox } from "../components/SecondBox";
import { ThirdBox } from "../components/ThirdBox";
import { FourthBox } from "../components/FourthBox";

export const StarterModal = () => {
  const [changePage, setChangePage] = useState<number>(0);
  console.log(changePage);

  return (
    <Container
      sx={{
        minWidth: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box>
        <Button onClick={() => setChangePage(changePage + 100)}>+</Button>
        <Button onClick={() => setChangePage(changePage - 100)}>-</Button>
      </Box>
      <Paper
        elevation={24}
        sx={{
          minHeight: "60vh",
          maxWidth: "360px",
          backgroundColor: "transparent",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <FirstBox changePage={changePage} />
        <SecondBox changePage={changePage} />
        <ThirdBox changePage={changePage} />
        <FourthBox changePage={changePage} />
      </Paper>
    </Container>
  );
};
