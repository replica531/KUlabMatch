import { RedirectLoginOptions } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export type AuthButtonProps = {
  isLoading: boolean;
  isAuthenticated: boolean;
  onLogin: (options?: RedirectLoginOptions) => Promise<void>;
  onLogout: () => void;
};

export const AuthButton = ({
  isLoading,
  isAuthenticated,
  onLogin,
  onLogout,
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
        ログイン
      </Button>
    );
  }
  return (
    <Button
      onClick={() => onLogout()}
      variant="contained"
      sx={{ color: "#ffffff" }}
    >
      ログアウト
    </Button>
  );
};
