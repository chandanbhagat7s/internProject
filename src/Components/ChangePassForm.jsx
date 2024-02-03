import React from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ChangePassForm() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <blockquote className="blockquote mb-0 text-center">
            <p className="display-5">Change Password</p>
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
              // value={responseData.subscription}
            />
          </Form.Group>
          <Form.Group className="mb-3  ">
            <Form.Label htmlFor="textin">Duration</Form.Label>
            <Form.Control
              type="number"
              id="textin"
              aria-describedby="passwordHelpBlock"
              // value={responseData.duration}
            />
          </Form.Group>

          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-success" className="mx-2">
              Change Password
            </Button>

            <Link to={"/"}>
              <Button variant="outline-danger">Close</Button>
            </Link>
          </ButtonGroup>
        </Form>
      </div>
    </>
  );
}
