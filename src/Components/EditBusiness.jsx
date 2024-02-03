import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import Optionss from "./Optionss";
import { TextField } from "@mui/material";

export default function EditBusiness() {
  const { id } = useParams();
  const [responseData, setResponseData] = useState();
  const [details, setDetails] = useState();
  async function data() {
    const d = await axios.get(`/api/BusinessDetails/${id}`, {
      withCredentials: true,
      //   crossorigin: "",
      //   "Access-Control-Allow-Origin": "*",
    });

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
          <div className="d-flex justify-content-center border">
            <Form className="text-center w-50">
              <div className="card">
                <div className="card-body">
                  <blockquote className="blockquote mb-0 text-center">
                    <p className="display-5">Business Details</p>
                  </blockquote>
                </div>
              </div>

              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="disabledTextInput">
                  Business Name
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder={responseData.businessname}
                  className="text-center"
                />
              </Form.Group>
              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="disabledTextInput">
                  Business Name
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder={responseData.contactno}
                  className="text-center"
                />
              </Form.Group>
              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="disabledTextInput">
                  Business Name
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder={responseData.subscriptiondate}
                  className="text-center"
                />
              </Form.Group>

              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="disabledTextInput">
                  Subscription
                </Form.Label>
                <Optionss />
              </Form.Group>
              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="">Transaction Details</Form.Label>

                <Form.Control type="text" placeholder="Normal text" />
              </Form.Group>
              <Form.Group className="mb-3  ">
                <input type="checkbox" name="" id="" className="p-2" /> Enable
                multiuser?
              </Form.Group>

              <ButtonGroup aria-label="Basic example">
                <Button variant="outline-success" className="mx-2">
                  Update
                </Button>
                <Link to={"/business"}>
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
