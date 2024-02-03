import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import { Button, ButtonGroup, Form, Table } from "react-bootstrap";
import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";

export default function Subscription() {
  const [responseData, setResponseData] = useState([]);
  async function data() {
    const d = await axios.get(`/api/SubscriptionsDetails`, {
      withCredentials: true,
    });
    console.log(d);
    function createData(
      status,
      amount,
      duration,
      subscription,
      subscriptionid
    ) {
      return { status, amount, duration, subscription, subscriptionid };
    }

    const rows = d.data.data.map((el) => {
      return createData(
        el.status,
        el.amount,
        el.duration,
        el.subscription,
        el.subscriptionid
      );
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
                  <TableCell>Subscription ID</TableCell>
                  <TableCell> Subscription </TableCell>
                  <TableCell>Duration</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell> Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {responseData.map((row) => (
                  <TableRow
                    key={row.amount}
                    // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.subscriptionid}</TableCell>
                    <TableCell>{row.subscription}</TableCell>
                    <TableCell>{row.duration}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>
                      <Link to={`/subEdit/${row.subscriptionid}`}>
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
