import React, {useEffect, useState} from "react";
import Chart from "react-apexcharts";


function BSUWeektoWeek({selection}) {
  const [dates, setDates] = useState([]);
  const [cases, setCases] = useState([]);

  let route = '/bsuweekdata';

  if (selection === "Boise State University") {
    route = '/bsuweekdata';
  } else {
    route = '/isuweekdata';
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
                      categories: dates
                    }
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