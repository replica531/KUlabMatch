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
import { Typography } from "@mui/material";

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
  setVotedLabIds?: React.Dispatch<
    React.SetStateAction<{ rank: number; labId: number }[]>
  >;
};

export const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);

export const SurveyTable = ({
  max_request,
  laboratories,
  isVoting,
  selectedLabIds,
  setSelectedLabIds,
  votedLabIds,
}: SurveyTableProps) => {
  const labs_by_department = groupBy(laboratories, (lab) => lab.department);
  const departments = Object.keys(labs_by_department);
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" colSpan={3}>
              研究室
            </StyledTableCell>
            <StyledTableCell align="center" colSpan={max_request}>
              希望順位
            </StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
          <TableRow>
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
        {departments.map((department, i) => (
          <TableBody key={i}>
            <StyledTableRow key={department}>
              <StyledTableCell
                component="th"
                scope="row"
                colSpan={4 + max_request}
                sx={{ backgroundColor: "#a9a9a9" }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  {department}
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
            {labs_by_department[department].map((lab) => (
              <StyledTableRow key={lab.id}>
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
                    users={lab.users.filter((user) => user.rank === i + 1)}
                    isVoting={isVoting}
                    selectedLabIds={selectedLabIds}
                    setSelectedLabIds={setSelectedLabIds}
                    votedLabIds={votedLabIds}
                  />
                ))}
                <StyledTableCell align="center">{lab.users.length}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        ))}
      </Table>
    </TableContainer>
  );
};
