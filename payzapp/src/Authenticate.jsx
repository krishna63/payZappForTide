import React from "react";
import { TextField, Box, Button } from "@mui/material";
import TransactionAmount from "./TransactionAmount";

function Authenticate() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TransactionAmount />
            <TextField id="outlined-basic" label="Enter PIN" variant="outlined" />
            <p><b>or</b></p>
            <Button variant="outlined">Receive OTP</Button>
            <Button variant="outlined">Pay</Button>
        </Box>
    )
}
export default Authenticate;