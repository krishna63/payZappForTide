import { Button, Box } from "@mui/material";
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import React from "react";
import TransactionAmount from "./TransactionAmount";
function TapToPay() {
    return (
        <>
            <TransactionAmount />
            <ContactlessOutlinedIcon sx={{ width: '100%', height: '200PX', margin: 'auto' }} />
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Button variant="outlined">Cancel</Button>
            </Box>
        </>
    );
}

export default TapToPay;
