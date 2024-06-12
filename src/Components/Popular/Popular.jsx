import React from "react";
import Data from "../Assets/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "./Swiper.css";
import {Card, CardImg, CardText,Col,Container,Row,} from "react-bootstrap";


const Popular = () => {
  return (
    <>
      <Container fluid className="mt-3">
        <Row className="g-3">
          <Col
            md={3}
            sm={12}
            className="d-flex flex-column justify-content-center"
          >
            <h1>NEW-IN</h1>
            <p>
              These spectacular styles are new and here to certainly tempt you.
            </p>
            <a href="">View All</a>
          </Col>
          <Col md={9} sm={12} className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Autoplay,Navigation]}
              className="mySwiper"
            >
              { Data.map( (item, idx) => {

                  if( idx < 12  ){

                    return (
                        
                        <SwiperSlide key={item.id}>
                        <Card className="border-0 height-349">
                        <CardImg src={item.image} style={{height: "100%", width: "100%"}} />
                        <Card.Body>
                        <CardText className="text-center"></CardText>
                        </Card.Body>
                        </Card>
                        </SwiperSlide>
                        
                    );
                  }
                 
              })

                }
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Popular;
