import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DataTable from "../components/DataTable";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type ProductsModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRow: string;
};

export default function ProductsModal({
  open,
  setOpen,
  selectedRow,
}: ProductsModalProps) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DataTable selectedRow={selectedRow} />
        </Box>
      </Modal>
    </div>
  );
}
