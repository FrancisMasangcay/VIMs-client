import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class GeneralLineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
      _title: props.title,
      fontColor: props.fontColor,
    };
  }
  render() {
    return (
      <>
        <div className='chart'>
          <Line
            data={this.state.chartData}
            options={{
              title: {
                display: true,
                text: this.state._title,
                fontSize: 25,
                fontColor: this.state.fontColor,
              },
              legend: {
                display: false,
              },
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      fontColor: this.state.fontColor,
                      fontSize: 18,
                      beginAtZero: true,
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: {
                      fontColor: this.state.fontColor,
                      fontSize: 14,
                      beginAtZero: true,
                    },
                  },
                ],
              },
              animation: {
                duration: 0, // general animation time
              },
              hover: {
                animationDuration: 0, // duration of animations when hovering an item
              },
              responsiveAnimation: 0,
            }}
          />
        </div>
      </>
    );
  }
}

export default GeneralLineChart;
