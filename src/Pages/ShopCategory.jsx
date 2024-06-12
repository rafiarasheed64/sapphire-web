import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import { Container, Row, Col, Image } from 'react-bootstrap';

const ShopCategory = (props) => {
  const {Data} =useContext(ShopContext)
  return (
    <>
    <Container fluid>
        <Col className='w-100'>
          <Image className='w-100'  src={props.banner} alt="" fluid />
        </Col>
          <h1 className='text-center mt-5'>{props.heading}</h1>
      <Row className='mt-5 py-5'>
        <Col className='w-100' sm={12} md={6} lg={3}>
          <Col className='w-100 d-flex flex-wrap justify-content-between align-items-between gap-3' >
            {Data.map((item, i) => {
              if (props.category === item.category) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              } else {
                return null;
              }
            })}
          </Col>
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default ShopCategory