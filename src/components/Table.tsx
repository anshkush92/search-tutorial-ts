// Test -------------------------- Importing the Packages ---------------------------------
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const BasicTable = () => {
  return (
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
        <TableBody>Table Data</TableBody>
      </Table>
    </TableContainer>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default BasicTable;
