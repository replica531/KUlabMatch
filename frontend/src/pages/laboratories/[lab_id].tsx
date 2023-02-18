import Head from "next/head";
import { useApiAgent } from "@/utils/api_agent";
import { useLayoutEffect, useState } from "react";
import { Laboratory } from "@/resources/types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "@/styles/mui";
import { useRouter } from "next/router";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Teacher } from "@/resources/types";
import { User } from "@/resources/types";
import { GpaGraph } from "@/components/laboratory/GpaGraph";

export default function ProfilePage() {
  const apiAgent = useApiAgent();
  const router = useRouter();
  const [laboratory, setLaboratory] = useState<Laboratory | null>(null);
  const [max_request, setMaxRequest] = useState<number>(7);
  const [teachers , setTeachers] = useState<Teacher[]>([]);
  const [gpas, setGpas] = useState<{rank: number, gpa: number}[]>([]);
  const matches: boolean = useMediaQuery(() => theme.breakpoints.up("sm"));
  const { lab_id } = router.query;

  const fetchLaboratory = async () => {
    apiAgent({
      url: `/api/laboratories/${ lab_id }}`,
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setLaboratory(json.laboratory);
        setMaxRequest(json.max_request);
        setTeachers(json.teachers);
        setGpas(json.gpas);
      });
  };

  useLayoutEffect(() => {
    if(!lab_id) return;
    fetchLaboratory();
  }, [lab_id]);

  return (
    <>
      <Head>
        <title>KULabMatch | GPA分布</title>
      </Head>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          投票ページ
        </Link>
        <Link underline="hover" color="text.primary" href={`/laboratories/${lab_id}`}>
          GPA分布
        </Link>
      </Breadcrumbs>
      <Typography variant={matches ? "h4" : "h6"} align="center" gutterBottom>
        {laboratory?.field} {laboratory?.major}
      </Typography>
      <Typography variant={matches ? "h6" : "subtitle1"} align="center" gutterBottom>
        {teachers.map((teacher) => `${teacher.position}:${teacher.name}`).join(", ")}
      </Typography>
      <GpaGraph gpas={gpas} max_request={max_request}/>
    </>
  );
}
