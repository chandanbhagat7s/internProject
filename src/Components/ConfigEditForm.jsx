import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";

export default function ConfigEditForm() {
  const { id } = useParams();
  const [responseData, setResponseData] = useState();
  async function data() {
    const d = await axios.get(`/api/AppConfig/${id}`, {
      withCredentials: true,
      //   crossorigin: "",
      //   "Access-Control-Allow-Origin": "*",
    });
    console.log(d);

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
                <p className="display-5">App Configuration Details</p>
              </blockquote>
            </div>
          </div>
          <div className="d-flex justify-content-center border my-3 px-2 py-2">
            <Form className="text-center w-50">
              <Form.Group className="mb-3 ">
                <Form.Label htmlFor="textin">Configuration</Form.Label>
                <Form.Control
                  type="text"
                  id="textin"
                  aria-describedby="passwordHelpBlock"
                  value={responseData.configname}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Label htmlFor="textin">Value</Form.Label>
                <Form.Control
                  type="text"
                  id="textin"
                  aria-describedby="passwordHelpBlock"
                  value={responseData.configvalue}
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
