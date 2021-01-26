import React, { Component } from "react";

//MUI imports
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

//components
import MyButton from "./MyButton";

//assets
import logo from "../assets/Vims-logo6.png";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3b4249cc",
    },
    secondary: {
      main: "#4a148c",
    },
  },
});

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  right: {
    flexGrow: 1,
  },
}));

export default function NavbarHome() {
  const classes = styles();
  return (
    <div className='classes.root'>
      <MuiThemeProvider theme={theme}>
        <AppBar position='sticky'>
          <Toolbar className='nav-container'>
            <img src={logo} alt='logo' className='navlogo' />
            <MyButton page='/'>Home</MyButton>
            <MyButton page='/signup'>Signup</MyButton>
            <Typography className={classes.right}> </Typography>
            <MyButton page='/login'>Login</MyButton>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}
