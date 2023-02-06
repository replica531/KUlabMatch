import * as React from "react";
import { Laboratory } from "@/resources/types";
import Grid from "@mui/material/Grid";
import { SurveyTableVoteCell } from "@/components/survey/SurveyTableVoteCell";
import { StyledTableRow, StyledTableCell } from "@/components/survey/SurveyTable";
import { Typography } from "@mui/material";


export type SurveyTableLabRowProps = {
  max_request: number;
  laboratory: Laboratory;
  isVoting: boolean;
  matches: boolean;
  selectedLabIds: { rank: number; labId: number }[];
  setSelectedLabIds: React.Dispatch<
    React.SetStateAction<{ rank: number; labId: number }[]>
  >;
  votedLabIds: { rank: number; labId: number }[];
  setVotedLabIds?: React.Dispatch<
    React.SetStateAction<{ rank: number; labId: number }[]>
  >;

};

export const SurveyTableLabRow = ({
  max_request,
  laboratory,
  isVoting,
  matches,
  selectedLabIds,
  setSelectedLabIds,
  votedLabIds,
}: SurveyTableLabRowProps) => {
  return (
    <>
      { matches ? (
        <StyledTableRow>
          <StyledTableCell align="left">{laboratory.field}</StyledTableCell>
          <StyledTableCell align="left">{laboratory.major}</StyledTableCell>
          <StyledTableCell align="left">
            <Grid container>
              {laboratory.teachers.map((teacher, i) => (
                <Grid key={i} item xs={12}>
                  {teacher.position} : {teacher.name}
                </Grid>
              ))}
            </Grid>
          </StyledTableCell>
          {Array.from(Array(max_request).keys()).map((i) => (
            <SurveyTableVoteCell
              key={i}
              rank={i + 1}
              labId={laboratory.id}
              users={laboratory.users.filter((user) => user.rank === i + 1)}
              isVoting={isVoting}
              selectedLabIds={selectedLabIds}
              setSelectedLabIds={setSelectedLabIds}
              votedLabIds={votedLabIds}
            />
          ))}
          <StyledTableCell align="center">
            {laboratory.users.length}
          </StyledTableCell>
        </StyledTableRow>
      ) : (
        <>
          <StyledTableRow>
            <StyledTableCell align="left" colSpan={(max_request+1)/3}>{laboratory.field}</StyledTableCell>
            <StyledTableCell align="left" colSpan={(max_request+2)/3}>{laboratory.major}</StyledTableCell>
            <StyledTableCell align="left" colSpan={(max_request+3)/3}>
              <Grid container>
                {laboratory.teachers.map((teacher, i) => (
                  <Grid key={i} item xs={12}>
                    {teacher.position} : {teacher.name}
                  </Grid>
                ))}
              </Grid>
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            {Array.from(Array(max_request).keys()).map((i) => (
              <SurveyTableVoteCell
                key={i}
                rank={i + 1}
                labId={laboratory.id}
                users={laboratory.users.filter((user) => user.rank === i + 1)}
                isVoting={isVoting}
                selectedLabIds={selectedLabIds}
                setSelectedLabIds={setSelectedLabIds}
                votedLabIds={votedLabIds}
              />
            ))}
            <StyledTableCell align="center">
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold" }}
              >
                {laboratory.users.length}
              </Typography>
            </StyledTableCell>
          </StyledTableRow>
        </>
      )}
    </>
  )
}
