import React from "react";
import {
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import TransactionAmount from "./TransactionAmount";
import QrCodeIcon from '@mui/icons-material/QrCode2Outlined';

function ScanToPay() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  }
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "54px"
    }}>
      <TransactionAmount />
      <QrCodeIcon sx={{ width: '100%', height: '200px', margin: 'auto' }} />
      <Button variant="outlined"
        onClick={handleCancel}
        style={{ marginTop: '16px' }}
      >Cancel</Button>
    </Box>
  )
}

export default ScanToPay;
