import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { lookup } from "../pages/redux/actions/dataActions";
import { logoutUser } from "../pages/redux/actions/userActions";

//MUI imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { fade } from "@material-ui/core/styles";

//components
import MyButton from "./MyButton";
import AuthMenu from "./AuthMenu";

//assets
import logo from "../assets/Vims-logo6.png";

const color = fade("#ffffff", 0.15);

const styles = (theme) => ({
  ...theme.spread,
  button: {
    "&:hover": {
      backgroundColor: "#2d3238",
      color: "white",
    },
    margin: ".5rem 0 .5rem 1rem",
    fontFamily: "Monserrat, sans-serif",
    fontWeight: "525",
  },
  bg: {
    backgroundColor: color,
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    borderRadius: "5px",
  },
  inputSearch: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 1000px ${color} inset`,
    },
    borderRadius: "0px",
  },
});

class NavbarHome extends Component {
  constructor() {
    super();
    this.state = {
      symbol: "",
    };
  }

  componentDidUpdate() {
    console.log("didUpdate props.data.symbol, ", this.props.data.symbol);
    if (
      this.props.data.symbol &&
      this.state.symbol !== this.props.data.symbol
    ) {
      this.setState({ symbol: this.props.data.symbol });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSearch = (event) => {
    if (event) event.preventDefault();
    console.log("hello search");
    const requestData = {
      symbol: this.state.symbol,
    };
    console.log("handleSearch history prop ", this.props.history);
    this.setState({
      symbol: "",
    });
    this.props.lookup(requestData, this.props.history);
  };

  render() {
    const {
      classes,
      user: { authenticated },
    } = this.props;
    return (
      <div className='classes.root'>
        <AppBar position='sticky'>
          <Toolbar className='nav-container'>
            <img src={logo} alt='logo' className='navlogo' />
            {authenticated === true ? (
              <>
                <MyButton page='/profile'>Home</MyButton>
                <div className={classes.bg}>
                  <Button
                    onClick={this.handleSearch}
                    variant='contained'
                    className={classes.button}
                    size='large'
                  >
                    <SearchIcon />
                  </Button>
                  <TextField
                    color='secondary'
                    className={classes.searchField}
                    placeholder='Search Symbol...'
                    id='symbol'
                    name='symbol'
                    value={this.state.symbol}
                    onChange={this.handleChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        this.handleSearch();
                      }
                    }}
                    fullWidth={true}
                    inputProps={{ className: classes.inputSearch }}
                    autoComplete='false'
                  />
                </div>
                <AuthMenu />
              </>
            ) : (
              <>
                <MyButton page='/'>Home</MyButton>
                <MyButton page='/signup'>Signup</MyButton>
                <Typography className={classes.right}> </Typography>
                <MyButton page='/login'>Login</MyButton>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
NavbarHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});

const mapActionsToState = {
  lookup,
  logoutUser,
};

export default withRouter(
  connect(mapStateToProps, mapActionsToState)(withStyles(styles)(NavbarHome))
);
