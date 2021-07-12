import React from 'react';
import { CardDeck, Container, Card, Button } from 'react-bootstrap';

import CarouselBox from '../components/CarouselBox';
import team1Img from '../assets/team1.jpg';
import team2Img from '../assets/team2.jpg';
import team3Img from '../assets/team3.jpg';

export default function Home() {
  return (
    <>
      <CarouselBox />
      <Container>
        <h2 className="text-center m-4">Our team</h2>
        <CardDeck className="m-4">
          <Card>
            <Card.Img variant="top" src={team1Img}></Card.Img>
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>Lorem ipsum set amet</Card.Text>
              <Button variant="warning">About team</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={team2Img}></Card.Img>
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>Lorem ipsum set amet</Card.Text>
              <Button variant="warning">About team</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={team3Img}></Card.Img>
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>Lorem ipsum set amet</Card.Text>
              <Button variant="warning">About team</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </>
  );
}
