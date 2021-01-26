import React, { Component } from "react";
import axios from "axios";

//components
import NavbarHome from "../components/NavbarHome";

//assets
import logo from "../assets/Vims-logo6.png";

export class signup extends Component {
  state = {
    token: null,
  };
  componentDidMount() {
    axios
      .get("/signup")
      .then((res) => {
        console.log(res.data);
        this.setState({
          token: res.data,
        });
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  }
  render() {
    return (
      <>
        <NavbarHome />
        <div class='container'>
          <img src={logo} alt='logo' id='logo' />
        </div>
        <div id='form'>
          <form action='/createAcct' method='POST'>
            <input
              name='email'
              type='text'
              class='credentials'
              placeholder='Email'
              value="{{ request.form['email'] }}"
              required
            />
            <input
              name='firstnm'
              type='text'
              class='credentials'
              placeholder='First name'
              value="{{ request.form['firstnm'] }}"
              required
            />
            <input
              name='lastnm'
              type='text'
              class='credentials'
              placeholder='Last name'
              value="{{ request.form['lastnm'] }}"
              required
            />
            <input
              name='usrnm'
              type='text'
              class='credentials'
              placeholder='Username'
              required
            />
            <input
              name='pass'
              type='password'
              class='credentials'
              placeholder='Password'
              minlength='8'
              required
            />
            <input
              name='confirmP'
              type='password'
              class='credentials'
              placeholder='Confrim Password'
              minlength='8'
              required
            />
            <input type='submit' value='Create Account' />
          </form>
        </div>
      </>
    );
  }
}

export default signup;
