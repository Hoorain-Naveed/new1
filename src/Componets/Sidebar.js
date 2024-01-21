import React from 'react'
import './Sidebar.css'
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Link } from 'react-router-dom';



function Sidebar() {
  return (
   
      <div className='Sidebar'>
      <div className="logo-container">
        <img style={{width:'20%'}}
          src="https://w7.pngwing.com/pngs/713/762/png-transparent-computer-icons-button-login-image-file-formats-logo-monochrome.png"
          alt="Logo"
        />
      </div>
      <div className="heading-container">
        <div style={{display:'flex', justifyContent:'center'}}><PersonIcon/></div> <h3>Student</h3>
        <div style={{display:'flex', justifyContent:'center'}}><AssignmentIndIcon/></div> <h3>Attendence</h3>
       
       <div style={{marginTop:'120%',marginLeft:'3%',fontWeight:'bold'}}><Link to='/'>Logout</Link></div>
      
      </div>
    </div>
  )
}

export default Sidebar

