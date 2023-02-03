import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Laboratory } from '@/resources/types';
import Grid from '@mui/material/Grid';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export type TableProps = {
  max_request: number;
  laboratories: Laboratory[];
};

export const SurveyTable = ({
  max_request,
  laboratories
}: TableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" colSpan={4}>研究室</StyledTableCell>
            <StyledTableCell align="center" colSpan={7}>希望順位</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>科</StyledTableCell>
            <StyledTableCell align="left">専攻</StyledTableCell>
            <StyledTableCell align="left">分野</StyledTableCell>
            <StyledTableCell align="left">教員</StyledTableCell>
            {Array.from(Array(max_request).keys()).map((i) => (
              <StyledTableCell align="center">{i + 1}</StyledTableCell>
            ))}
            <StyledTableCell align="left">総数</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {laboratories.map((lab) => (
            <StyledTableRow key={lab.id}>
              <StyledTableCell component="th" scope="row">
                {lab.department}
              </StyledTableCell>
              <StyledTableCell align="left">{lab.field}</StyledTableCell>
              <StyledTableCell align="left">{lab.major}</StyledTableCell>
              <StyledTableCell align="left">
                <Grid container>
                  {lab.teachers.map((teacher) => (
                    <Grid item xs={12}>
                      {teacher.position} : {teacher.name}
                    </Grid>
                  ))}
                </Grid>
              </StyledTableCell>
              {Array.from(Array(max_request).keys()).map((i) => (
                <StyledTableCell align="center">
                  0
                </StyledTableCell>
              ))}
              <StyledTableCell align="center">0</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
