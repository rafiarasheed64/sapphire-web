import React from 'react'
import { Container,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <Container className='w-25'>
      {/* <Row lg={3} md={6} sm={12}> */}

      <Col lg={3} md={6} sm={12} style={{border: '1px solid grey',boxShadow: '10px 10px 15px grey',borderRadius: '5px'}} className='w-100'>
        <Link to={`/product/${props.id}`}><img className='w-100' src={props.image} alt="" /></Link>
        <div className='p-2'>
        <p style={{fontWeight: '700'}} className=''>{props.name}</p>
            <h5 className="text-danger">PKR{props.new_price}</h5>
            <h5 style={{position:'relative'}}>PKR{props.old_price}
            <div style={{height: '1px',width: '70px',backgroundColor:'black',position:'absolute',left:'0',top:'11px'}} className=""></div></h5>
            

        </div>
        </Col>
      {/* </Row> */}
    </Container>
  )
}

export default Item