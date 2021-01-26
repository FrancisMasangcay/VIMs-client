import React, { Component } from "react";

//components
import NavbarHome from "../components/NavbarHome";

export class login extends Component {
  render() {
    return (
      <>
        <NavbarHome />
        <div class='container'>
          <h1>login page</h1>
        </div>
      </>
    );
  }
}

export default login;
