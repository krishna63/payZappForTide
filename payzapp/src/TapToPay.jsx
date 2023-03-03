import { Grid, Paper, Button, Box } from "@mui/material";
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import React from "react";
import AppContext from "./AppContext";
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function TapToPay() {
  const { amount } = React.useContext(AppContext);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  }

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "54px"
    }}>
      <Paper
        elevation={0}
      >
        <Item style={{ fontSize: 32 }}>
          <b>Transaction Amount</b>
        </Item>
        <Item>
          <h1 style={{
            fontSize: 50,
            margin: 0
          }}>
            <CurrencyPoundIcon size="medium" />
            {amount}</h1>
        </Item>
      </Paper>
      <ContactlessOutlinedIcon sx={{ width: '100%', height: '200px', margin: 'auto' }} />
      <Button variant="outlined"
        onClick={handleCancel}
        style={{ marginTop: '16px' }}
      >Cancel</Button>
    </Box>
  );
}

export default TapToPay;
