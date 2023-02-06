import * as React from "react";
import { LogoutOptions } from "@auth0/auth0-react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import Link from "@mui/material/Link";
import Divider from '@mui/material/Divider';

export type UserIconButtonProps = {
  isLoading: boolean;
  isAuthenticated: boolean;
  imageUrl: string;
  onLogout: (options?: LogoutOptions) => void;
};

export const UserIconButton = ({
  isLoading,
  isAuthenticated,
  imageUrl,
  onLogout,
}: UserIconButtonProps) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (isLoading || !isAuthenticated) {
    return <></>;
  }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <FormatListBulletedIcon fontSize="large"/>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Link href="/profile" color="black" underline="none">
          <MenuItem onClick={handleCloseUserMenu}>
            <AccountCircleIcon />
            <Typography textAlign="center">プロフィール</Typography>
          </MenuItem>
        </Link>
        <Link href="/surveys" color="black" underline="none">
          <MenuItem onClick={handleCloseUserMenu}>
            <HowToVoteIcon />
            <Typography textAlign="center">投票ページ</Typography>
          </MenuItem>
        </Link>
        <Divider />
        <MenuItem onClick={() => onLogout()} sx={{ mt: 1 }}>
          <LogoutIcon />
          <Typography textAlign="center">ログアウト</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
