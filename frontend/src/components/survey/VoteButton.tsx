import { useApiAgent } from "@/utils/api_agent";
import Button from "@mui/material/Button";
import { Laboratory } from "@/resources/types";
import { VotePermissionLists } from "@/resources/constants";
import { User } from "@/resources/types";
import { Survey } from "@/resources/types";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { CircularProgress, Snackbar } from "@mui/material";

export type VoteButtonProps = {
  user: User;
  survey: Survey | null;
  isVoting: boolean;
  isLoading: boolean;
  setIsVoting: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLabIds: { rank: number; labId: number }[];
  votedLabIds: { rank: number; labId: number }[];
  setVotedLabIds: React.Dispatch<
    React.SetStateAction<{ rank: number; labId: number }[]>
  >;
  setLaboratories: React.Dispatch<React.SetStateAction<Laboratory[]>>;
};

export const VoteButton = ({
  user,
  survey,
  isVoting,
  isLoading,
  setIsVoting,
  selectedLabIds,
  votedLabIds,
  setVotedLabIds,
  setLaboratories,
}: VoteButtonProps) => {
  const apiAgent = useApiAgent();
  const [isPermissionAlertOpen, setIsPermissionAlertOpen] = useState(false);
  const [isVoteAlertOpen, setIsVoteAlertOpen] = useState(false);

  const permissionAlertOpen = () => {
    setIsPermissionAlertOpen(true);
  };
  const permissionAlertClose = () => {
    setIsPermissionAlertOpen(false);
  };

  const voteAlertOpen = () => {
    setIsVoteAlertOpen(true);
  };
  const voteAlertClose = () => {
    setIsVoteAlertOpen(false);
  };

  const onVote = () => {
    if(selectedLabIds.filter((v) => v.rank === 1).length === 0) {
      voteAlertOpen();
      return;
    }
    console.log(votedLabIds)
    const destroyLabIds = votedLabIds.filter(
      (v) => !selectedLabIds.find((s) => v.labId === s.labId && v.rank === s.rank)
    )
    const createLabIds = selectedLabIds.filter(
      (s) => !votedLabIds.find((v) => v.labId === s.labId && v.rank === s.rank)
    )

    const data = {
      userId: user.id,
      surveyId: survey?.id,
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
        setIsVoting(false);
      });
  };

  const checkPermission = () => {
    const permissions = VotePermissionLists.find((e) => e.surveyName === survey?.name)?.permissions
    if (permissions && permissions.some((p) => p.affiliation === user.affiliation && p.grade === user.grade)){
      setIsVoting(true);
    }
    else{
      permissionAlertOpen();
    }
  }
  if(isLoading){
    <Button
      variant="contained"
      sx={{ color: "#ffffff" }}
    >
      <CircularProgress size={24} />
    </Button>
  }
  if (isVoting) {
    return (
      <>
        <Button
          onClick={() => {
            onVote();
          }}
          variant="contained"
          sx={{ color: "#ffffff" }}
        >
          投票する
        </Button>
        <Snackbar open={isVoteAlertOpen} autoHideDuration={6000} onClose={voteAlertClose}>
          <Alert severity="warning">第1希望の研究室を空にして投票することはできません。</Alert>
        </Snackbar>
      </>
    );
  }
  return (
    <>
      <Button
        onClick={
          () => checkPermission()
        }
        variant="contained"
        sx={{ color: "#ffffff" }}
      >
        選択する
      </Button>
      <Snackbar open={isPermissionAlertOpen} autoHideDuration={6000} onClose={permissionAlertClose}>
        <Alert severity="warning">あなたの所属、学年はこの調査の投票対象外です。プロフィールページで所属をご確認ください。</Alert>
      </Snackbar>
    </>
  );
};
