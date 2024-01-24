import Head from "next/head";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useApiAgent } from "@/utils/api_agent";
import { Laboratory, User } from "@/resources/types";
import { SurveyTable } from "@/components/survey/SurveyTable";
import { Survey } from "@/resources/types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { VoteButton } from "@/components/survey/VoteButton";
import { HomeAlert } from "@/components/auth/HomeAlert";
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "@/styles/mui";
import { initialSurveyName, initialSurveyYear } from "@/resources/constants";
import { useRouter } from "next/router";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function Home() {
  const apiAgent = useApiAgent();
  const router = useRouter();
  const { isLoading, isAuthenticated } = useAuth0();
  const [user, setUser] = useState<User | null>(null);
  const [survey, setSurvey] = useState<Survey | null>(null);
  const [surveyName, setSurveyName] = useState<string>(initialSurveyName);
  const [surveyYear, setSurveyYear] = useState<Number>(initialSurveyYear);
  const [isVoting, setIsVoting] = useState<boolean>(false);
  const [laboratories, setLaboratories] = useState<Laboratory[]>([]);
  const [voterCount, setVoterCount] = useState<number>(0);
  const [selectedLabIds, setSelectedLabIds] = useState<
    { rank: number; labId: number }[]
  >([]);
  const [votedLabIds, setVotedLabIds] = useState<
    { rank: number; labId: number }[]
  >([]);
  const [error, setError] = useState<string | null>(null);
  const [errorDescription, setErrorDescription] = useState<string | null>(null);
  const matches: boolean = useMediaQuery(() => theme.breakpoints.up("sm"));

  const query = router.query;

  const surveyFilteredLabIds = (labIds: { rank: number; labId: number }[], laboratories: Laboratory[]) => {
    return labIds.filter((v) => laboratories.find((lab) => lab.id === v.labId));
  }

  useEffect(() => {
    if (router.isReady) {
      setError(query.error as string);
      setErrorDescription(query.error_description as string);
    }
  }, [query, router]);

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
    let year = String(surveyYear);
    if (router.query.year == "2022" || router.query.year == "2023") {
      year = router.query.year as string;
    }
    const data = { name: surveyName, year: year};
    const query = new URLSearchParams(data).toString();
    apiAgent({
      url: `/api/surveys`,
      method: "GET",
      data: query,
      outerMember: true,
    })
      .then((response) => response.json())
      .then((json) => {
        setSurvey(json.survey);
        setLaboratories(json.laboratories);
        calculateVoterCount(json.laboratories);
      });
  };

  const calculateVoterCount = (laboratories: Laboratory[]) => {
    let count = 0;
    laboratories.forEach((lab) => {
      count += lab.users.filter((user) => user.rank == 1).length;
    });
    setVoterCount(count);
  };

  useEffect(() => {
    if(router.isReady) {
      fetchSurvey();
    }
    if (isAuthenticated) {
      fetchUser();
    }
  }, [isAuthenticated, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>KUlabMatch | 投票ページ</title>
      </Head>
      <Grid container justifyContent="center">
        <HomeAlert
          isAuthenticated={isAuthenticated}
          votedCount={votedLabIds.length | 0}
          error={error}
          errorDescription={errorDescription}
        />
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="text.primary" href={`/${surveyYear ? `?year=${surveyYear}`: ""}`}>
              投票ページ
            </Link>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={9} md={11}>
          <Typography
            variant={matches ? "h4" : "h6"}
            align="center"
            sx={{ p: 1 }}
          >
            {survey ? survey.name : ""}
            {matches ? ""　: <br/>}
            (投票者数: {voterCount})
          </Typography>
        </Grid>
        {user && survey?.active && (
          <Grid
            item
            xs={3}
            md={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <VoteButton
              user={user}
              survey={survey}
              isVoting={isVoting}
              isLoading={isLoading}
              setIsVoting={setIsVoting}
              selectedLabIds={surveyFilteredLabIds(selectedLabIds, laboratories)}
              votedLabIds={surveyFilteredLabIds(votedLabIds, laboratories)}
              setVotedLabIds={setVotedLabIds}
              setLaboratories={setLaboratories}
            />
          </Grid>
        )}
      </Grid>
      {survey ? (
        <SurveyTable
          max_request={survey.max_request}
          laboratories={laboratories}
          isVoting={isVoting}
          matches={matches}
          selectedLabIds={surveyFilteredLabIds(selectedLabIds, laboratories)}
          setSelectedLabIds={setSelectedLabIds}
          votedLabIds={surveyFilteredLabIds(votedLabIds, laboratories)}
          setVotedLabIds={setVotedLabIds}
        />
      ) : (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}
