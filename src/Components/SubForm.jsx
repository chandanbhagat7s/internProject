import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import Loader from "./Loader";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function SubForm() {
  const { id } = useParams();
  const [responseData, setResponseData] = useState();
  async function data() {
    const d = await axios.get(`/api/SubscriptionsDetails/${id}`, {
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
                <p className="display-5">Subscription Details</p>
              </blockquote>
            </div>
          </div>
          <div className="d-flex justify-content-center border my-3 px-2 py-2">
            <Form className="text-center w-50">
              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="textin">Subscription</Form.Label>
                <Form.Control
                  type="text"
                  id="textin"
                  aria-describedby="passwordHelpBlock"
                  value={responseData.subscription}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="textin">Duration</Form.Label>
                <Form.Control
                  type="number"
                  id="textin"
                  aria-describedby="passwordHelpBlock"
                  value={responseData.duration}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3  ">
                <Form.Label htmlFor="textin"> Amount</Form.Label>
                <Form.Control
                  type="number"
                  id="textin"
                  aria-describedby="passwordHelpBlock"
                  value={responseData.amount}
                />
              </Form.Group>

              <ButtonGroup aria-label="Basic example">
                <Button variant="outline-success" className="mx-2">
                  Update
                </Button>

                <Link to={"/subscription"}>
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
