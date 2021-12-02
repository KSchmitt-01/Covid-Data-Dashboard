import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core';
import PageContainer from '../PageContainer';
import BasicCard from './BasicCard';


const useStyles = makeStyles({
  root: {
       marginTop: '200px',
       height: '200px',
       padding: '50px',
       backgroundColor: '#ECEFF1',
    }
});


function BasicCardWrapper({selection}) {
    const classes = useStyles();

    const[route1Value, setRoute1Value] = useState(0);
    const[route1Description, setRoute1Description] = useState('');
    const[route2Value, setRoute2Value] = useState(0);
    const[route2Description, setRoute2Description] = useState('');
    const[route3Value, setRoute3Value] = useState(0);
    const[route3Description, setRoute3Description] = useState('');
    const[route4Value, setRoute4Value] = useState(0);
    const[route4Description, setRoute4Description] = useState('');
    const[route5Value, setRoute5Value] = useState(0);
    const[route5Description, setRoute5Description] = useState('');
    const[route6Value, setRoute6Value] = useState(0);
    const[route6Description, setRoute6Description] = useState('');
    const[route7Value, setRoute7Value] = useState(0);
    const[route7Description, setRoute7Description] = useState('');
    const[route8Value, setRoute8Value] = useState(0);
    const[route8Description, setRoute8Description] = useState('');

    let route1 = '/school-year-cases';
    if(selection === "Boise State University")
    {
      route1 = '/school-year-cases';
    } 
    else if ('Idaho State University')
    {
      route1 = '/isu-total-pocatello-campus-cases'
    }
    else
    {
      route1 = '/another-test-route';
    }

    let route2 = '/weekly-campus-cases';
    if(selection === "Boise State University"){
      route2 = '/weekly-campus-cases';
    }
    else if(selection === "Idaho State University")
    {
      route2 = '/isu-weekly-campus-cases';
    } 
    else{
      route2 = '/weekly-campus-cases';
    }

    let route3 = '/weekly-positive-tests';
    if(selection === "Boise State University")
    {
      route3 = '/weekly-positive-tests';
    } 
    else if (selection === "Idaho State University")
    {
      route3 = '/isu-weekly-student-positive-tests'
    }
    else
    {
      route3 = '/weekly-positive-tests';
    }

    let route4 = '/weekly-total-tests';
    if(selection === "Boise State University")
    {
      route4 = '/weekly-total-tests';
    } 
    else if (selection ===  "Idaho State University")
    {
      route4 = '/isu-weekly-faculty-positive-tests'
    }
    else{
      route4 = '/weekly-total-tests';
    }

    let route5 = '/bsu_isolation_bed_count'
    let route6 = '/bsu_parse_weekly_oncampus_cases'
    let route7 = '/bsu_parse_weekly_offcampus_cases'
    let route8 = 'bsu_parse_weekly_faculty_cases'

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
          setRoute2Value(data.Weekly);
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

  useEffect(() =>{
    fetch(route5).then(res => res.json()).then(data =>
        {
          setRoute5Value(data.Total);
          setRoute5Description(data.Description);
        });
  }, [route5, selection]);

  useEffect(() =>{
    fetch(route6).then(res => res.json()).then(data =>
        {
          setRoute6Value(data.Total);
          setRoute6Description(data.Description);
        });
  }, [route6, selection]);

  useEffect(() =>{
    fetch(route7).then(res => res.json()).then(data =>
        {
          setRoute7Value(data.Total);
          setRoute7Description(data.Description);
        });
  }, [route7, selection]);

  useEffect(() =>{
    fetch(route8).then(res => res.json()).then(data =>
        {
          setRoute8Value(data.Total);
          setRoute8Description(data.Description);
        });
  }, [route8, selection]);

if(selection == "Boise State University")
{
    return (
      <PageContainer className={`${classes.root}`}>
          <BasicCard value={route1Value} description={route1Description}/>
          <BasicCard value={route2Value} description={route2Description}/>
          <BasicCard value={route3Value} description={route3Description}/>
          <BasicCard value={route4Value} description={route4Description}/>
          <BasicCard value={route5Value} description={route5Description}/>
          <BasicCard value={route6Value} description={route6Description}/>
          <BasicCard value={route7Value} description={route7Description}/>
          <BasicCard value={route8Value} description={route8Description}/>
      </PageContainer>
    );
  }
  else
  {
    return (
      <PageContainer className={`${classes.root}`}>
          <BasicCard value={route1Value} description={route1Description}/>
          <BasicCard value={route2Value} description={route2Description}/>
          <BasicCard value={route3Value} description={route3Description}/>
          <BasicCard value={route4Value} description={route4Description}/>
      </PageContainer>
    );
  }
}

export default BasicCardWrapper;
