import { RedirectLoginOptions } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export type AuthButtonProps = {
  isLoading: boolean;
  isAuthenticated: boolean;
  onLogin: (options?: RedirectLoginOptions) => Promise<void>;
};

export const AuthButton = ({
  isLoading,
  isAuthenticated,
  onLogin,
}: AuthButtonProps) => {
  if (isLoading) {
    return (
      <Button
        variant="contained"
        sx={{ color: "#ffffff", width: "90px", height: "36.5px" }}
      >
        <CircularProgress size={25} color={"inherit"} />
      </Button>
    );
  }
  if (!isAuthenticated) {
    return (
      <Button
        onClick={() => onLogin()}
        variant="contained"
        sx={{ color: "#ffffff" }}
      >
        はじめる
      </Button>
    );
  }
  return <></>;
};
