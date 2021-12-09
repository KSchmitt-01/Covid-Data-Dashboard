import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

function BarChart({selection, innerTheme}) {
    const [dates, setDates] = useState([]);
    const [cases, setCases] = useState([]);

  console.log("bar")
  console.log(innerTheme)

  let coulor = ["#D64309"]
  let route = '/weekly-on-campus';
  let chartTitle = "Bsu On-Campus Cases Per Week"

  if (selection === "Boise State University") {
    route = '/weekly-on-campus';
    coulor = ["#D64309"];
    chartTitle = "BSU On-Campus Cases Per Week"
  } else {
    route = '/isu-pocatello-cases';
    coulor = ['#F47920'];
    chartTitle = "Pocatello Cases";
  }

  useEffect(() => {
    fetch(route).then(res => res.json()).then(data => {
      // Dates
      const d= []
      // Cases
      const c = []

      for (let i = 0; i < data.length; i++) {
          d.push(data[i].date);
          c.push(data[i].cases);
      }

      d.reverse()
      c.reverse()
      setDates(d)
      setCases(c)

    })}, [route, selection]);

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