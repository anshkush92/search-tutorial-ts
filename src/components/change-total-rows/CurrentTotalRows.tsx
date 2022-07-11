// Test -------------------------- Importing the Packages ---------------------------------
import { TextField, Box } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import { useAppSelector } from "../../app/hooks";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const CurrentTotalRows = () => {
  const totalRows = useAppSelector((state) => state.totalRows.totalRows);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
      }}
    >
      <TextField
        label="Current Total Rows"
        variant="standard"
        value={totalRows}
        InputProps={{ readOnly: true }}
        helperText="Read Only"
      ></TextField>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CurrentTotalRows;
