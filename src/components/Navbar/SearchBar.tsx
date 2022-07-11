// Test -------------------------- Importing the Packages ---------------------------------
import { Box, Paper, InputBase, Divider, IconButton } from "@mui/material";
import { toast } from "react-toastify";
import { Search } from "@mui/icons-material";

// Test -------------------------- Importing the styles / other components ----------------
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setWord } from "../../features/word/searchWordSlice";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const SearchBar = () => {
  const dispatch = useAppDispatch();
  const word = useAppSelector((state) => state.searchWord.word);

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast("Form Submitted");
    dispatch(setWord(""));
  };

  const inputWordHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setWord(event.target.value));
  };

  console.log(word);

  return (
    <Box sx={{ flex: 0.4 }}>
      <Paper
        component="form"
        sx={{ display: "flex", backgroundColor: "white" }}
        onSubmit={formSubmitHandler}
      >
        <InputBase
          value={word}
          fullWidth
          placeholder="Search based on names..."
          sx={{
            pl: 1,
            backgroundColor: "white",
            color: "black",
            borderRadius: 1,
          }}
          onChange={inputWordHanlder}
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
