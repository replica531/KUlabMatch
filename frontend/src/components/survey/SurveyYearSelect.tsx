import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from '@mui/material/Select';

export type SurveyYearSelectProps = {};

export const SurveyYearSelect = ({
}: SurveyYearSelectProps) => {
  const [surveyYear, setSurveyYear] = useState<string>("2023");
  const router = useRouter();

  useEffect(() => {
    if(router.isReady) {
      setSurveyYear(router.query.year as string);
    }
  }, [router.isReady]);

  const handleChange = (event: SelectChangeEvent) => {
    setSurveyYear(event.target.value);
    router.push(`/?year=${event.target.value}`);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">投票年度</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={surveyYear}
        onChange={handleChange}
        label="投票年度"
      >
        <MenuItem value={"2022"}>2022</MenuItem>
        <MenuItem value={"2023"}>2023</MenuItem>
      </Select>
    </FormControl>
  );
};
