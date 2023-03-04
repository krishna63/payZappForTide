import React, { useContext } from "react";
import { TextField, Box, Button } from "@mui/material";
import TransactionAmount from "./TransactionAmount";
import { useNavigate } from "react-router-dom";
import AppContext from "./AppContext";

function Authenticate() {
  const navigate = useNavigate();
  const { amount } = useContext(AppContext);
  const redirectToSucess = () => {
    const data = { amount: amount };
    setTimeout(() => {
      fetch("http://127.0.0.1:8080/lessThanTen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          navigate("/success");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
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