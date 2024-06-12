// AboutPage.js
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiMailSend, BiPhone } from 'react-icons/bi';
// import './AboutPage.css'; // You can create a separate CSS file for styling

const Contact = () => {
  return (
    <Container className="p-5">
            <h2>Contact</h2>
      <Row>
        <Col md={12}>
          {/* <Image src="https://cdn.shopify.com/s/files/1/1592/0041/files/3_04d3b33d-5f31-49f5-bd39-5d22958c718d.jpg?v=1697715743" alt="About Us" fluid /> */}
          <iframe style={{width: '100%',height: '400px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108986.7109982501!2d74.09578514335938!3d31.391120599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901c5879b19f3%3A0x5906c4773c8409ba!2sSapphire%20Retail%20Limited!5e0!3m2!1sen!2s!4v1705900376786!5m2!1sen!2s"></iframe>
        </Col>
        <Col md={12}>
          <div>
            <h4>Contact Information</h4>
            <p className='mt-2'>
            Sapphire Retail Head Office 1.5-Km, Defence Road, Bhobtian Chowk, Off Raiwind Road, Opposite University of Lahore, Lahore.
            </p>
            <p><BiMailSend/> wecare@sapphireonline.pk</p>
            <p><BiPhone/>+92(0)42 111-738-245</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;