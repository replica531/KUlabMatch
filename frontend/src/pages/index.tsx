import Head from 'next/head'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from 'react';
import { useApiAgent } from '@/utils/api_agent';
import { Laboratory } from '@/resources/types';
import { SurveyTable } from '@/components/survey/SurveyTable';
import { Survey } from '@/resources/types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "@/styles/mui";
import { initialSurveyName } from "@/resources/constants";

export default function Home() {
  const { isAuthenticated } = useAuth0();
  const apiAgent = useApiAgent();
  const router = useRouter();
  const [survey, setSurvey] = useState<Survey | null>(null);
  const [surveyName, setSurveyName] =
    useState<string>(initialSurveyName);
  const [laboratories, setLaboratories] = useState<Laboratory[]>([])
  const matches: boolean = useMediaQuery(() => theme.breakpoints.up("sm"));

  const fetchSurvey = async () => {
    const data = { name: surveyName };
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
      });
  };

  useEffect(() => {
    fetchSurvey();
  }, []);

  return (
    <>
      <Head>
        <title>KUlabMatch | HOME</title>
      </Head>
      <Grid container>
        <Grid item xs={9} md={11}>
          <Typography variant={ matches ? "h4" : "h6" } align="center" sx={{ p: 1 }}>
            {survey ? survey.name : ""}
          </Typography>
        </Grid>
        <Grid item xs={3} md={1} sx={{ display: "flex", alignItems: "center" }}>
          {isAuthenticated &&
            <Button
              onClick={() => {
                router.push("/surveys");
              }}
              variant="contained"
              sx={{ color: "#ffffff" }}
            >
              投票ページへ
            </Button>
          }
        </Grid>
      </Grid>
      <SurveyTable
        max_request={7}
        laboratories={laboratories}
        isVoting={false}
        matches={matches}
        selectedLabIds={[]}
        setSelectedLabIds={() => {}}
        votedLabIds={[]}
      />
    </>
  )
}
