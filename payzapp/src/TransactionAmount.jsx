import React from "react";
import AppContext from "./AppContext";
import { Box } from "@mui/material";
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
function TransactionAmount() {
    const { amount } = React.useContext(AppContext);
    return (
        <Box sx={{width:'100%'}}>
            <b>Transaction Amount</b>
            <CurrencyPoundIcon size="small" />{amount}
        </Box>
    )
}
export default TransactionAmount;