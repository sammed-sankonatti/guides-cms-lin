import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

const DialogBox = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open}>
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to Submit?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          No
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
