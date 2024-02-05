import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import { IoHomeSharp } from "react-icons/io5";
import Stack from "react-bootstrap/Stack";
import { IoIosBusiness } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { GrDocumentConfig } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

function Nav() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout = async () => {
    await dispatch(logout);
    nevigate("/login");
    localStorage.clear();
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <CiMenuBurger />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Card style={{ width: "auto", textAlign: "center" }}>
            <Card.Img
              variant="top"
              src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706659200&semt=ais"
            />
            <Card.Body>
              <Card.Title>ADMIN</Card.Title>
              <Card.Text>functionality</Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <ButtonGroup vertical style={{ width: "100%" }}>
                    <Link to={"/"}>
                      <Button variant="dark" className="mb-2 px-3 py-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <IoHomeSharp />
                          <div className="mx-2">Home</div>
                        </div>
                      </Button>
                    </Link>

                    <Link to={"/business"}>
                      <Button variant="dark" className="mb-2 px-3 py-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <IoIosBusiness />
                          <div className="mx-2">Businesses</div>
                        </div>
                      </Button>
                    </Link>

                    <Link to={"/users"}>
                      <Button variant="dark" className="mb-2 px-3 py-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <FaUsers />
                          <div className="mx-2">Users</div>
                        </div>
                      </Button>
                    </Link>

                    <Link to={"/subscription"}>
                      <Button variant="dark" className="mb-2 px-3 py-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <MdOutlineSubscriptions />
                          <div className="mx-2">Subscriptions</div>
                        </div>
                      </Button>
                    </Link>

                    <Link to={"/changePassword"}>
                      <Button variant="dark" className="mb-2 px-3 py-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <RiLockPasswordLine />
                          <div className="mx-2">Change Password</div>
                        </div>
                      </Button>
                    </Link>

                    <Link to={"/appConfig"}>
                      <Button variant="dark" className="mb-2 px-3 py-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <GrDocumentConfig />
                          <div className="mx-2">App Configuration</div>
                        </div>
                      </Button>
                    </Link>

                    <Button variant="dark" className="mb-2 px-3 py-2">
                      <div className="d-flex justify-content-center align-items-center">
                        <CiLogout />
                        <div className="mx-2" onClick={handleLogout}>
                          Logout
                        </div>
                      </div>
                    </Button>
                  </ButtonGroup>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Nav;
