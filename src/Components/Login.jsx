import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { login } from "../redux/slices/authSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [input, setInput] = useState({ name: "", password: "" });
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const log = await dispatch(login({ ...input }));
      console.log(log);
      if (log?.payload?.data?.message == "Valid User") {
        alert("logged in ");
        nevigate("/");
      } else {
        setInput({ name: "", password: "" });
      }
    } catch (error) {
      console.log(error);
      setInput({ name: "", password: "" });
    }
  };

  const handlechange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  useEffect(() => {}, [input]);
  // login()

  return (
    <div
      className="d-flex justify-content-center text-center"
      style={{ height: "100vh", width: "100vw", alignItems: "center" }}
    >
      <div style={{ width: "70vw" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter email"
              onChange={handlechange}
            />
            <Form.Text className="text-muted">
              'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handlechange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="success" type="submit" onClick={handleSubmit}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
