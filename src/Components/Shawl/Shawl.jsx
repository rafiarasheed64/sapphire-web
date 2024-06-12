import React from 'react'
import { Container } from 'react-bootstrap'
import Shawlbanner from "../Assets/home-page-banner-shawl.jpg"

const Shawl = () => {
  return (
    <>
    <Container fluid className='mt-5  p-0'>
        <h2 className='text-center'>Shawls</h2>
       <a href=""> <img src={Shawlbanner} className='img-fluid mt-3' alt="" srcset="" /></a>
    </Container>
    </>
  )
}

export default Shawl