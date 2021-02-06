import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../pages/redux/actions/userActions";

//MUI
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import withStyles from "@material-ui/core/styles/withStyles";

//components
import MyButton from "./MyButton";

const styles = (theme) => ({
  ...theme.spread,
  default: {
    "&:hover": {
      backgroundColor: "#2d3238",
      color: "white",
    },
    margin: "0 .5rem 0 .5rem",
    fontFamily: "Monserrat, sans-serif",
    fontWeight: "525",
  },
});

const AuthMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    console.log("In handle logout");
    console.log("props ", props);
    props.logoutUser();
    window.location.href = "/login";
  };

  const { classes } = props;
  return (
    <div>
      <Button
        variant='contained'
        className={classes.default}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <MyButton
            page='/logout'
            customClass={classes.root}
            onClickEvent={handleLogOut}
          >
            Logout
          </MyButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MyButton page='/dictionary' customClass={classes.root}>
            Definitions
          </MyButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MyButton page='/learn' customClass={classes.root}>
            Learn
          </MyButton>
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});

const mapActionsToState = {
  logoutUser,
};

export default connect(
  mapStateToProps,
  mapActionsToState
)(withStyles(styles)(AuthMenu));
