
import firebase from 'firebase/app';
import './Login.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Login() {

  return (
    <div>
    <div className='left'></div>
        <div className="container">
        
      <div className="logo-container">
        {/* Your logo component goes here */}
        <img src="" alt="Logo" />
      </div> 
      {/* onChange={(e) => setEmail(e.target.value)}  value={email}  */}
      <div className="form-container">   
        <input type="email"  placeholder="Email" /><br></br>
        {/* onChange={(e) => setPassword(e.target.value)} value={password}  */}
        <input type="password" placeholder="Password"/><br></br> 
        {/* onClick={handleSignIn} */}
        <Link to="/Student"><button>Login</button></Link>
      </div>
    </div>
      
    </div>
  )
}

export default Login
