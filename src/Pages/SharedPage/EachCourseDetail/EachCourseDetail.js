import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const EachCourseDetail = ({courses}) => {
    const {title,image_url,details}= courses;
    return (
        <Container className='m-5'>
            <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {details}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        </Container>
    );
};

export default EachCourseDetail;