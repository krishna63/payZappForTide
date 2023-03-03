import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ArchiveIcon from '@mui/icons-material/Archive';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AppContext from './AppContext';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <AppContext.Provider value={"abcd"}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
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
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Outlet />
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
            </CardContent>
          </Card>
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
              {/* <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} /> */}
            </BottomNavigation>
          </Paper>
        </Box>
        <Paper />
      </AppContext.Provider>
    </React.Fragment>
  );
}

export default App;
