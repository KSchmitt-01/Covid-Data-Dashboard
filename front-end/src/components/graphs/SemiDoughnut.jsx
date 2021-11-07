import React, { Component } from "react";
import Chart from "react-apexcharts";

class SemiDoughnut extends Component {
  constructor(props) {
    super(props);

    this.state = {
        series: [4, 96],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      };
    }


  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type={this.state.options.chart.type}
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SemiDoughnut;