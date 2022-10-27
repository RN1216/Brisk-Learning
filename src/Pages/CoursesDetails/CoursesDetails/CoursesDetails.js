import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaBookmark,FaEye,FaShareAlt, FaStar } from "react-icons/fa";




const CoursesDetails = ({coursesdetail}) => {
 
  const {_id,title,image_url,details,rating,total_view}=coursesdetail
    return (
        <Container>
            
                <Card  style={{ width: '20rem' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
      {
        details.length >200 ?
          <p>{details.slice(0,200)+ '...'}<Link to ={`/coursesdetail/${_id}`}>Read more</Link></p>
        :{details}
      }
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div className="" >
            <FaStar className="text-warning"></FaStar>
            <FaStar className="text-warning "></FaStar>
            <FaStar className="text-warning "></FaStar>
            <span className="mx-2">{rating.number}</span>
        </div>
        <div className="">
            <FaEye className="text-secondary"></FaEye>
            <span  className="mx-2 text-secondary">{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
            
        </Container>
    );
};

export default CoursesDetails;