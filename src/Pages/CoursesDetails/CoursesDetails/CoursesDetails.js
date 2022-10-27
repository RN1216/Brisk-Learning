import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { render } from '@testing-library/react';
import SideSlid from "../../SharedPage/SideSlid/SideSlid";

const CoursesDetails = ({ coursesdetail }) => {
  const {  title, image_url, details, rating, total_view } = coursesdetail;
  return (
    <Container>
      <Row>
        <Col className=' m-5'>
        <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
      
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <div className="">
            <FaStar className="text-warning"></FaStar>
            <FaStar className="text-warning "></FaStar>
            <FaStar className="text-warning "></FaStar>
            <span className="mx-2">{rating.number}</span>
          </div>
          <div className="">
            <FaEye className="text-secondary"></FaEye>
            <span className="mx-2 text-secondary">{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
        </Col>
        <Col>
        
        </Col>
      </Row>
    </Container>
  );
};

export default CoursesDetails;
