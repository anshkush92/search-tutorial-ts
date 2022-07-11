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
  TableFooter,
  TablePagination,
} from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import StyledTableCell from "./StyledTableCell";
import StyledTableRow from "./StyledTableRow";
import TablePaginationActions from "./TablePaginationActions";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { changePageHandler } from "../../features/pages/pageSlice";
import { changeRowsPerPageHandler } from "../../features/pages/rowsPerPageSlice";

// Test -------------------------- Structure of Props ----------------------------------
import { BasicTableProps } from "../../types/BasicTableProps.type";

// Test -------------------------- The current component ----------------------------------
const BasicTable = ({ rows }: BasicTableProps) => {
  const page = useAppSelector((state) => state.page.page);
  const rowsPerPage = useAppSelector((state) => state.rowsPerPage.rowsPerPage);
  const word = useAppSelector((state) => state.searchWord.word);

  rows = rows?.filter((eachRow) =>
    eachRow.name.toLowerCase().includes(word.toLowerCase())
  );

  const dispatch = useAppDispatch();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    dispatch(changePageHandler(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(changeRowsPerPageHandler(parseInt(event.target.value)));
    dispatch(changePageHandler(0));
  };

  return (
    <Box width="90%" m="auto" mb={4}>
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
            {(rowsPerPage > 0
              ? rows?.slice(
                  rowsPerPage * page,
                  rowsPerPage * page + rowsPerPage
                )
              : rows
            )?.map((user) => (
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

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[
                  5,
                  10,
                  25,
                  50,
                  100,
                  { label: "All", value: -1 },
                ]}
                count={rows?.length || 0}
                colSpan={12}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "Rows Per Page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default BasicTable;
