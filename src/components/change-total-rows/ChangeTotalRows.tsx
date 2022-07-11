// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

// Test -------------------------- Importing the styles / other components ----------------
import { useAppDispatch } from "../../app/hooks";
import {
  increaseRows,
  decreaseRows,
} from "../../features/pages/totalRowsSlice";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const ChangeTotalRows = () => {
  const [changeBy, setChangeBy] = useState<string>("0");
  const dispatch = useAppDispatch();

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
        disabled={isNaN(parseInt(changeBy))}
        onClick={() => dispatch(decreaseRows(parseInt(changeBy)))}
        startIcon={<RemoveOutlinedIcon></RemoveOutlinedIcon>}
      >
        Decrease
      </Button>
      <TextField
        value={changeBy}
        variant="standard"
        label="Change By"
        helperText="Enter numbers only"
        onChange={(event) => setChangeBy(event?.target.value)}
      ></TextField>
      <Button
        variant="outlined"
        disabled={isNaN(parseInt(changeBy))}
        onClick={() => dispatch(increaseRows(parseInt(changeBy)))}
        endIcon={<AddOutlinedIcon></AddOutlinedIcon>}
      >
        Increase
      </Button>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default ChangeTotalRows;
