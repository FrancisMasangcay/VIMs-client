import React, { Component } from "react";

//MUI
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = () => ({
  form: {
    display: "flex",
    flexDirection: "row",
  },
});

class order extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Toolbar>
          <form className={classes.form}>
            <Select
              labelId='demo-customized-select-label'
              id='demo-customized-select'
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </form>
        </Toolbar>
      </>
    );
  }
}

export default withStyles(styles)(order);
