import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        datasets: [],
        labels: [],
      },
    };
  }

  componentDidUpdate() {
    if (this.state.chartData.labels.length == 0) {
      this.getData();
    }
  }

  getData = () => {
    const alloc = this.props.user.credentials.allocation;
    if (alloc.liquid == undefined) alloc.liquid = 0;
    if (alloc.stock == undefined) alloc.stock = 0;
    if (alloc.mutualFunds == undefined) alloc.mutualFunds = 0;

    const theData = [alloc.liquid, alloc.stock, alloc.mutualFunds];

    this.setState({
      chartData: {
        labels: ["Cash %", "Stock %", "Mutual Fund %"],
        datasets: [
          {
            data: theData,
            label: "Asset Allocation",
            borderWidth: 1,
            responsive: true,
            maintainAspectRatio: false,
            backgroundColor: [
              "rgba(255, 210, 0, 1)",
              "rgba(253, 163, 0, 1)",
              "rgba(196, 61, 22, 1)",
            ],
            borderColor: "rgba(255, 255, 255, 1)",
          },
        ],
      },
    });
  };

  render() {
    // const { allocation } = this.props;
    return (
      <div className='allocationChart'>
        <Pie
          data={this.state.chartData}
          options={{
            legend: {
              labels: {
                fontColor: "white",
                fontSize: 14,
                Positon: "bottom",
              },
            },
            title: {
              display: true,
              text: "Asset Allocation",
              fontSize: 25,
              fontColor: "rgba(255, 255, 255, .85)",
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

export default connect(mapStateToProps)(PieChart);
