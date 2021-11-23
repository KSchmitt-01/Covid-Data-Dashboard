import React, {Component, useEffect, useState} from "react";
import Chart from "react-apexcharts";





class BSUWeektoWeek extends React.Component {

  async componentDidMount() {
    const res = await fetch('/bsuweekdata')
    const data = await res.json();
    console.log(data)

    const dates = []
    const cases = []

    for (let i = 0; i < data.length; i++) {
      dates.push(data[i].date);
      cases.push(data[i].cases);
    }

    dates.reverse()
    cases.reverse()
    this.setState({data: dates});

    this.state.options.xaxis.categories = dates

    this.setState({
      options: {
        chart: {
          id: "basic-bar"
        }, xaxis: {
          categories: dates
        }
      },
      series: [
        {
          name: "Cases",
          data: cases
        },
      ]
    })


    console.log(this.state.options.xaxis.categories)
  }

    state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="850"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BSUWeektoWeek;