import React from 'react'
import Navbar from './Navbar'
import './Check.css'
import { Link } from 'react-router-dom'

function Check({ining,congrats}) {
  return (
    <div>
      <Navbar/>
      {congrats}
         <div className='landing'>
    <div className='line'>
        <div><h4 style={{color:'#757474'}}>Id</h4></div><br></br>
        <h5>077898868767</h5>
    </div>

    <div className='line'>
        <div><h4 style={{color:'#757474'}}>Course</h4></div><br></br>
        <h5>Web And App Development</h5>
    </div>

    <div className='line'>
        <div><h4  style={{color:'#757474'}}>CheckIn Time</h4></div><br></br>
        <h5>{ new Date().toLocaleTimeString()}</h5>
    </div>
    
    <div className='line'>
        <div><h4  style={{color:'#757474'}}>CheckOut Time</h4></div><br></br>
        <h5>{new Date().toLocaleTimeString()}</h5>
    </div>

    {/* <Link to="/camera"> */}
    <button className="animated-button">Check {ining}</button>
    {/* </Link> */}

    </div>
    </div>
  )
}

export default Check
