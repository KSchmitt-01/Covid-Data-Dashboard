import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {useEffect, useState} from "react";

function createTable(name, weekly, total){
    return {name, weekly, total};
}
let rows = []

export default function VaccinationTableTotal({selection, innerTheme}) {
  const [antiAntiVaxers, setantiAntiVaxers] = useState([]);
  let isBsu = true;
  if(selection === "Boise State University"){
    isBsu = true;
  } else{
    isBsu = false;
  }

  console.log("innerTheme ");
  console.log(innerTheme.palette.primary.main)
  useEffect(() =>
    {fetch('/bsu_Vacination_Table_Small').then(res => res.json()).then(data =>
        {
          let rows = []
          rows.push(createTable('Pfizer',data[0].PfizerW,data[0].PfizerT))
          rows.push(createTable('Moderna',data[0].ModernaW,data[0].ModernaT))
          rows.push(createTable('Johnson & Johnson',data[0].JJW,data[0].JJT))
          rows.push(createTable('All Vaccines',data[0].vacWeek, data[0].VacTotal))
          setantiAntiVaxers(rows)
        });
    }, []);

  rows = antiAntiVaxers
  if(isBsu){
    return(
        <TableContainer >
      <Table sx={{ minWidth: 0, backgroundColor: innerTheme.palette.primary.main, color: innerTheme.palette.text.primary}}aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">Vaccine Type</TableCell>
              <TableCell align="right">Weekly</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.weekly}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else{
    return(
      <div></div>
    )
  }
}
