// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";
import { toast } from "react-toastify";
import { TextField, Button, Box } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

// Test -------------------------- Importing the styles / other components ----------------
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  increaseRows,
  decreaseRows,
} from "../../features/pages/totalRowsSlice";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const ChangeTotalRows = () => {
  const [changeBy, setChangeBy] = useState<string>("1");
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.toggleMode.isDarkMode);

  const increaseHandler = () => {
    toast.success("Increased Rows");
    dispatch(increaseRows(parseInt(changeBy)));
  };

  const decreaseHandler = () => {
    toast.success("Decreased Rows");
    dispatch(decreaseRows(parseInt(changeBy)));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        mt: 2,
        mb: 4,
      }}
    >
      <Button
        variant="outlined"
        disabled={isNaN(parseInt(changeBy)) || parseInt(changeBy) === 0}
        onClick={decreaseHandler}
        sx={{ "&:disabled": { color: isDarkMode ? "red" : "default" } }}
        startIcon={<RemoveOutlinedIcon></RemoveOutlinedIcon>}
      >
        Decrease
      </Button>
      <TextField
        sx={{ input: { color: "black" } }}
        focused
        variant="standard"
        value={changeBy}
        label="Change By"
        helperText="Enter numbers only"
        onChange={(event) => setChangeBy(event?.target.value)}
      ></TextField>
      <Button
        variant="outlined"
        sx={{ "&:disabled": { color: isDarkMode ? "red" : "default" } }}
        disabled={isNaN(parseInt(changeBy)) || parseInt(changeBy) === 0}
        onClick={increaseHandler}
        endIcon={<AddOutlinedIcon></AddOutlinedIcon>}
      >
        Increase
      </Button>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default ChangeTotalRows;
