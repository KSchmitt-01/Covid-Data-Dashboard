import React, {useEffect, useState} from "react";
import Chart from "react-apexcharts";


function BSUWeektoWeek({selection}) {
  const [dates, setDates] = useState([]);
  const [cases, setCases] = useState([]);

  let coulor = ['#0033A0']
  let route = '/bsuweekdata';

  if (selection === "Boise State University") {
    route = '/bsuweekdata';
    coulor = ['#0033A0']
  } else {
    route = '/isuweekdata';
    coulor = ['#F47920']
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
                      labels: {
                                show: true,
                                title: {
                                    text: "Weeks",
                                    maxWidth: 200,
                                    style: {
                                        fontSize: '80px'
                                    }
                                }
                      }
                    },
                    yaxis: {
                      title: {
                          text: 'Cases',
                            style: {
                              fontSize: '24px'
                            }
                      }
                    },
                    colors:coulor
                }}
                series={[{


                    name: "cases",
                    data: cases

                }]}

                type="line"
                width="850"
            />
          </div>
        </div>
      </div>
  );
}


export default BSUWeektoWeek;