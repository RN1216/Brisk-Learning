import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
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
            <Nav.Link >
              <Link className="text-decoration-none text-dark" to='/'>Home</Link></Nav.Link>

            <NavDropdown title="Courses" id="collasible-nav-dropdown">
              <NavDropdown.Item >
              <Link className="text-decoration-none text-dark" to='/'>BSc Courses</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link className="text-decoration-none text-dark" to='/'>Msc Courses</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link className="text-decoration-none text-dark" to='/'>PHD Courses</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                <Link className="text-decoration-none text-dark" to='/'>Orther Courses</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link ><Link className="text-decoration-none text-dark" to='/blog'>Blog</Link></Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              {user?.uid ? (
                <>
                  <span className="mx-2"> {user?.displayName} </span>
                  <Button onClick={handleLogOut} variant="outline-dark">
                    {" "}
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline-dark mx-1">
                    <Link
                      className="text-decoration-none text-light"
                      to="/login"
                    >
                      Login
                    </Link>
                  </Button>
                  <Button variant="outline-dark mx-1">
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
