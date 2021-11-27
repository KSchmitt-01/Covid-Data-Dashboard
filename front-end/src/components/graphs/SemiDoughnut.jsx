import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";

function SemiDoughnut({selection}) {
  const[occupants, setOccupants] = useState([50,50]);
  const[title, setTitle] = useState('Isolation Capacity');
  const[labels, setLabels] = useState(["Occupied Beds (%)", "Avaliable Beds (%)"]);
  const[colors, setColors] = useState(["#0033A0", "#D64309"]);

  let route = '/isolation-bed-occupants';
  if(selection === "Boise State University"){
    route = '/isolation-bed-occupants';
  } else{
    route = '/test-route';
  }

  useEffect(() =>
    {fetch(route).then(res => res.json()).then(data =>
        {
          setOccupants(data.Total);
          setTitle(data.Title);
          setLabels(data.Labels);
          setColors(data.Colors);
        });
    }, [route, selection]);

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={{
                colors: colors,
                title: {
                  text: title,
                  align: 'Center',
                  style: {
                    fontSize:  '24px',
                    fontWeight:  'bold',
                    color:  '#263238'
                  },
                },
                labels: labels,
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
              }}
              series={occupants}
              labels={['test1', 'test2']}
              type={'donut'}
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }

export default SemiDoughnut;