import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

type StyledTableCellProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof TableCell>;

const StyledTableCell = (props: StyledTableCellProps) => {
  const StyledTableCellComponent = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return <StyledTableCellComponent>{props.children}</StyledTableCellComponent>;
};

export default StyledTableCell;
