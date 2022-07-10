// Test -------------------------- Importing the Packages ---------------------------------
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const BasicTable = () => {
  return (
    <Box width="90%" m="auto">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Avatar</TableCell>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Hello
              </TableCell>
              <TableCell component="th" scope="row">
                Hello
              </TableCell>
              <TableCell component="th" scope="row">
                Hello
              </TableCell>
              <TableCell component="th" scope="row">
                Hello
              </TableCell>
              <TableCell component="th" scope="row">
                Hello
              </TableCell>
              <TableCell component="th" scope="row">
                Hello
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default BasicTable;
