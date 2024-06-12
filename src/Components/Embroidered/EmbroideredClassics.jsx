import React, { useState } from "react";
import { Col, Container, Row ,} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Embroidered.css";
const EmbroideredClassics = () => {
  const [menu,setmenu] =useState('')
  return (
    <>
      <Container fluid className="mt-5 mb-5">
        <Row className="g-3 mt-2">
          <Col  md={9} sm={12}>
          <Row>
          <Col md={3} sm={12} className="d-flex flex-column align-items-center" onClick={()=>{setmenu('mens')}}>
            <img src='https://suhaibg.com/cdn/shop/products/3B9A0527.jpg?v=1675336886' className="img-fluid  imgg" alt="" srcset="" />
              <Link to='/mens'>Mens</Link>{menu==='mens'?<hr/>:<></>}
          </Col>
          <Col md={3} sm={12} className="d-flex flex-column align-items-center " onClick={()=>{setmenu('womens')}}>
            <img src='https://buy.ethnic.pk/cdn/shop/products/E0465-105_3.jpg?v=1697462490' className="img-fluid  imgg" alt="" srcset="" />
              
            <Link to='/womens'>Women</Link>{menu==='womens'?<hr/>:<></>}
          </Col>
          <Col  md={3} sm={12} className="d-flex flex-column align-items-center" onClick={()=>{setmenu('kids')}}>
            <img src='https://shehrnaz.com/wp-content/uploads/2022/06/7-scaled.webp' className="img-fluid  imgg" alt="" srcset="" />
              
              <Link to='/kids'>Kids</Link>{menu==='kids'?<hr/>:<></>}
          </Col>
          <Col  md={3} sm={12} className="d-flex flex-column align-items-center" onClick={()=>{setmenu('shawl')}}>
            <img src='https://pk.sapphireonline.pk/cdn/shop/products/000000FRM008_2.jpg?v=1680859547&width=400' className="img-fluid  imgg" alt="" srcset="" />
              <Link to='/fragrance'>Fragrance</Link>{menu==='fragrance'?<hr/>:<></>}
          </Col>
          </Row>
          </Col>
          <Col className="d-flex align-items-center flex-column justify-content-center">
            <h4 className="text-center">ALL CATEGORY</h4>
          {/* <h5>BY SEASONAL </h5> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EmbroideredClassics;
