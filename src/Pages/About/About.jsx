import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <Container className="p-5">
      <Row>
        <Col md={6}>
          <Image src="https://cdn.shopify.com/s/files/1/1592/0041/files/3_04d3b33d-5f31-49f5-bd39-5d22958c718d.jpg?v=1697715743" alt="About Us" fluid />
        </Col>
        <Col md={6}>
          <div>
            <h2>About Us</h2>
            <p className='mt-2'>
            A high-street brand introduced by one of the largest names in the textile industry, Sapphire is celebrated for combining 100% pure fabric with unprecedented design aesthetic to create designer wear at an affordable price. Our range of clothing has something for everyone: Daily wear, party wear, formal wear, silk tunics, scarves and unstitched fabric.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
