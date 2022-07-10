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
  Avatar,
} from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import { BasicTableProps } from "../types/BasicTableProps.type";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const BasicTable = ({ userData }: BasicTableProps) => {
  return (
    <Box width="90%" m="auto">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Avatar</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {userData?.map((user) => (
              <TableRow key={user.name}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.dob}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.country}</TableCell>
                <TableCell>
                  <Avatar src={user.avatar} alt={user.name}></Avatar>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default BasicTable;
