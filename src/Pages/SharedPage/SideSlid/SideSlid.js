import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../asset/player_2.png'
import Brand2 from '../../../asset/player_3.png'

const SideSlid = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Brand1}
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Brand2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
    );
};

export default SideSlid;