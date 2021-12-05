import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core';
import PageContainer from '../PageContainer';
import BasicCard from './BasicCard';
import Paper from '@mui/material/Paper'

const useStyles = makeStyles({
  root: {
       height: '180px',
       padding: '50px',
       justifyContent: 'space-evenly',
    }
});

function BottomCardWrapper({selection}) {
    const classes = useStyles();
    const[route1Value, setRoute1Value] = useState(0);
    const[route1Description, setRoute1Description] = useState('');
    const[route2Value, setRoute2Value] = useState(0);
    const[route2Description, setRoute2Description] = useState('');
    const[route3Value, setRoute3Value] = useState(0);
    const[route3Description, setRoute3Description] = useState('');
    const[route4Value, setRoute4Value] = useState(0);
    const[route4Description, setRoute4Description] = useState('');

    let route1 = '/bsu_isolation_bed_count'
    let route2 = '/bsu_parse_weekly_oncampus_cases'
    let route3 = '/bsu_parse_weekly_offcampus_cases'
    let route4 = 'bsu_parse_weekly_faculty_cases'

  useEffect(() =>{
    fetch(route1).then(res => res.json()).then(data =>
        {
          setRoute1Value(data.Total);
          setRoute1Description(data.Description);
        });
  }, [route1, selection]);

  useEffect(() =>{
    fetch(route2).then(res => res.json()).then(data =>
        {
          setRoute2Value(data.Total);
          setRoute2Description(data.Description);
        });
  }, [route2, selection]);

  useEffect(() =>{
    fetch(route3).then(res => res.json()).then(data =>
        {
          setRoute3Value(data.Total);
          setRoute3Description(data.Description);
        });
  }, [route3, selection]);

  useEffect(() =>{
    fetch(route4).then(res => res.json()).then(data =>
        {
          setRoute4Value(data.Total);
          setRoute4Description(data.Description);
        });
  }, [route4, selection]);

  if(selection === "Boise State University")
  {
    return (
        <Paper elevation={3}>
            <PageContainer className={`${classes.root}`}>
                <BasicCard value={route1Value} description={route1Description}/>
                <BasicCard value={route2Value} description={route2Description}/>
                <BasicCard value={route3Value} description={route3Description}/>
                <BasicCard value={route4Value} description={route4Description}/>
            </PageContainer>
        </Paper>
    );
  } else{
    return(
        <div></div>
    );
  }
}

export default BottomCardWrapper;
