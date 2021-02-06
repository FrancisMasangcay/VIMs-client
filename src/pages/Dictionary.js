import React, { Component } from "react";
import { definitions } from "../util/definitions.js";
import { Link } from "react-router-dom";

//MUI
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

class Dictionary extends Component {
  render() {
    return (
      <>
        <Toolbar disableGutters={true} className='pageLinkContainer'>
          {definitions.map((item) => {
            let keys = Object.keys(item);
            let key = keys[0];
            if (key.length > 1) key = "#";
            return (
              <div className='pageLink'>
                <a href={`#${key}`}>{key}</a>
              </div>
            );
          })}
        </Toolbar>
        <div>
          {definitions.map((category) => {
            //category is an obj
            let header = Object.keys(category)[0];
            if (header.length > 1) header = "#";
            return (
              <div id={header} className='definition-section'>
                <Grid container className='definition-links' spacing={3}>
                  <Grid item sm={12}>
                    <h2>{header[0][0]}</h2>
                  </Grid>
                  {Object.entries(category).map((terms) => {
                    //terms is an array w 0 index being the key and 1 index being the array of terms/definition objects
                    // console.log("terms = ", terms);
                    // console.log("Type of terms = ", typeof terms);
                    let termsArr = terms[1];
                    return termsArr.map((item) => {
                      let theTerm = item.term;
                      return (
                        <Grid item sm={4}>
                          <Link to={`${this.props.match.url}/${theTerm}`}>
                            {theTerm}
                          </Link>
                        </Grid>
                      );
                    });
                  })}
                </Grid>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Dictionary;
