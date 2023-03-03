import { Grid, Paper } from "@mui/material";
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import React from "react";
import AppContext from "./AppContext";
import Euro from "@mui/icons-material/Euro";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function TapToPay() {
    const { amount } = React.useContext(AppContext);
    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <Item>
                        <b>Transaction Amount</b>
                        <CurrencyPoundIcon size="small"/>{amount}
                    </Item>
                </Grid>
            </Grid>
        </>
    );
}

export default TapToPay;
