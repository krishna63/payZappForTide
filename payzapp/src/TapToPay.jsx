import { Grid, Paper, Button, Box } from "@mui/material";
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import React from "react";
import AppContext from "./AppContext";
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
                        <CurrencyPoundIcon size="small" />{amount}
                    </Item>
                </Grid>
            </Grid>
            <ContactlessOutlinedIcon sx={{ width: '100%', height: '200PX', margin: 'auto' }} />
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Button variant="outlined">Cancel</Button>
            </Box>
        </>
    );
}

export default TapToPay;
