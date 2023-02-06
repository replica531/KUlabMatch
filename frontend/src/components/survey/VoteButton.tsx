import { useApiAgent } from "@/lib/api_agent";
import Button from "@mui/material/Button";
import { Laboratory } from "@/resources/types";

export type VoteButtonProps = {
  userId: number;
  surveyId: number;
  isVoting: boolean;
  setIsVoting: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLabIds: { rank: number; labId: number }[];
  votedLabIds: { rank: number; labId: number }[];
  setVotedLabIds: React.Dispatch<
    React.SetStateAction<{ rank: number; labId: number }[]>
  >;
  laboratories: Laboratory[];
  setLaboratories: React.Dispatch<React.SetStateAction<Laboratory[]>>;
};

export const VoteButton = ({
  userId,
  surveyId,
  isVoting,
  setIsVoting,
  selectedLabIds,
  votedLabIds,
  setVotedLabIds,
  laboratories,
  setLaboratories,
}: VoteButtonProps) => {
  const apiAgent = useApiAgent();

  const onVote = () => {
    const destroyLabIds = votedLabIds.filter(
      (v) => !selectedLabIds.find((s) => v.labId === s.labId && v.rank === s.rank)
    )
    const createLabIds = selectedLabIds.filter(
      (s) => !votedLabIds.find((v) => v.labId === s.labId && v.rank === s.rank)
    )

    const data = {
      userId: userId,
      surveyId: surveyId,
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
        setVotedLabIds(json.votedLabIds);
        setLaboratories(json.laboratories);
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
