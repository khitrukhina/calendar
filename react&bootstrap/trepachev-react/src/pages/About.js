import React from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

import designImg from '../assets/design.jpg';
import teamImg from '../assets/team.jpg';
import programmingImg from '../assets/programming.jpg';
import frameworksImg from '../assets/frameworks.png';
import librariesImg from '../assets/libraries.jpg';
export default function About() {
  return (
    <Container>
      <Tab.Container id="left-tab-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="first">Design</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Team</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Programming</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Libraries</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content className="mt-2">
              <Tab.Pane eventKey="first">
                <img src={designImg} />
                <p>The section about design we are creating</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <img className="h-280" src={teamImg} />
                <p>The section about our team</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <img src={programmingImg} />
                <p>The section about our programming skills</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <img src={frameworksImg} />
                <p>The section about JS frameworks we use</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <img src={librariesImg} />
                <p>The section about JS libraries we use</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
