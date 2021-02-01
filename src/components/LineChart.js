import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { connect } from "react-redux";

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets: [],
      },
    };
  }

  componentDidUpdate() {
    if (this.state.chartData.labels.length == 0) {
      this.getData();
    }
  }

  getData = () => {
    const userRef = this.props.user;
    const pLabels = [];
    const pData = [];
    const perf = userRef.performance;
    for (let i = perf.length - 1; i >= 0; i--) {
      pLabels.push(moment(perf[i].date, moment.ISO_8601).format("MMM Do YYYY"));
      pData.push(perf[i].endingValue);
    }
    this.setState({
      chartData: {
        labels: pLabels,
        datasets: [
          {
            data: pData,
            borderWidth: 1,
            responsive: true,
            maintainAspectRatio: false,
            backgroundColor: "rgba(0, 0, 10, 0.2)",
            borderColor: "rgba(0, 0, 0, 1)",
          },
        ],
      },
    });
  };
  render() {
    return (
      <div className='performanceChart'>
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Account Performance ($USD)",
              fontSize: 25,
              fontColor: "rgba(255, 255, 255, .85)",
            },
            legend: {
              display: false,
            },
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    fontColor: "white",
                    fontSize: 18,
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(LineChart);
