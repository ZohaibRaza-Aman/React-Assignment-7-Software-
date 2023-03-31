import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
};

export default function SMModal(props) {
  const { open, close, modalTitle, innerContent, modalFooter } = props;
  console.log('innerContent', innerContent)
  const handleClose = () => {
    close(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="d-flex justify-content-between
          align-items-center">
          <Typography id="modal-modal-title" variant="h6"
           component="h2"
           >
            {modalTitle}
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>{innerContent}</Box>
          <Box>{modalFooter}</Box>
        </Box>
      </Modal>
    </div>
  );
}