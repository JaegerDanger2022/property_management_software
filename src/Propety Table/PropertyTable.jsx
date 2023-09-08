import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../App.css";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Assignment, Image } from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, Type, ActiveUnits) {
  return { name, Type, ActiveUnits };
}

const dividerStyle = {
  borderLeft: "1px solid black",
  height: "100%",
  margin: "0 20px",
};

const rows = [];

const moreRows = [
  createData(
    <div>
      {/* =============**PropertyData**==== */}

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <IconButton>
              <Assignment />
            </IconButton>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
      </List>
      {/* =============** End of PropertyData**==== */}
    </div>,
    <div></div>,
    <div>ig</div>,
    <div>jig</div>,
    <div>igy</div>
  ),

  // Add more rows as needed
];

const PropertyTables = () => {
  const allRows = [...rows, ...moreRows];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Property</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Active Units</StyledTableCell>
            {/* <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {allRows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center"> {row.Type}</StyledTableCell>
              <StyledTableCell align="center">
                {row.ActiveUnits}
              </StyledTableCell>
              {/* <StyledTableCell align="center"> {row.RelatedTo}</StyledTableCell>
              <StyledTableCell align="center">{row.Status}</StyledTableCell>
              <StyledTableCell align="center">{row.Menu}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PropertyTables;
