import React from 'react';
import { Carousel } from 'react-bootstrap';
import bananaImg from '../assets/banana.jpg';
import cakeImg from '../assets/cake.jpg';
import lemonImg from '../assets/lemon.jpg';
import pineappleImg from '../assets/pineapple.jpg';

export default function CarouselBox() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={bananaImg} alt="banana" />
        <Carousel.Caption>
          <h3>Banana image</h3>
          <p>Lorem ipsum dolor</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cakeImg} alt="cake" />
        <Carousel.Caption>
          <h3>Cake image</h3>
          <p>Lorem ipsum dolor</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={lemonImg} alt="banana" />
        <Carousel.Caption>
          <h3>Lemon image</h3>
          <p>Lorem ipsum dolor</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pineappleImg} alt="banana" />
        <Carousel.Caption>
          <h3>Pineapple image</h3>
          <p>Lorem ipsum dolor</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
