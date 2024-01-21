import React from 'react'
import './Login.css'
import { Link } from '@mui/material'

function Login() {
  return (
    <div>
      <div className="login-container">
      <img className="logo" src="path/to/your/logo.png" alt="Logo" />
      <div className="input-container">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Link to="/camera">
      <button>Login</button>
    </Link>
      </div>
    </div>
      
    </div>
  )
}

export default Login