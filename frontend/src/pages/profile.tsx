import { Button, CardActions, MenuItem } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useApiAgent } from "../utils/api_agent";
import { useLayoutEffect, useState } from "react";
import { User } from "../resources/types";
import { Grades, Affiliations } from "../resources/constants";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { forwardRef } from 'react';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function ProfilePage() {
  const apiAgent = useApiAgent();
  const [user, setUser] = useState<User | null>(null);
  const [affiliation, setAffiliation] = useState<number | null>(null);
  const [grade, setGrade] = useState<number | null>(null);
  const [gpa, setGpa] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchUser = async () => {
    apiAgent({
      url: `/api/users/new`,
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setUser(json.user);
        setAffiliation(json.user.affiliation);
        setGrade(json.user.grade);
        setGpa(json.user.gpa);
      });
  };

  useLayoutEffect(() => {
    fetchUser();
  }, []);

  const updateUserInfo = () => {
    const data = {
      user: {
        affiliation: affiliation,
        grade: grade,
        gpa: gpa,
      }
    };

    apiAgent({
      url: `/api/users/${user?.id}`,
      method: "PATCH",
      data,
    })
      .then((response) => response.json())
      .then((json) => {
        handleClick()
      });
  };

  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        component="div"
        py={4}
        sx={{ flexGrow: 1 }}
      >
        ユーザー情報設定
      </Typography>
      <Card sx={{ maxWidth: "700px", mx: "auto" }}>
        <CardContent>
          <Grid container spacing={2} sx={{ p: 2, bgcolor: "white" }}>
            <Grid item xs={12}>
              { affiliation != null &&
                <TextField
                  margin="normal"
                  select
                  label="所属"
                  fullWidth
                  defaultValue={affiliation}
                  onChange = {(e) => setAffiliation(Number(e.target.value))}
                >
                  {Affiliations.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              }
              { grade != null &&
                <TextField
                  margin="normal"
                  select
                  label="学年"
                  fullWidth
                  defaultValue={grade}
                  onChange = {(e) => setGrade(Number(e.target.value))}
                >
                  {Grades.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              }
              { grade != null &&
                <TextField
                  margin="normal"
                  type="number"
                  label="GPA(任意)"
                  inputProps={{ min: 0, max: 4.3, step: 0.01 }}
                  defaultValue={gpa}
                  fullWidth
                  onChange = {(e) => setGpa(Number(e.target.value))}
                />
              }
              <CardActions>
                {user &&
                  <Button
                    variant="contained"
                    sx={{ color: "white" }}
                    onClick={() => updateUserInfo()}
                  >
                    この内容で保存
                  </Button>
                }
              </CardActions>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          正常に保存されました
        </Alert>
      </Snackbar>
    </div>
  );
}
