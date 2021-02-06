import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../assets/Vims-logo6.png";
import { placeOrder } from "./redux/actions/dataActions";

//MUI
import Toolbar from "@material-ui/core/Toolbar";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import { fade } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: "5vh",
  },
  form: {
    backgroundColor: fade("#ffffff", 0.5),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "70%",
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: "10px",
    padding: "2vh 0 2vh 0",
  },
  field: {
    paddingRight: "1vw",
    minWidth: "5vw",
  },
  image: {
    width: "35vw",
    marginRight: "auto",
    marginLeft: "auto",
  },
});

const orderTypes = [
  {
    value: true,
    label: "Buy",
  },
  {
    value: false,
    label: "Sell",
  },
];

class order extends Component {
  constructor() {
    super();
    this.state = {
      symbol: "",
      shares: 1,
      buy: true,
    };
  }

  componentDidMount() {
    console.log("In ComponentDidUpdate");
    console.log(this.state.symbol == "");
    console.log(this.props.data.currQuote);
    console.log(this.state.symbol == "" && this.props.data.currQuote);
    if (this.state.symbol == "" && this.props.data.currQuote) {
      console.log("in if statement");
      console.log(this.props.data.currQuote.symbol);
      this.setState({
        symbol: this.props.data.currQuote.symbol,
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSelect = (event) => {
    let value = event.target.value;
    console.log(typeof value);
    if (value.localeCompare("Buy")) {
      this.setState({
        buy: true,
      });
    } else {
      this.setState({
        buy: false,
      });
    }
  };

  handleChangedNumber = (event) => {
    let newVal = Math.round(event.target.value);
    if (newVal <= 0 || newVal == null) newVal = 1;
    this.setState({
      [event.target.name]: newVal,
    });
  };

  placeOrder = (event) => {
    if (event) event.preventDefault();
    this.props.placeOrder(this.state, this.props.history);
  };

  render() {
    console.log("in render");
    const {
      classes,
      data: { currQuote },
    } = this.props;
    return (
      <>
        <Toolbar className={classes.root}>
          <form className={classes.form} onSubmit={this.placeOrder}>
            <TextField
              id='buy'
              name='Buy'
              select
              label='Order Type'
              value={this.state.buy ? "Buy" : "Sell"}
              className={classes.field}
              onChange={this.handleSelect}
            >
              {orderTypes.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name='symbol'
              value={currQuote.symbol}
              label='Symbol'
              className={classes.field}
              onChange={this.handleChange}
            />
            <TextField
              label='Price per Share'
              value={currQuote.price}
              disabled
              className={classes.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>$</InputAdornment>
                ),
              }}
            />
            <TextField
              label='Number of Shares'
              name='shares'
              className={classes.field}
              value={this.state.shares}
              type='number'
              InputProps={{ inputProps: { min: 1 } }}
              onChange={this.handleChangedNumber}
            />
            <Button variant='outlined' type='submit'>
              Place Order
            </Button>
          </form>
        </Toolbar>
        <div className={classes.image}>
          <img src={logo} alt='logo' />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapActionsToProps = {
  placeOrder,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(order));
