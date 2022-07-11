// Test -------------------------- Importing the Packages ---------------------------------
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// Test -------------------------- Importing the styles / other components ----------------
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggleTheme } from "../../features/theme/changeTheme";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const ToggleTheme = () => {
  const isDarkMode = useAppSelector((state) => state.toggleMode.isDarkMode);
  const dispatch = useAppDispatch();

  return (
    <IconButton onClick={() => dispatch(toggleTheme())}>
      {isDarkMode ? (
        <DarkModeIcon sx={{ color: "white" }}></DarkModeIcon>
      ) : (
        <LightModeIcon sx={{ color: "white" }}></LightModeIcon>
      )}
    </IconButton>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default ToggleTheme;
