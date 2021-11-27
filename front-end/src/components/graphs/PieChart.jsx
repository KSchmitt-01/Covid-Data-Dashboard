import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";

function PieChart({selection, options}) {
  const[occupants, setOccupants] = useState([50,50]);

  let route = '/total-vaccinations-per-type';
  if(selection === "Boise State University"){
    route = '/total-vaccinations-per-type';
  } else if(selection === 'Idaho State University'){
    route = '/total_cases_by_location';
  } else{
    route = '/test-route';
  }

  useEffect(() =>
    {fetch(route).then(res => res.json()).then(data =>
        {setOccupants(data.vaccinations);
        });
    }, [route, selection]);

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">

            <Chart
              options={options}
              series={occupants}
              type={'pie'}
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }

export default PieChart;