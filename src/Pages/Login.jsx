import React, { useEffect, useRef, useState } from "react";
import { Button } from 'react-bootstrap'

const Signup = () => {

//   const name=useRef('')
   const email=useRef('')
   const password=useRef('')
  //  const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    // const localName=localStorage.getItem("name")
   useEffect(()=>{
    // if(localSignUp){
    //     setShowHome(true)
    // }
    if(localEmail){
        setShow(true)
    }
   })
//    const handleClick=()=>{
//        if(name.current.value&&email.current.value&&password.current.value)
//       {
//         localStorage.setItem("name",name.current.value)
//         localStorage.setItem("email",email.current.value)
//         localStorage.setItem("password",password.current.value)
//         localStorage.setItem("signUp",email.current.value)
//         alert("Account created successfully!!")
//         window.location.reload()
//       }
//    }

   const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
        alert('successfully login')
    }else{
        alert("Please Enter valid Credential")
    }
   }
  return (
    <div style={{display: 'flex',justifyContent: 'space-around',marginTop: '50px'}}>
      <div style={{width:'540px',border: '1px solid grey',backgroundColor: 'white',boxShadow: '10px 10px 15px grey',borderRadius: '5px',padding: '20px'}}>
        <h1>Login</h1>
        <div className='d-flex flex-column gap-4 mt-3'>
          {/* <input className='p-2' type="text" placeholder='Your Name' ref={name} /> */}
          <input className='p-2' type="email" placeholder='Email Address' ref={email} />
          <input className='p-2' type="passwond" placeholder='Password' ref={password} />
        </div>
        {/* <button className=''>Continue</button> */}
        <Button className='w-100 mt-4 bg-danger' onClick={handleSignIn} variant="danger">Continue</Button>{' '}
        {/* <p style={{fontWeight:'600'}} className='mt-3'>Already have an account? <span style={{color: 'red', fontWeight: '700'}}>Login here</span></p> */}
        
      </div>
    {/* <div className="container">
                             <h1>Hello {localName}</h1>
                            <div className="input_space">
                                 <input placeholder="Email" type='text' />
                             </div>
                             <div className="input_space">
                                 <input placeholder="Password" type='password' />
                             </div>
                             <button onClick={handleSignIn}>Sign In</button>
                     </div> */}
    </div>
  )
}

export default Signup