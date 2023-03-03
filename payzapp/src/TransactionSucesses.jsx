import {
    Box,
  } from "@mui/material";
  import React from "react";
  import TransactionAmount from "./TransactionAmount";
  import DoneOutlined from "@mui/icons-material/DoneAllOutlined"
  
  function TransactionSucess() {
    return (
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "54px"
      }}>
        <DoneOutlined sx={{ width: '50px', height:'50px', margin: 'auto' }} />
        <TransactionAmount />
        <b style={{fontSize: 50, marginTop: '16px'}}>Transaction Id</b>
        <p style={{
            fontSize: 50,
            margin: "16px"
        }}>
        {parseInt(Math.random()*10000, 10)}
        </p>
      </Box>
    );
  }
  
  export default TransactionSucess;
  