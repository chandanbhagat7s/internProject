import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/esm/Stack";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function TopNav({ children }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="d-flex justify-content-between w-100">
          <div className="p-2">{children}</div>
          <div className="p-2">DS Box+</div>
        </div>
      </Container>
    </Navbar>
  );
}

export default TopNav;
