import React, { Component } from "react";
import { connect } from "react-redux";
import orderPlaced from "../assets/orderPlaced.jpg";

//MUI
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  root: {
    width: "55vw",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "15vh",
  },
  media: {
    height: "35vh",
  },
  bg: {
    backgroundColor: "#2e2e2e",
  },
});

const CustomTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

class OrderStatus extends Component {
  render() {
    const { classes, orderResponse } = this.props;
    return (
      <>
        <div className={classes.wrapper}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={orderPlaced}
              title='Order-Summary'
            />
            <CardContent className={classes.bg}>
              <CustomTypography gutterBottom variant='h5' component='h2'>
                Order Summary
              </CustomTypography>
              <CustomTypography component='p'>
                {orderResponse.msg
                  ? orderResponse.msg
                  : "Sorry we were not able to place your order"}
              </CustomTypography>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  orderResponse: state.data.orderResponse,
});
export default connect(mapStateToProps)(withStyles(styles)(OrderStatus));
