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
  Badge,
  IconButton,
  Avatar,
} from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------

const Navbar = () => {
  return (
    <Box display="flex" justifyContent="space-around">
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1">Logo</Typography>

          <Box></Box>

          <Box display="flex" alignItems="center">
            <IconButton>
              <></>
            </IconButton>

            <IconButton>
              <Badge badgeContent={4} color="error">
                <Mail sx={{ color: "white" }}></Mail>
              </Badge>
            </IconButton>

            <IconButton>
              <Badge badgeContent={6} color="error">
                <NotificationsActiveIcon
                  sx={{ color: "white" }}
                ></NotificationsActiveIcon>
              </Badge>
            </IconButton>

            <IconButton>
              <Badge badgeContent={8} color="error">
                <SettingsIcon sx={{ color: "white" }}></SettingsIcon>
              </Badge>
            </IconButton>

            <Avatar
              src="https://mui.com/static/images/avatar/5.jpg"
              alt="Ansh Singh"
              sx={{ ml: 2.5 }}
            ></Avatar>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Navbar;
