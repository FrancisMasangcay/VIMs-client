import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//MUI
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

//Redux
import { connect } from "react-redux";
import { loginUser } from "./redux/actions/userActions";

//components

//assets
import logo from "../assets/Vims-logo6.png";

const styles = (theme) => ({
  ...theme.spread,
});

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidUpdate() {
    console.log("didUpdate props, ", this.props);
    if (this.props.UI.errors && this.state.errors !== this.props.UI.errors) {
      this.setState({ errors: this.props.UI.errors });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("login history prop ", this.props.history);
    this.props.loginUser(userData, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;
    return (
      <>
        <Grid container className={classes.form}>
          <Grid item sm />
          <Grid item sm>
            <img src={logo} alt='logo' className={classes.image} />
            <div className='form-bg'>
              <Typography variant='h3' className={classes.title}>
                Log In
              </Typography>
              <form
                noValidate
                onSubmit={this.handleSubmit}
                className={classes.fields}
              >
                <TextField
                  id='email'
                  name='email'
                  type='email'
                  label='Email'
                  variant='outlined'
                  color='secondary'
                  helperText={errors.email}
                  error={errors.email ? true : false}
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange}
                  fullwidth='true'
                  inputProps={{ className: classes.inputForm }}
                ></TextField>
                <TextField
                  id='password'
                  name='password'
                  type='password'
                  label='Password'
                  color='secondary'
                  helperText={errors.password}
                  error={errors.password ? true : false}
                  className={classes.textField}
                  value={this.state.password}
                  inputProps={{ className: classes.inputForm }}
                  onChange={this.handleChange}
                  variant='outlined'
                  fullwidth='true'
                ></TextField>
                {errors.general && (
                  <Typography variant='body2' className={classes.customError}>
                    {errors.general}
                  </Typography>
                )}
                <Button
                  type='submit'
                  variant='contained'
                  color='inherit'
                  className={classes.button}
                  disabled={loading}
                >
                  {!loading && <> Login </>}
                  {loading && (
                    <CircularProgress size={25} className={classes.progress} />
                  )}
                </Button>
              </form>
              <div className={classes.register}>
                <div>
                  don't have an account ?{" "}
                  <Link to='/signup' className={classes.link}>
                    signup here
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item sm />
        </Grid>
      </>
    );
  }
}
login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(login));
