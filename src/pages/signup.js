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
import { signupUser } from "./redux/actions/userActions";

//assets
import logo from "../assets/Vims-logo6.png";

const styles = (theme) => ({
  ...theme.spread,
});

class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPass: "",
      first: "",
      last: "",
      username: "",
      errors: {},
    };
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors)
  //     this.setState({
  //       errors: nextProps.UI.errors,
  //     });
  // }
  componentDidUpdate() {
    console.log("didUpdate props, ", this.props);
    if (this.props.UI.errors && this.state.errors !== this.props.UI.errors) {
      this.setState({ errors: this.props.UI.errors });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPass: this.state.confirmPass,
      first: this.state.first,
      last: this.state.last,
      username: this.state.username,
    };
    this.props.signupUser(newUserData, this.props.history);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {
      classes,
      UI: { loading /*, errors */ },
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
                Signup
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
                  inputProps={{ className: classes.input }}
                ></TextField>
                <TextField
                  id='first'
                  name='first'
                  label='First Name'
                  type='text'
                  variant='outlined'
                  color='secondary'
                  helperText={errors.first}
                  error={errors.first ? true : false}
                  className={classes.textField}
                  value={this.state.first}
                  onChange={this.handleChange}
                  fullwidth='true'
                  inputProps={{ className: classes.input }}
                ></TextField>
                <TextField
                  id='last'
                  name='last'
                  label='Last Name'
                  type='text'
                  variant='outlined'
                  color='secondary'
                  helperText={errors.last}
                  error={errors.last ? true : false}
                  className={classes.textField}
                  value={this.state.last}
                  onChange={this.handleChange}
                  fullwidth='true'
                  inputProps={{ className: classes.input }}
                ></TextField>
                <TextField
                  id='username'
                  name='username'
                  label='Username'
                  type='text'
                  variant='outlined'
                  color='secondary'
                  helperText={errors.username}
                  error={errors.username ? true : false}
                  className={classes.textField}
                  value={this.state.username}
                  onChange={this.handleChange}
                  fullwidth='true'
                  inputProps={{ className: classes.input }}
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
                  inputProps={{ className: classes.input }}
                  onChange={this.handleChange}
                  variant='outlined'
                  fullwidth='true'
                ></TextField>
                <TextField
                  id='confirmPass'
                  name='confirmPass'
                  type='password'
                  label='Confirm Password'
                  variant='outlined'
                  color='secondary'
                  helperText={errors.password}
                  error={errors.password ? true : false}
                  className={classes.textField}
                  value={this.state.confirmPass}
                  onChange={this.handleChange}
                  fullwidth='true'
                  inputProps={{ className: classes.input }}
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
                  {!loading && <> Signup </>}
                  {loading && (
                    <CircularProgress size={25} className={classes.progress} />
                  )}
                </Button>
              </form>
              <div className={classes.register}>
                <div>
                  already have an account ?{" "}
                  <Link to='/login' className={classes.link}>
                    login here
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

signup.propTypes = {
  classes: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  signupUser,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(signup));
