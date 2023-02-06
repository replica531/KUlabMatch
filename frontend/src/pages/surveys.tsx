import Head from "next/head";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useApiAgent } from "@/utils/api_agent";
import { Laboratory, User } from "@/resources/types";
import { Survey } from "@/resources/types";
import { SurveyTable } from "@/components/survey/SurveyTable";
import { Typography } from "@mui/material";
import { VoteButton } from "@/components/survey/VoteButton";
import Grid from "@mui/material/Grid";
import { initialSurveyName } from "@/resources/constants";
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "@/styles/mui";

export default function SurveyPage() {
  const { isLoading } = useAuth0();
  const apiAgent = useApiAgent();
  const [user, setUser] = useState<User | null>(null);
  const [survey, setSurvey] = useState<Survey | null>(null);
  const [surveyName, setSurveyName] =
    useState<string>(initialSurveyName);
  const [laboratories, setLaboratories] = useState<Laboratory[]>([]);
  const [isVoting, setIsVoting] = useState<boolean>(false);
  const [selectedLabIds, setSelectedLabIds] = useState<
    { rank: number; labId: number }[]
  >([]);
  const [votedLabIds, setVotedLabIds] = useState<
    { rank: number; labId: number }[]
  >([]);
  const matches: boolean = useMediaQuery(() => theme.breakpoints.up("sm"));

  const fetchUser = async () => {
    apiAgent({
      url: `/api/users/new`,
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setUser(json.user);
        setSelectedLabIds(json.votedLabIds);
        setVotedLabIds(json.votedLabIds);
      });
  };

  const fetchSurvey = async () => {
    const data = { name: surveyName };
    const query = new URLSearchParams(data).toString();
    apiAgent({
      url: `/api/surveys`,
      method: "GET",
      data: query,
    })
      .then((response) => response.json())
      .then((json) => {
        setSurvey(json.survey);
        setLaboratories(json.laboratories);
      });
  };

  useEffect(() => {
    fetchUser();
    fetchSurvey();
  }, []);

  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>KUlabMatch | survey</title>
      </Head>
      <Grid container>
        <Grid item xs={9} md={11}>
          <Typography variant={ matches ? "h4" : "h6" } align="center" sx={{ p: 1 }}>
            {survey ? survey.name : ""}
          </Typography>
        </Grid>
        <Grid item xs={3} md={1} sx={{ display: "flex", alignItems: "center" }}>
          {user && (
            <VoteButton
              user={user}
              survey={survey}
              isVoting={isVoting}
              setIsVoting={setIsVoting}
              selectedLabIds={selectedLabIds}
              votedLabIds={votedLabIds}
              setVotedLabIds={setVotedLabIds}
              setLaboratories={setLaboratories}
            />
          )}
        </Grid>
      </Grid>
      {survey && (
        <SurveyTable
          max_request={survey.max_request}
          laboratories={laboratories}
          isVoting={isVoting}
          matches={matches}
          selectedLabIds={selectedLabIds}
          setSelectedLabIds={setSelectedLabIds}
          votedLabIds={votedLabIds}
          setVotedLabIds={setVotedLabIds}
        />
      )}
    </>
  );
}
