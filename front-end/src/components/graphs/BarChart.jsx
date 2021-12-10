import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

function BarChart({selection, innerTheme}) {
  const [dates, setDates] = useState([]);
  const [cases, setCases] = useState([]);

  let coulor = ["#D64309"]
  let route = '/weekly-on-campus';
  let chartTitle = "On-Campus Student Cases Week by Week";
  let xAxisTitle = "Date";

  if (selection === "Boise State University") {
    route = '/weekly-on-campus';
    coulor = ["#D64309"];
    chartTitle = "On-Campus Student Cases Week by Week"
  } else {
    route = '/isu-pocatello-cases';
    coulor = ['#F47920'];
    chartTitle = "Total Cases Week by Week in Pocatello,ID";
  }

  useEffect(() => {
    fetch(route).then(res => res.json()).then(data => {
      const d = [];
      const c = [];
      for (let i = 0; i < data.length; i++) {
          d.push(data[i].date);
          c.push(data[i].cases);
      }

      if(selection === "Boise State University"){
        d.reverse()
        c.reverse()
      }
      setDates(d)
      setCases(c)
    })
  }, [route, selection]);

    return (
      <Box  sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        <Paper sx={{width: '100%'}}>
          <Chart
            options={{
              chart: {
                  id: "simple-bar"
              },
              title: {
                text: chartTitle,
                align: 'center',
                style: {
                  fontSize: '24px',
                  color:  innerTheme.palette.text.primary
                }
              },
              xaxis: {
                categories: dates,
                title: {
                  text: xAxisTitle,
                  align: 'Center',
                  margin: 10,
                  offsetX: 0,
                  offsetY: 0,
                  floating: false,
                  style: {
                    fontSize:  '20px',
                    color:  innerTheme.palette.text.primary
                  },
                },
                labels:{
                  style:{
                    fontSize:  '13px',
                    colors: innerTheme.palette.text.primary
                  }
                },
              },
              yaxis: {
                title: {
                    text: 'On-Campus Cases',
                      style: {
                        fontSize: '20px',
                        color:  innerTheme.palette.text.primary
                      }
                },
                labels:{
                  style:{
                    fontSize:  '15px',
                    colors: innerTheme.palette.text.primary
                  }
                },
              },
              tooltip:{
                theme: innerTheme.palette.background.primary,
                style:{
                  fontSize: '18px',
                  color: innerTheme.palette.text.primary
                }
              },
              colors:coulor
              }}
              series={[{
                name: "On-Campus Cases",
                data: cases
              }]}
              type="bar"
              width="100%"
          />
        </Paper>
      </Box>
    );

} export default BarChart;