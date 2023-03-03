import {
  Button,
  Box,
} from "@mui/material";

import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import React from "react";
import { useNavigate } from "react-router-dom";
import TransactionAmount from "./TransactionAmount";

function TapToPay() {
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
      <ContactlessOutlinedIcon sx={{ width: '100%', height: '200px', margin: 'auto' }} />
      <Button variant="outlined"
        onClick={handleCancel}
        style={{ marginTop: '16px' }}
      >Cancel</Button>
    </Box>
  );
}

export default TapToPay;
