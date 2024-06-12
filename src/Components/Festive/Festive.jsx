import React from 'react'
import { Container } from 'react-bootstrap'
// import {Festivebanner} from '../Assets/festive-bg.jpg'
import "./Festive.css";
const Festive = () => {
  return (
    <>
     <h2 className='mt-2 text-center mb-4'>FESTIVE COLLECTION</h2>
       <Container fluid className="position-relative festive-container p-0">
  
            <div className="ull position-absolute  h-100 w-100 d-flex align-items-center">
              {/* <ul className="text-white lh-lg " style={{listStyle:"none"}}>
                <h4>BY FABRIC</h4>
                <li><a href="" className="text-decoration-none text-white">Chiffon</a></li>
                <li><a href="" className="text-decoration-none text-white">Karandi</a></li>
                <li><a href="" className="text-decoration-none text-white">Irish</a></li>
                <li><a href="" className="text-decoration-none text-white">Lawn</a></li>
                <li><a href="" className="text-decoration-none text-white">Cambric</a></li>
                <li><a href="" className="text-decoration-none text-white">Cotton</a></li>
              </ul> */}
            </div>
          </Container>
    </>
  )
}

export default Festive