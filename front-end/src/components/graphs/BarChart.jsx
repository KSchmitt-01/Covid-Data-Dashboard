import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";

function BarChart({selection, options}) {
    const [dates, setDates] = useState([]);
    const [cases, setCases] = useState([]);
    // const[title, setTitle] = useState('On Campus Cases');
    // const[labels, setLabels] = useState(["Total Cases on Campus", "Total Cases by Week"]);
    // const[colors, setColors] = useState(["#0033A0", "#D64309"]);


  let coulor = ['#0033A0']
  let route = '/weekly-on-campus';
  let chartTitle = "Bsu On-Campus Cases Per Week"

  if (selection === "Boise State University") {
    route = '/weekly-on-campus';
    coulor = ['#0033A0'];
    chartTitle = "BSU On-Campus Cases Per Week"
  } else {
    route = '/isuweekdata';
    coulor = ['#F47920'];
    chartTitle = "ISU On-Campus Cases Per Week";
  }

    useEffect(() => 
        {fetch(route).then(res => res.json()).then(data =>
            {
              const d = []
              const c = []

            for (let i = 0; i < data.length; i++) {
                d.push(data[i].date);
                c.push(data[i].cases);
            }

        d.reverse()
        c.reverse()
            setDates(d)
            setCases(c)
    
            });
        }, [route, selection]);

        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={{
                                chart: {
                                    id: "basic-bar"
                                  },
                                  xaxis: {
                                    categories: dates,
                                    title: {
                                      text: chartTitle,
                                      align: 'Center',
                                      margin: 10,
                                      offsetX: 0,
                                      offsetY: 0,
                                      floating: false,
                                      style: {
                                        fontSize:  '24px',
                                        fontWeight:  'bold',
                                        color:  '#263238'
                                      },
                                    },
                                  },
                                  yaxis: {
                                    title: {
                                        text: 'On-Campus Cases',
                                          style: {
                                            fontSize: '16px'
                                          }
                                    }
                                  },
                                  colors:coulor
                              }}
                              series={[{
                                  name: "On-Campus Cases",
                                  data: cases
              
                              }]}
              
                              type="bar"
                              width="850"
                        />
                    </div>
                </div>
            </div>
        );

} export default BarChart;