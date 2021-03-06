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
import Alert from "@material-ui/lab/Alert";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: "5vh",
    padding: "0",
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
  customError: {
    width: "68%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "2vh",
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
      errors: {},
    };
  }

  componentDidMount() {
    if (this.state.symbol === "" && this.props.data.currQuote) {
      this.setState({
        symbol: this.props.data.currQuote.symbol,
      });
    }
  }

  componentDidUpdate() {
    if (this.props.UI.errors && this.state.errors !== this.props.UI.errors) {
      this.setState({ errors: this.props.UI.errors });
    }
    console.log("buy = ", this.state.buy);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSelect = (event) => {
    let value = event.target.value;
    if (value === "Buy") {
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
    const {
      classes,
      data: { currQuote },
    } = this.props;
    const errors = this.state.errors;
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
        {errors.msg && (
          <Alert
            variant='filled'
            severity='error'
            className={classes.customError}
          >
            {errors.msg}
          </Alert>
        )}
        <div className={classes.image}>
          <img src={logo} alt='logo' />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  UI: state.UI,
});

const mapActionsToProps = {
  placeOrder,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(order));
