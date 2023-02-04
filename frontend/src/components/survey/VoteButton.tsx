import { useApiAgent } from "@/lib/api_agent";
import { useState } from "react";
import Button from "@mui/material/Button";

export type VoteButtonProps = {
  userId: number;
  isVoting: boolean;
  setIsVoting: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLabIds: { rank: number; labId: number }[];
  votedLabIds: { rank: number; labId: number }[];
  setVotedLabIds: React.Dispatch<
    React.SetStateAction<{ rank: number; labId: number }[]>
  >;
};

export const VoteButton = ({
  userId,
  isVoting,
  setIsVoting,
  selectedLabIds,
  votedLabIds,
  setVotedLabIds,
}: VoteButtonProps) => {
  const apiAgent = useApiAgent();

  const onVote = () => {
    const data = {
      votedLabIds: votedLabIds.map((votedLabId) => ({
        user_id: userId,
        laboratory_id: votedLabId.labId,
        rank: votedLabId.rank,
      })),
      selectedLabIds: selectedLabIds.map((selectedLabId) => ({
        user_id: userId,
        laboratory_id: selectedLabId.labId,
        rank: selectedLabId.rank,
      })),
    };
    apiAgent({
      url: `/api/laboratory_users`,
      method: "POST",
      data,
    })
      .then((response) => response.json())
      .then((json) => {
        setVotedLabIds(json.votedLabIds);
      });
  };

  if (isVoting) {
    return (
      <Button
        onClick={() => {
          onVote();
          setIsVoting(false);
        }}
        variant="contained"
        sx={{ color: "#ffffff" }}
      >
        投票する
      </Button>
    );
  }
  return (
    <Button
      onClick={() => setIsVoting(true)}
      variant="contained"
      sx={{ color: "#ffffff" }}
    >
      選択する
    </Button>
  );
};
