import React from "react";
import { TextField, Box, Button } from "@mui/material";
import TransactionAmount from "./TransactionAmount";
import { useNavigate } from "react-router-dom";


function Authenticate() {
  const navigate = useNavigate();

  const redirectToSucess = () => {
    setTimeout(() => {
      navigate("/success");
    }, 3000)
  }

  return (
    <Box sx={{ 
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "54px"
    }}>
      <TransactionAmount />
      <TextField id="outlined-basic" label="Enter PIN" variant="outlined" 
        style={{
          margin: '20px 0'
        }}
        type="password"
        maxlength="4"
      />
      <p><b>or</b></p>
      <Button variant="outlined"
        style={{
          margin: '20px 0'
        }}
      >
        Send OTP
      </Button>
      <Button variant="outlined"
        onClick={redirectToSucess}
      >Pay</Button>
    </Box>
  )
}
export default Authenticate;