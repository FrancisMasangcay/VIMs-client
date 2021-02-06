import React, { Component } from "react";
// import { match } from "react-router-dom";

//MUI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

//components
import { definitions } from "../util/definitions";

const styles = {
  wrapper: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
    marginTop: "20vh",
    marginRight: "auto",
    marginLeft: "auto",
  },
  root: {
    width: "55vw",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "15vh",
    padding: "2rem",
  },
  def: {
    fontSize: "2rem",
    color: "#74787a",
  },
};

class Term extends Component {
  render() {
    let letter = this.props.match.params.letter;
    const theTerm = this.props.match.params.term;
    const crossSection = Object.entries(
      definitions.find((element) => {
        return Object.keys(element)[0] === letter;
      })
    );

    const definition = crossSection[0][1].find((data) => {
      return data.term === theTerm;
    }).definition;

    const { classes } = this.props;
    return (
      <>
        <div className={classes.wrapper}>
          <Card classes={classes.root}>
            <CardContent>
              <Typography variant='h3'>{theTerm}</Typography>
              <Typography variant='p' className={classes.def}>
                {definition}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Term);
