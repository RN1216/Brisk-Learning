import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/SharedPage/Header/Header';
import LeftNav from './../Pages/SharedPage/LeftNav/LeftNav';

const Main = () => {
    return (
       <div>
        <Container>
            <Header></Header>
            <Row>
                <Col lg='4' className='d-none d-lg-block'>
                <h2><LeftNav></LeftNav></h2>
                </Col>
                
                <Col lg='8'>
                <h1>middle</h1>
                <Outlet></Outlet>
                </Col>

            </Row>
       </Container>
       </div>
    );
};

export default Main;