import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { Box, List, ListItemText, ListItem, ListItemButton, Divider } from "@mui/material";
const Reports = () => {
    const [trx_data, setTrx_data] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8080/reports", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setTrx_data(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);
    const trxData = trx_data.map(trx => {
        return (
            <>
                <ListItem key={v4()}>
                    <ListItemButton key={v4()} sx={{flexDirection: 'column',
alignItems: 'flex-start'}}>
                        <ListItemText primary={`Amount: ${trx.amount}`} key={v4()} />
                        <ListItemText primary={`Trx id: ${trx.trx_id}`} key={v4()} />
                        <ListItemText primary={`Date: ${trx.date}`} key={v4()} />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </>
        )
    })
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <nav aria-label="secondary mailbox folders">
                <List>
                    {trxData}
                </List>
            </nav>
        </Box>
    );
};
export default Reports;