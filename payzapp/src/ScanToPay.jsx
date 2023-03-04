import React from "react";
import {
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import TransactionAmount from "./TransactionAmount";
import IconButton from '@mui/material/IconButton';
import QrCodeIcon from '@mui/icons-material/QrCode2Outlined'; 

function ScanToPay() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  }
  const goToCred = () => {
    navigate("/success");
  }
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "54px"
    }}>
      <TransactionAmount />
      <h1 style={{color: '#1976d2'}}>Scan to Pay</h1>
      <IconButton color="primary" aria-label="upload picture" component="label"
        onClick={goToCred}
      >
        <QrCodeIcon sx={{ width: '100%', height: '200px', margin: 'auto', color: 'black' }} 
        />
      </IconButton>
      <Button variant="outlined"
        onClick={handleCancel}
        style={{ marginTop: '16px' }}
      >Cancel</Button>
    </Box>
  )
}

export default ScanToPay;
