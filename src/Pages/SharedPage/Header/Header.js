import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import loogo from "../../../image2vector.svg";
import {FaUser} from 'react-icons/fa'
import { AuthContext } from "./../../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="info"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={loogo}
            width="50"
            height="50"
            className="d-inline-block "
            alt=""
          />
          Learning
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>

            <NavDropdown title="Courses" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                BSc Courses
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Msc Courses
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                PHD Courses
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Orther Courses
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              {user?.uid ? (
                <>
                  <span className="mx-2"> {user?.displayName} </span>
                  <Button onClick={handleLogOut} variant="outline-secondary">
                    {" "}
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="secondary mx-1">
                    <Link
                      className="text-decoration-none text-light"
                      to="/login"
                    >
                      Login
                    </Link>
                  </Button>
                  <Button variant="secondary mx-1">
                    <Link
                      className="text-decoration-none text-light"
                      to="/registration"
                    >
                      Registration
                    </Link>
                  </Button>
                </>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
