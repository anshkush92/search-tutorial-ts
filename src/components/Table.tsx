// Test -------------------------- Importing the Packages ---------------------------------
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Avatar,
} from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import { BasicTableProps } from "../types/BasicTableProps.type";
import StyledTableCell from "./StyledTableCell";
import StyledTableRow from "./StyledTableRow";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const BasicTable = ({ userData }: BasicTableProps) => {
  return (
    <Box width="90%" m="auto">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Date of Birth</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Country</StyledTableCell>
              <StyledTableCell>Avatar</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {userData?.map((user) => (
              <StyledTableRow key={user.name}>
                <StyledTableCell>{user.name}</StyledTableCell>
                <StyledTableCell>{user.email}</StyledTableCell>
                <StyledTableCell>{user.dob}</StyledTableCell>
                <StyledTableCell>{user.phone}</StyledTableCell>
                <StyledTableCell>{user.country}</StyledTableCell>
                <StyledTableCell>
                  <Avatar src={user.avatar} alt={user.name}></Avatar>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default BasicTable;
