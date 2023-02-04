import * as React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export type VoteTableCellProps = {
  rank: number;
  labId: number;
  isVoting: boolean;
  selectedLabIds: { rank: number; labId: number }[];
  setSelectedLabIds: React.Dispatch<
    React.SetStateAction<{ rank: number; labId: number }[]>
  >;
  votedLabIds: { rank: number; labId: number }[];
};

export const VoteTableCell = ({
  rank,
  labId,
  isVoting,
  selectedLabIds,
  setSelectedLabIds,
  votedLabIds,
}: VoteTableCellProps) => {

  const isVoted = (rank: number, labId: number) => {
    return votedLabIds.some((e) => e.rank === rank && e.labId === labId);
  };

  const isSelected = (rank: number, labId: number) => {
    return selectedLabIds.some((e) => e.rank === rank && e.labId === labId);
  };

  const onCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.checked) {
      setSelectedLabIds(
        selectedLabIds.filter((e) => e.rank !== rank || e.labId !== labId)
      );
    } else {
      setSelectedLabIds([...selectedLabIds.filter((e) => e.rank !== rank && e.labId !== labId), { rank, labId }]);
    }
  };

  return (
    <StyledTableCell align="center" sx={{ ...(isVoted(rank, labId) && {backgroundColor: "#ffffe0"}) }}>
      0
      {isVoting ? <Checkbox checked={isSelected(rank, labId)} onChange={onCheckBoxChange} /> : null}
    </StyledTableCell>
  );
};
