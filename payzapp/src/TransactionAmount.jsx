import React, {useContext} from "react";
import AppContext from "./AppContext";
import {
  Paper,
} from "@mui/material";
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

function TransactionAmount() {
  const { amount } = useContext(AppContext);
  return (
    <Paper
      elevation={0}
      style={{textAlign: 'center'}}
    >
      <b>Transaction Amount</b>
      <p style={{
        fontSize: 50,
        margin: 0
      }}>
        {parseInt(amount, 10).toLocaleString('en-GB', {currency: "GBP", style: 'currency'})}
      </p>

    </Paper>
  )
}
export default TransactionAmount;