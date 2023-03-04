import { Box } from "@mui/material";
import React from "react";
import TransactionAmount from "./TransactionAmount";
import DoneOutlined from "@mui/icons-material/DoneAllOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";

function TransactionSucess() {
  const iconSize = { width: "30px", height: "30px" };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "54px",
      }}
    >
      <DoneOutlined
        sx={{ width: "50px", height: "50px", margin: "auto", color: "green" }}
      />
      <TransactionAmount />
      <b style={{ fontSize: 40, marginTop: "16px" }}>Transaction Id</b>
      <p
        style={{
          fontSize: 50,
          margin: "16px",
        }}
      >
        {parseInt(Math.random() * 10000, 10)}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "10px",
          width: "75%",
        }}
      >
        <ShareOutlinedIcon sx={{ ...iconSize }} />
        <DownloadForOfflineOutlinedIcon sx={{ ...iconSize }} />
        <SmsOutlinedIcon sx={{ ...iconSize }} />
      </div>
    </Box>
  );
}

export default TransactionSucess;
