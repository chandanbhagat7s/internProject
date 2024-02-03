import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { TextField } from "@mui/material";

export default function EditUser() {
  const { id } = useParams();

  const [responseData, setResponseData] = useState();
  async function data() {
    const d = await axios.get(`/api/UserDetails/${id}`, {
      withCredentials: true,
      //   crossorigin: "",
      //   "Access-Control-Allow-Origin": "*",
    });
    // console.log(d);

    setResponseData({ ...d.data?.data });
  }
  useEffect(() => {
    data();
  }, []);
  return (
    <>
      {!responseData ? (
        <Loader />
      ) : (
        <>
          <div className="card">
            <div className="card-body">
              <blockquote className="blockquote mb-0 text-center">
                <p className="display-5">User Details</p>
              </blockquote>
            </div>
          </div>
          <div className="d-flex justify-content-center border my-3 px-2 py-2">
            <Form className="text-center w-50">
              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="textin">User Name</Form.Label>
                <Form.Control
                  type="text"
                  id="textin"
                  aria-describedby="passwordHelpBlock"
                  value={responseData.username}
                />
              </Form.Group>
              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="textin">Mobile number</Form.Label>
                <Form.Control
                  type="number"
                  id="textin"
                  aria-describedby="passwordHelpBlock"
                  value={responseData.mobileno}
                />
              </Form.Group>
              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="textin"> Business ID</Form.Label>
                <Form.Control
                  type="number"
                  id="textin"
                  aria-describedby="passwordHelpBlock"
                  value={responseData.businessid}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="textin">User Role</Form.Label>
                <Form.Control
                  type="text"
                  id="textin"
                  aria-describedby="passwordHelpBlock"
                  value={responseData.userrole}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="textin">User Access</Form.Label>
                <Form.Control
                  type="number"
                  id="textin"
                  aria-describedby="passwordHelpBlock"
                  value={responseData.useraccess}
                />
              </Form.Group>
              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="textin">Android ID</Form.Label>
                <Form.Control
                  type="text"
                  id="textin"
                  aria-describedby="passwordHelpBlock"
                  value={responseData.androidid}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="textin">Device Info</Form.Label>
                <Form.Control
                  type="text"
                  id="textin"
                  aria-describedby="passwordHelpBlock"
                  value={responseData.deviceinfo}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="textin">Status</Form.Label>
                <Form.Control
                  type="text"
                  id="textin"
                  aria-describedby="passwordHelpBlock"
                  value={responseData.status}
                  disabled
                />
              </Form.Group>

              <ButtonGroup aria-label="Basic example">
                <Button variant="outline-success" className="mx-2">
                  Update
                </Button>
                <Button variant="outline-success" className="mx-2">
                  Mark new User
                </Button>
                <Link to={"/users"}>
                  <Button variant="outline-danger">Close</Button>
                </Link>
              </ButtonGroup>
            </Form>
          </div>
        </>
      )}
    </>
  );
}
