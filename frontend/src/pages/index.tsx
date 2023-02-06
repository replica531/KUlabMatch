import Head from 'next/head'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from 'react';
import { useApiAgent } from '@/lib/api_agent';
import { Laboratory } from '@/resources/types';
import { SurveyTable } from '@/components/survey/Table';
import { Survey } from '@/resources/types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

export interface State extends SnackbarOrigin {
  open: boolean;
}

export default function Home() {
  const { isLoading, isAuthenticated } = useAuth0();
  const apiAgent = useApiAgent();
  const router = useRouter();
  const [survey, setSurvey] = useState<Survey | null>(null);
  const [surveyName, setSurveyName] =
    useState<string>("京都大学電気電子工学科B3研究室配属");
  const [laboratories, setLaboratories] = useState<Laboratory[]>([])

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
        <Grid item xs={10}>
          <Typography variant="h4" align="center" sx={{ py: 2 }}>
            {survey && survey.name}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
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
        selectedLabIds={[]}
        setSelectedLabIds={() => {}}
        votedLabIds={[]}
      />
    </>
  )
}
