import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Laboratory } from "@/resources/types";
import Grid from "@mui/material/Grid";
import { VoteTableCell } from "@/components/survey/VoteTableCell";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export type SurveyTableProps = {
  max_request: number;
  laboratories: Laboratory[];
  isVoting: boolean;
  selectedLabIds: { rank: number; labId: number }[];
  setSelectedLabIds: React.Dispatch<
    React.SetStateAction<{ rank: number; labId: number }[]>
  >;
  votedLabIds: { rank: number; labId: number }[];
  setVotedLabIds: React.Dispatch<
    React.SetStateAction<{ rank: number; labId: number }[]>
  >;
};

export const SurveyTable = ({
  max_request,
  laboratories,
  isVoting,
  selectedLabIds,
  setSelectedLabIds,
  votedLabIds,
}: SurveyTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" colSpan={4}>
              研究室
            </StyledTableCell>
            <StyledTableCell align="center" colSpan={7}>
              希望順位
            </StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>科</StyledTableCell>
            <StyledTableCell align="left">専攻</StyledTableCell>
            <StyledTableCell align="left">分野</StyledTableCell>
            <StyledTableCell align="left">教員</StyledTableCell>
            {Array.from(Array(max_request).keys()).map((i) => (
              <StyledTableCell key={i} align="center">
                {i + 1}
              </StyledTableCell>
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
                  {lab.teachers.map((teacher, i) => (
                    <Grid key={i} item xs={12}>
                      {teacher.position} : {teacher.name}
                    </Grid>
                  ))}
                </Grid>
              </StyledTableCell>
              {Array.from(Array(max_request).keys()).map((i) => (
                <VoteTableCell
                  key={i}
                  rank={i + 1}
                  labId={lab.id}
                  isVoting={isVoting}
                  selectedLabIds={selectedLabIds}
                  setSelectedLabIds={setSelectedLabIds}
                  votedLabIds={votedLabIds}
                />
              ))}
              <StyledTableCell align="center">0</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
