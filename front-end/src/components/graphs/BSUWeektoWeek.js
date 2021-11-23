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
      ],
      title: {
        text: "test",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#000000'
        },
      }
    })

    console.log(this.state.options.xaxis.categories)
  }

  state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        noData: {
          text: "Loading...",
          align: 'center',
          verticalAlign: 'middle',
          offsetX: 0,
          offsetY: 0,
          style: {
            color: "#000000" ,
            fontSize: '14px',
            fontFamily: "Times New Roman"
          }
        }
      }
    },
    series: [
      {
        name: "series-1",
        noData: {
          text: "Loading...",
          align: 'center',
          verticalAlign: 'middle',
          offsetX: 0,
          offsetY: 0,
          style: {
            color: "#000000" ,
            fontSize: '14px',
            fontFamily: "Times New Roman"
          }
        }
      }
    ],
    noData: {
      text: "Loading...",
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "#000000" ,
        fontSize: '14px',
        fontFamily: "Times New Roman"
      }
    }
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