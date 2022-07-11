// Test -------------------------- Importing the Packages ---------------------------------
import { Mail } from "@mui/icons-material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsIcon from "@mui/icons-material/Settings";
import LightModeIcon from "@mui/icons-material/LightMode";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

// Test -------------------------- Importing the styles / other components ----------------
import { toggleTheme } from "../../features/theme/changeTheme";
import BadgeButton from "./BadgeButton";
import SearchBar from "./SearchBar";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.toggleMode.isDarkMode);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}
        >
          <Typography variant="body1">Logo</Typography>

          <SearchBar></SearchBar>

          <Box display="flex" alignItems="center">
            <IconButton onClick={() => dispatch(toggleTheme())}>
              {isDarkMode ? (
                <DarkModeIcon sx={{ color: "white" }}></DarkModeIcon>
              ) : (
                <LightModeIcon sx={{ color: "white" }}></LightModeIcon>
              )}
            </IconButton>

            <BadgeButton
              title="Mail Notifications"
              icon={<Mail sx={{ color: "white" }} />}
              badgeContent={2}
            ></BadgeButton>

            <BadgeButton
              title="All the Notifications"
              icon={<NotificationsActiveIcon sx={{ color: "white" }} />}
              badgeContent={4}
            ></BadgeButton>

            <BadgeButton
              title="General Settings"
              icon={<SettingsIcon sx={{ color: "white" }} />}
              badgeContent={6}
            ></BadgeButton>

            <Avatar
              src="https://mui.com/static/images/avatar/5.jpg"
              alt="Ansh Singh"
              sx={{ ml: 2.5 }}
            ></Avatar>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Navbar;
