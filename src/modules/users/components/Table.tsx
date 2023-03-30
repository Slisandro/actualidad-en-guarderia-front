import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { User } from '../models/User';

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

export default function TableComponent (props: { rows: User[]; }) {
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
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">Apellido</StyledTableCell>
            <StyledTableCell align="right">CURP</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Position</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row: User) => (
            <StyledTableRow key={row.CURP}>
              <StyledTableCell align="right">{row.firstName}</StyledTableCell>
              <StyledTableCell align="right">{row.lastName}</StyledTableCell>
              <StyledTableCell align="right">{row.CURP}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.position}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}