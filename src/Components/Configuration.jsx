import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Loader from "./Loader";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";

export default function Configuration() {
  const [responseData, setResponseData] = useState([]);
  async function data() {
    // https://dsboxapi.beatsacademy.in/api/AdminHome2/
    const d = await axios.get("/api/AppConfig/", {
      withCredentials: true,
    });
    console.log(d);
    function createData(configvalue, configname, configid) {
      return { configvalue, configname, configid };
    }

    const rows = d.data.data.map((el) => {
      return createData(el.configvalue, el.configname, el.configid);
    });
    setResponseData([...rows]);
  }
  useEffect(() => {
    data();
  }, []);

  return (
    <>
      {!responseData ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              style={{ textAlign: "center", fontSize: "2rem" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell> ID </TableCell>
                  <TableCell> Configuration </TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell> Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {responseData.map((row) => (
                  <TableRow
                    key={row.userid}
                    // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.configid}</TableCell>
                    <TableCell>{row.configname}</TableCell>
                    <TableCell>{row.configvalue}</TableCell>
                    <TableCell>
                      <Link to={`/configEdit/${row.configid}`}>
                        <MdOutlineEdit
                          style={{
                            cursor: "pointer",
                            border: "2px solid black",
                            borderRadius: ".2rem",
                            padding: ".1rem",
                            color: "black",
                            fontSize: "2rem",
                          }}
                        />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
}
