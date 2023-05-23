import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Adventure Time
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Episodes</Button>
        <Button color="inherit">About</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
