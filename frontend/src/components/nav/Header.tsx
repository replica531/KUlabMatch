import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ScienceIcon from '@mui/icons-material/Science';
import { AuthButton } from "@/components/auth/AuthButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const auth0 = useAuth0();
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "white" }}>
      <AppBar
        color="inherit"
        position="static"
        sx={{ px: { xs: 4, md: 32, xl: 64 } }}
      >
        <Toolbar>
          <ScienceIcon
            color="primary"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            研究室希望調査
          </Typography>
          <AuthButton
            isAuthenticated={auth0.isAuthenticated}
            isLoading={auth0.isLoading}
            onLogin={() => auth0.loginWithRedirect()}
            onLogout={() => auth0.logout()}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}