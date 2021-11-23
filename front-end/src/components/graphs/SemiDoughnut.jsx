import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";

//By default colors are white and black
var chosenColors = ["#000000", "#FFFFFF"];

function SemiDoughnut({selection}) {
  const[occupants, setOccupants] = useState([50,50]);

  let route = '/isolation-bed-occupants';
  if(selection === "Boise State University"){
    route = '/isolation-bed-occupants';
    //Sets colors to blue and orange - One will need to be specified for each section of chart
    chosenColors = ["#0000FF", "#FFA500"];
  } else if(selection === "Idaho State University"){
    route = '/test-route';
    //Sets colors to black and orange - One will need to be specified for each section of chart
    chosenColors = ["#FFA500", "#000000"];
  }else{
    route = '/test-route';
  }

  useEffect(() =>
    {fetch(route).then(res => res.json()).then(data =>
        {setOccupants(data.Occupants);
        });
    }, [route, selection]);

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={{
                colors: [chosenColors[1], chosenColors[0]],
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