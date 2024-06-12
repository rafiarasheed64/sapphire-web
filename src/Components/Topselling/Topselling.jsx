import React from "react";
import Data from "../Assets/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
// import "./Swiper.css";
import {
  Card,
  CardImg,
  CardText,
  Col,
  Container,
  Row,
} from "react-bootstrap";
const Topselling = () => {
  return (
    <>
      <Container fluid className="mt-5">
        <h2 className="text-center ">Top Selling</h2>
        <Row className="g-3 mt-3">
          <Col md={12} sm={12} className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              autoplay={{
                delay: 3000,
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
              {Data.map((item) => {
                if(item.category==='mens'){
                  return (
                    <SwiperSlide key={item.id}>
                      <Card className="border-0">
                        <CardImg src={item.image} />
                        <Card.Body>
                          <CardText className="text-center">{item.title}</CardText>
                        </Card.Body>
                      </Card>
                    </SwiperSlide>
                  );

                }
                else{
                  return null
                }
                }
              )}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Topselling