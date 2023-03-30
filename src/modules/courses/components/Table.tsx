import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Course } from '../models/Course';

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

export default function TableComponent (props: { rows: Course[]; }) {
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
            <StyledTableCell align="right">Título</StyledTableCell>
            <StyledTableCell align="right">Descripción</StyledTableCell>
            <StyledTableCell align="right">Fecha de inicio</StyledTableCell>
            <StyledTableCell align="right">Fecha de finalización</StyledTableCell>
            <StyledTableCell align="right">Tutor</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row: Course) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">{row.dateStart}</StyledTableCell>
              <StyledTableCell align="right">{row.dateFinish}</StyledTableCell>
              <StyledTableCell align="right">{row.tutor}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}