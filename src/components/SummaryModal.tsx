import { Button, Modal, Box, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProgressBar } from "../elements/ProgressBar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Paseczek = styled.div`
  width: 300px;
  height: 6px;

  border-radius: 30px;
  background-color: #cecece;
`;

const PaseczekwSrodku = styled.div`
  width: 60%;
  background-color: #039c03;
  height: 100%;
  border-radius: 30px;
`;

export const SummaryModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your personalized health plan is ready!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Daily nutritional recommendations
          </Typography>
          <Typography>Calories</Typography>
          <Paseczek>
            <PaseczekwSrodku></PaseczekwSrodku>
          </Paseczek>
          <ProgressBar />
          <Typography>xdd</Typography>
          <Link to="/home">
            <Button variant="contained" size="large" fullWidth>
              testowy link do home
            </Button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
};
