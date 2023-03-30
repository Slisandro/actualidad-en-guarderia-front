import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Bill } from '../models/Bill';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "transparent",
    color: " black"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: ".8rem",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "transparent",
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function TableComponent (props: { rows: Bill[]; }) {
  return (
    <TableContainer 
      component={Paper} 
      sx={{
        marginTop: "2rem",
        backgroundColor: "transparent",
        borderRadius: "8px",
        border: "none",
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        ".MuiTable-root": {
          border: "none",
          background: "transparent",
          boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
        },
        ".MuiTableHead-root": {
            background: "transparent"
        },
        ".MuiTableRow-root": {
            background: "transparent"
        },
        ".MuiTableCell-root" : {
          color: "black",
          background: "transparent",
          fontSize: "1rem",
          textAlign: "start"
        }
      }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead sx={{ backgroundColor: "transparent" }}>
          <TableRow>
            <StyledTableCell align="right">Título (C)</StyledTableCell>
            <StyledTableCell align="right">Nombre (U)</StyledTableCell>
            <StyledTableCell align="right">Apellido (U)</StyledTableCell>
            <StyledTableCell align="right">CURP (U)</StyledTableCell>
            <StyledTableCell align="right">Fecha de inicio (C)</StyledTableCell>
            <StyledTableCell align="right">Fecha de finalización (C)</StyledTableCell>
            <StyledTableCell align="right">Fecha de creación (B)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row: Bill) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="right">{row.course.title}</StyledTableCell>
              <StyledTableCell align="right">{row.user.firstName}</StyledTableCell>
              <StyledTableCell align="right">{row.user.lastName}</StyledTableCell>
              <StyledTableCell align="right">{row.user.CURP}</StyledTableCell>
              <StyledTableCell align="right">{row.course.dateStart}</StyledTableCell>
              <StyledTableCell align="right">{row.course.dateFinish}</StyledTableCell>
              <StyledTableCell align="right">{row.dateCreated}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}