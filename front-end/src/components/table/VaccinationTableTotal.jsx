import {Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

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

  var color = '#ffffff';
  if(innerTheme.palette.mode === 'dark')
  {
    color = '#242424';
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: color,
      color: innerTheme.palette.text.primary,
    },
    [`&.${tableCellClasses.body}`]: {
      backgroundColor: color,
      color: innerTheme.palette.text.primary,
    }
  }));
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
        <Paper>
      <Table sx={{ minWidth: 0}}aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell component="th" scope="row">Vaccine Type</StyledTableCell>
              <StyledTableCell align="right">Weekly</StyledTableCell>
              <StyledTableCell align="right">Total</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.weekly}</StyledTableCell>
                <StyledTableCell align="right">{row.total}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  } else{
    return(
      <div></div>
    )
  }
}
