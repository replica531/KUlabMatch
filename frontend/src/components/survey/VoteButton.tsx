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
}: VoteButtonProps) => {
  const apiAgent = useApiAgent();

  const onVote = () => {
    const destroyLabIds = votedLabIds.filter(
      (v) => !selectedLabIds.some((s) => v.labId === s.labId && v.rank === s.rank)
    )
    const createLabIds = selectedLabIds.filter(
      (s) => !votedLabIds.some((v) => v.labId === s.labId && v.rank === s.rank)
    )
    console.log(destroyLabIds)

    const data = {
      user_id: userId,
      destroyLabIds: destroyLabIds.map((destroyLabId) => ({
        laboratory_id: destroyLabId.labId,
        rank: destroyLabId.rank,
      })),
      createLabIds: createLabIds.map((createLabId) => ({
        laboratory_id: createLabId.labId,
        rank: createLabId.rank,
      })),
    };
    apiAgent({
      url: `/api/laboratory_users`,
      method: "POST",
      data,
    })
      .then((response) => response.json())
      .then((json) => {
        location.reload()
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
