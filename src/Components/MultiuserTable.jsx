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

export default function MultiUserTable() {
  const id = useLocation().state.id;
  console.log(id);
  const [responseData, setResponseData] = useState([]);
  const [empty, setEmpty] = useState(false);
  async function data() {
    // https://dsboxapi.beatsacademy.in/api/AdminHome2/
    const d = await axios.get("/api/UserDetails/", {
      withCredentials: true,
    });
    console.log(d);
    const users = d.data.data.filter((el) => el.businessid == id);
    function createData(
      businessid,
      userid,
      username,
      mobileno,
      userrole,
      status
    ) {
      return { businessid, userid, username, mobileno, userrole, status };
    }
    if (!users.length) {
      console.log("came");
      setEmpty(true);
    } else {
      const rows = users.map((el) => {
        return createData(
          el.businessid,
          el.userid,
          el.username,
          el.mobileno,
          el.userrole,
          el.status
        );
      });
      setResponseData([...rows]);
    }
  }
  useEffect(() => {
    data();
  }, []);

  return (
    <>
      {empty && <NoDetailsFound />}
      {!responseData ? (
        <>
          <Loader />
        </>
      ) : (
        !empty && (
          <>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                aria-label="simple table"
                style={{ textAlign: "center", fontSize: "2rem" }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell> Business ID </TableCell>
                    <TableCell>User ID</TableCell>
                    <TableCell> User Name</TableCell>
                    <TableCell> Mobile No</TableCell>
                    <TableCell>User Role</TableCell>
                    <TableCell> Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {responseData.map((row) => (
                    <TableRow
                      key={row.userid}
                      // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.businessid}
                      </TableCell>
                      <TableCell>{row.userid}</TableCell>
                      <TableCell>{row.username}</TableCell>
                      <TableCell>{row.mobileno}</TableCell>
                      <TableCell>{row.userrole}</TableCell>
                      <TableCell>{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )
      )}
    </>
  );
}
