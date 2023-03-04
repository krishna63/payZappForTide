import {
    Button,
    Box,
} from "@mui/material";

import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import React, { useEffect, useContext } from "react";
import AppContext from "./AppContext";
import { useNavigate } from "react-router-dom";
import TransactionAmount from "./TransactionAmount";

function TapToPay() {
    const { amount } = useContext(AppContext);
    const navigate = useNavigate();
    const handleCancel = () => {
        navigate("/");
    }
    useEffect(() => {
        if (parseInt(amount) < 100) {
            setTimeout(() => {
                const data = { amount: amount };
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
        } else {
            setTimeout(() => {
                navigate('/auth');
            }, 3000);
        }
    }, [])
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "54px"
        }}>
            <TransactionAmount />
            <h1 style={{color: 'blue'}}>Tap to Pay</h1>
            <ContactlessOutlinedIcon sx={{ width: '100%', height: '200px', margin: 'auto' }} />
            <Button variant="outlined"
                onClick={handleCancel}
                style={{ marginTop: '16px' }}
            >Cancel</Button>
        </Box>
    );
}

export default TapToPay;
