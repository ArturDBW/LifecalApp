import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DataTable from "../components/DataTable";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  maxHeight: 500,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,

  "@media (max-width: 1200px)": {
    width: 800,
  },
  "@media (max-width: 800px)": {
    width: 600,
  },
  "@media (max-width: 600px)": {
    maxWidth: 350,
    overflowX: "auto",
  },
};

interface Product {
  name: string | null;
  id: number | string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

type ProductsModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRow: string;
  tableData: Product[];
  setTableData: React.Dispatch<React.SetStateAction<Product[]>>;
};

export default function ProductsModal({
  tableData,
  setTableData,
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
          <DataTable
            selectedRow={selectedRow}
            tableData={tableData}
            setTableData={setTableData}
          />
        </Box>
      </Modal>
    </div>
  );
}
