import React, {useEffect, useState} from "react";
import Chart from "react-apexcharts";
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'


function LineChart({selection, options}) {
  const [dates, setDates] = useState([]);
  const [cases, setCases] = useState([]);

  let coulor = ['#0033A0']
  let route = '/bsuweekdata';
  let chartTitle = "Bsu Cases Per Week"

  if (selection === "Boise State University") {
    route = '/bsuweekdata';
    coulor = ['#0033A0'];
    chartTitle = "BSU Cases Per Week"
  } else {
    route = '/isuweekdata';
    coulor = ['#F47920'];
    chartTitle = "ISU Cases Per Week";
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
    <Box  sx={{
      display: 'flex',
      flexWrap: 'wrap',
      height: '100%',
    }}>
      <Paper sx={{width: '100%', height: '100%'}}>
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
                text: 'Cases',
                style: {
                  fontSize: '16px'
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
          width="100%"
          height="100%"
      />
      </Paper>
    </Box>
  );
}


export default LineChart;