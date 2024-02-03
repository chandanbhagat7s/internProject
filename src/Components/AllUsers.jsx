import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MdOutlineEdit } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import { useEffect, useState } from "react";

function NoDetailsFound() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <blockquote className="blockquote mb-0 text-center">
            <p>No Multi User data found</p>
          </blockquote>
        </div>
      </div>
    </>
  );
}

export default function AllUser() {
  const [responseData, setResponseData] = useState([]);
  async function data() {
    // https://dsboxapi.beatsacademy.in/api/AdminHome2/
    const d = await axios.get("/api/UserDetails/", {
      withCredentials: true,
    });

    function createData(userid, username, mobileno, userrole, status) {
      return { userid, username, mobileno, userrole, status };
    }

    const rows = d.data.data.map((el) => {
      return createData(
        el.userid,
        el.username,
        el.mobileno,
        el.userrole,
        el.status
      );
    });
    console.log(rows);
    setResponseData([...rows]);
  }
  useEffect(() => {
    data();
  }, []);

  return (
    <>
      {/* {empty && <NoDetailsFound />} */}
      {!responseData ? (
        <>
          <Loader />
        </>
      ) : (
        // !empty && (
        <>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              style={{ textAlign: "center", fontSize: "2rem" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>User ID</TableCell>
                  <TableCell> User Name</TableCell>
                  <TableCell> Mobile No</TableCell>
                  <TableCell>User Role</TableCell>
                  <TableCell> Status</TableCell>
                  <TableCell> Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {responseData.map((row) => (
                  <TableRow
                    key={row.userid}
                    // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.userid}</TableCell>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.mobileno}</TableCell>
                    <TableCell>{row.userrole}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>
                      {/* /edituser/:id */}
                      <Link to={`/edituser/${row.userid}`}>
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
