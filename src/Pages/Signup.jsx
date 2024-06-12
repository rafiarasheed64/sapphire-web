import React, { useEffect, useRef, useState } from "react";
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Shop from './Shop'


const Signup = () => {

  const name=useRef('')
   const email=useRef('')
   const password=useRef('')
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    // const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    // const localPassword=localStorage.getItem("password")
    // const localName=localStorage.getItem("name")
  //  useEffect(()=>{
  //   if(localSignUp){
  //       setShowHome(true)
  //   }
  //   if(localEmail){
  //       setShow(true)
  //   }
  //  })
   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        // window.location.reload()
      }
   }
  return (
    <div>
      {/* {showHome?<Shop/>:
            (show */}

    <div style={{display: 'flex',justifyContent: 'space-around',marginTop: '50px'}}>
      <div style={{width:'540px',border: '1px solid grey',backgroundColor: 'white',boxShadow: '10px 10px 15px grey',borderRadius: '5px',padding: '20px'}}>
        <h1 >Sign Up</h1>
        <div className='d-flex flex-column gap-4 mt-3'>
          <input className='p-2' type="text" placeholder='Your Name' ref={name} />
          <input className='p-2' type="email" placeholder='Email Address' ref={email} />
          <input className='p-2' type="passwond" placeholder='Password' ref={password} />
        </div>
        <Button className='w-100 mt-4 bg-danger' onClick={handleClick} variant="danger">Continue</Button>{' '}
        
      </div>
      </div>
            {/* )
} */}
    </div>
  )
}

export default Signup