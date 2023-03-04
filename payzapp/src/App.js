import './App.css';
import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import { InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ArchiveIcon from '@mui/icons-material/Archive';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AppContext from './AppContext';
import PointOfSaleOutlined from '@mui/icons-material/PointOfSaleOutlined';
import { Outlet,
  useLocation,
  useNavigate
} from "react-router-dom";

function App() {
  const { 
    pathname 
  } = useLocation();

  const navigate = useNavigate();

  const [purchaseAmount, setPurchaseAmount] = useState(0);

  const handleChange = ({target}) => {
    setPurchaseAmount(target.value);
  }

  const redirectToTapToPay = () => {
    if (purchaseAmount > 0) {
      navigate("/taptopay");
    } else if (purchaseAmount === 0) {
      
    }
  }

  const redirectToScanToPay = () => {
    navigate("/scantopay")
  }

  const appData = {
    // sync with inout below
    amount: purchaseAmount
  }

  const redirectToHome = () => {
    navigate("/");
  }

  return (
    <React.Fragment>
      <AppContext.Provider value={appData}>
        <Box sx={{ flexGrow: 1}}>
          <AppBar position="static"
            style={{
              backgroundColor: 'orange'
            }}
            onClick={redirectToHome}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                PayEazy
              </Typography>
                <PointOfSaleOutlined />
            </Toolbar>
          </AppBar>
          <Outlet />
          {pathname === "/" && (<Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Box sx={{ m: 2, display: 'flex', flexDirection: 'column' }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start">&#163;</InputAdornment>}
                  label="Amount"
                  value={purchaseAmount}
                  onChange={handleChange}
                />
                <Box sx={{m: 2, alignSelf: 'center'}}>
                  <Button variant="contained"
                    onClick={redirectToTapToPay}
                  >Tap to Pay</Button>
                </Box>
                <Box sx={{m: 1, alignSelf: 'center' }}>
                  <Button variant="contained"
                    onClick={redirectToScanToPay}
                  >Scan to Pay</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>)}
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
              showLabels
              value={"value"}
              onChange={(event, newValue) => {
                //setValue(newValue);
              }}
            >
              <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
              <BottomNavigationAction label="Payments" icon={<ReceiptIcon />} />
              <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
            </BottomNavigation>
          </Paper>
        </Box>
        <Paper />
      </AppContext.Provider>
    </React.Fragment>
  );
}

export default App;
