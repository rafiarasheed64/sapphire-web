import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=" py-5">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <h4>Contact Us</h4>
            <p>Email: wecare@sapphireonline.pk</p>
            <p>Phone: +92(0)42 111-738-245</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h4>Customer Care</h4>
            <p>Exchange & Returns</p>
            <p>FAQs</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h4>Information</h4>
            <ul className="list-unstyled">
            <Link to='/'><li>Home</li></Link>
              <Link to='/about'><li>About Us</li></Link>
              <Link to='/contact'><li>Contact</li></Link>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h4>Social Media</h4>
            <ul className="list-unstyled d-flex gap-3 text-white">
              <li><a style={{ fontSize: '24px'}} className='text-danger hover:text-warning' href="https://twitter.com/"><BiLogoTwitter/></a></li>
              <li><a style={{ fontSize: '24px'}} className='text-danger' href="https://www.facebook.com/"><BiLogoFacebook/></a></li>
              <li><a style={{ fontSize: '24px'}} className='text-danger' href="https://www.instagram.com/"><BiLogoInstagram/></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
