import { RedirectLoginOptions } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useAuth0 } from "@auth0/auth0-react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";

export type GpaButtonProps = {
  labId: number;
};

export const GpaButton = ({
  labId,
}: GpaButtonProps) => {
  const router = useRouter();
  const {isLoading , isAuthenticated} = useAuth0();
  const [open, setOpen] = useState(false);
  const surveyYear = router.query.year as string;

  const alertOpen = () => {
    setOpen(true);
  };

  const alertClose = () => {
    setOpen(false);
  };

  if (isLoading) {
    return (
      <Button
        color="inherit"
        variant="contained"
        onClick={() => router.push(`/laboratories/${labId}`)}
      >
        <CircularProgress size={20} />
      </Button>
    );
  }
  if (!isAuthenticated) {
    return (
      <Button
        color="inherit"
        variant="contained"
        onClick={() => alertOpen()}
      >
        <Snackbar open={open} autoHideDuration={6000} onClose={alertClose}>
          <Alert severity="warning">GPA分布を見るためにはログインが必要です。</Alert>
        </Snackbar>
        <Typography variant="body2" component="div">
          GPA<br />分布
        </Typography>
      </Button>
    );
  }
  return (
    <Button
      color="inherit"
      variant="contained"
      onClick={() => router.push(`/laboratories/${labId}${surveyYear ? `?year=${surveyYear}` : ""}`)}
    >
      <Typography variant="body2" component="div">
        GPA<br />分布
      </Typography>
    </Button>
  );
};
