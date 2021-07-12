import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const styles = {
  container: {
    width: '500px',
    margin: '0 auto',
  },
  h2: {
    textAlign: 'center',
    marginTop: '20px',
  },
};
export default function Contacts() {
  return (
    <Container style={styles.container}>
      <h2 style={styles.h2}>Contact us</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"></Form.Control>
          <Form.Text>We will never share your email with anyone else</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Example text area</Form.Label>
          <Form.Control as="textarea" rows="3"></Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out"></Form.Check>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
