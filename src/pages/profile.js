import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

//MUI
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

//components
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import MyTable from "../components/MyTable";

const styles = () => ({
  grid: {
    width: "85vw",
    marginRight: "auto",
    marginLeft: "auto",
  },
});

const t_columns = [
  { id: "date", label: "Date", minWidth: 170 },
  {
    id: "symbol",
    label: "Symbol",
    minWidth: 120,
  },
  { id: "shares", label: "Shares", align: "right", minWidth: 70 },
  {
    id: "value",
    label: "Ammount",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "order",
    label: "Order Type",
    minWidth: 170,
    align: "right",
  },
];
const p_columns = [
  {
    id: "symbol",
    label: "Symbol",
    minWidth: 70,
  },
  { id: "numShares", label: "Shares", align: "left", minWidth: 70 },
];

class profile extends Component {
  render() {
    const {
      classes,
      transactions,
      positions,
      credentials: { cash },
    } = this.props;
    const transactionData = [];
    for (let i = 0; i < transactions.length; i++) {
      let data = {};
      data.order = transactions[i].order;
      data.shares = transactions[i].shares;
      data.symbol = transactions[i].symbol;
      data.value = transactions[i].value;
      data.date = moment(transactions[i].date, moment.ISO_8601).format(
        "MMM Do YYYY"
      );
      transactionData.push(data);
    }
    return (
      <>
        <LineChart />
        <div className={classes.grid}>
          <Grid container spacing={5}>
            <Grid item sm={12}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color='textSecondary'
                    gutterBottom
                  >
                    Cash & Cash Investments
                  </Typography>
                  <Typography variant='h5' component='h2'>
                    ${cash}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={6}>
              <PieChart />
            </Grid>
            <Grid item sm={6}>
              <MyTable
                data={positions}
                columns={p_columns}
                title={"Positions"}
              />
            </Grid>
            <Grid item sm={12}>
              <MyTable
                data={transactionData}
                columns={t_columns}
                title={"Transactions"}
              />
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.user.transactions,
  positions: state.user.holdings,
  credentials: state.user.credentials,
});

export default connect(mapStateToProps)(withStyles(styles)(profile));
