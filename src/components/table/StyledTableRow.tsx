import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

type StyledTableRowProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof TableRow>;

const StyledTableRow = (props: StyledTableRowProps) => {
  const StyledTableRowComponent = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return <StyledTableRowComponent>{props.children}</StyledTableRowComponent>;
};

export default StyledTableRow;
