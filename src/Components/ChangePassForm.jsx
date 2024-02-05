import axios from "axios";
import React, { useState } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Alerts from "./Alerts";
import { useDispatch } from "react-redux";
import { setDanger, setWarn, success } from "../redux/slices/errorSlice";

export default function ChangePassForm() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    pass: "",
    cnfPass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handlePassword = async (e) => {
    e.preventDefault();
    if (input.pass !== input.cnfPass) {
      console.log(input);
      dispatch(setWarn({ message: "please check password and cnf password" }));
      return;
    }
    const res = await axios.put(
      "/api/Administrators/1001/",
      {
        adminpassword: input.pass,
        adminid: 1001,
        adminname: "Admin",
        deviceinfo: "0",
        fcmtoken: "0",
        firebaseid: "0",
        mobileno: "9421013332",
        status: "Active",
      },
      {
        withCredentials: true,
      }
    );
    dispatch(success({ message: res.data.message }));
    console.log(res);
  };

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
            <Form.Label htmlFor="textin">New Password</Form.Label>
            <Form.Control
              type="text"
              id="textin"
              aria-describedby="passwordHelpBlock"
              name="pass"
              onChange={handleChange}
              // value={responseData.subscription}
            />
          </Form.Group>
          <Form.Group className="mb-3  ">
            <Form.Label htmlFor="textin">Confirm Password</Form.Label>
            <Form.Control
              type="text"
              name="cnfPass"
              id="textin"
              onChange={handleChange}
              aria-describedby="passwordHelpBlock"
              // value={responseData.duration}
            />
          </Form.Group>

          <ButtonGroup aria-label="Basic example">
            <Button
              variant="outline-success"
              className="mx-2"
              onClick={handlePassword}
            >
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
