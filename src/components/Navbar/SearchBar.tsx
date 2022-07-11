// Test -------------------------- Importing the Packages ---------------------------------
import { Box, Paper, InputBase, Divider, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------

const SearchBar = () => {
  return (
    <Box sx={{ flex: 0.4 }}>
      <Paper sx={{ display: "flex", backgroundColor: "white" }}>
        <InputBase
          fullWidth
          placeholder="Search..."
          sx={{ pl: 1, backgroundColor: "white", color: "black" }}
        ></InputBase>
        <Divider
          sx={{
            height: 28,
            mt: "auto",
            mb: "auto",
            backgroundColor: "black",
          }}
          orientation="vertical"
        />
        <IconButton>
          <Search color="primary"></Search>
        </IconButton>
      </Paper>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default SearchBar;
