import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const CoursesDetails = ({coursesdetail}) => {
    return (
        <Container>
            <Row>
                <Col>
                <Card >
      <Card.Img variant="top" src={coursesdetail.image_url} />
      <Card.Body>
        <Card.Title>{coursesdetail.title}</Card.Title>
        <Card.Text>
        {coursesdetail.details}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
                </Col>
                
            </Row>
        </Container>
    );
};

export default CoursesDetails;