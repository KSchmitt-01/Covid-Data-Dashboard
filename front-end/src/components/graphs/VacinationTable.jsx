import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {useEffect, useState} from "react";

function createTable(Date,CLIA, CLIAT, ModVacWeek, ModT, PfizVacWeek, PfiT, JJVacWeek, JJT){
    return {Date,CLIA, CLIAT, ModVacWeek, ModT, PfizVacWeek, PfiT, JJVacWeek, JJT};
}



 let rows = []


export default function VacinationTable() {


  let [test, setTests] = useState([]);

  useEffect(() =>
    {fetch('/bsu_parse_Vacination_Table').then(res => res.json()).then(data =>
        {
            let rows = [];
            for (let i = 0; i < data.length; i++) {
                let holding = createTable(data[i].date, data[i].CLIA, data[i].CLIAT, data[i].ModVacWeek, data[i].ModT
                , data[i].PfizVacWeek, data[i].PfiT, data[i].JJVacWeek, data[i].JJT)
              rows.push(holding)
            }

            setTests(rows)
        });
    }, []);

  console.log(test[0])
  rows = test

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Campus Positive Tests</TableCell>
            <TableCell align="right">Campus Total Tests</TableCell>
            <TableCell align="right">Moderna Vaccine (Weekly)</TableCell>
            <TableCell align="right">Moderna Vaccine (Total)</TableCell>
            <TableCell align="right">Pfizer Vaccine (Weekly)</TableCell>
            <TableCell align="right">Pfizer Vaccine (Total)</TableCell>
            <TableCell align="right">J&J Vaccine (Weekly)</TableCell>
            <TableCell align="right">J&J Vaccine (Total)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.Date}</TableCell>
              <TableCell align="right">{row.CLIA}</TableCell>
              <TableCell align="right">{row.CLIAT}</TableCell>
              <TableCell align="right">{row.ModVacWeek}</TableCell>
              <TableCell align="right">{row.ModT}</TableCell>
              <TableCell align="right">{row.PfizVacWeek}</TableCell>
              <TableCell align="right">{row.PfiT}</TableCell>
              <TableCell align="right">{row.JJVacWeek}</TableCell>
              <TableCell align="right">{row.JJT}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
