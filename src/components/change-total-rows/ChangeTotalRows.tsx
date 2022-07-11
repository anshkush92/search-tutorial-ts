// Test -------------------------- Importing the Packages ---------------------------------
import { TextField, Button, Box } from "@mui/material";
import React from "react";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const ChangeTotalRows = () => {
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
      <Button variant="text">Decrease</Button>
      <TextField
        variant="standard"
        label="Change By"
        helperText="Enter numbers only"
      ></TextField>
      <Button variant="text">Increase</Button>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default ChangeTotalRows;

