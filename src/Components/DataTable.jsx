import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MdOutlineEdit } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function DataTable({ data }) {
  function createData(businessid, businessname, contactno, multiuser, status) {
    return { businessid, businessname, contactno, multiuser, status };
  }

  const rows = data.map((el) => {
    return createData(
      el.businessid,
      el.businessname,
      el.contactno,
      el.multiuser,
      el.status
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        style={{ textAlign: "center", fontSize: "2rem" }}
      >
        <TableHead>
          <TableRow>
            <TableCell> Business ID </TableCell>
            <TableCell>Business Name</TableCell>
            <TableCell> Contact No</TableCell>
            <TableCell> Multiuser</TableCell>
            <TableCell> Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.businessid}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.businessid}
              </TableCell>
              <TableCell>{row.businessname}</TableCell>
              <TableCell>{row.contactno}</TableCell>
              <TableCell>{row.multiuser}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                    fontSize: "2rem",
                  }}
                >
                  <Link to={`/edit/${row.businessid}`}>
                    <MdOutlineEdit
                      style={{
                        cursor: "pointer",
                        border: "2px solid black",
                        borderRadius: ".2rem",
                        padding: ".1rem",
                        color: "black",
                      }}
                    />
                  </Link>

                  <Link to={`/edit/UserDetails`} state={{ id: row.businessid }}>
                    <RiGroupLine
                      style={{
                        cursor: "pointer",
                        border: "2px solid black",
                        borderRadius: ".2rem",
                        padding: ".1rem",
                      }}
                    />
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
