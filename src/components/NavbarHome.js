import React, { Component } from "react";
import PropTypes from "prop-types";

//MUI imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

//components
import MyButton from "./MyButton";

//assets
import logo from "../assets/Vims-logo6.png";

const styles = (theme) => ({
  ...theme.spread,
});

class NavbarHome extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className='classes.root'>
        <AppBar position='sticky'>
          <Toolbar className='nav-container'>
            <img src={logo} alt='logo' className='navlogo' />
            <MyButton page='/'>Home</MyButton>
            <MyButton page='/signup'>Signup</MyButton>
            <Typography className={classes.right}> </Typography>
            <MyButton page='/login'>Login</MyButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
NavbarHome.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NavbarHome);
