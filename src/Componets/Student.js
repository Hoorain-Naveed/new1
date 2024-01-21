import React from 'react'
// import './Student.css'
import Sidebar from './Sidebar'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddStudent from './AddStudent';
import { Link } from 'react-router-dom';

function Student() {
  return (
    <div>
        <Sidebar/>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginTop:'-45%'}}>
    <div>
      <h3 style={{marginLeft:'380px'}}><AccountCircleIcon/>Students</h3>
    </div>
    <div>
    {/* <Link to='./AddStudent'><button  style={{marginLeft:'-52%',width:'150%',backgroundColor:'#5C93FA',borderRadius:'10px'}}className='animated-button'>
        <span style={{marginTop:'2%'}}><AddCircleIcon/>Add Student</span></button></Link>   */}
        <Link to='/AddStudent'>
            <button style={{ marginLeft: '-52%', width: '150%', backgroundColor: '#5C93FA', borderRadius: '10px' }} className='animated-button'>
              <span style={{ marginTop: '2%' }}><AddCircleIcon />Add Student</span>
            </button>
          </Link>
    </div>
  </div>
  </div>
  )
}

export default Student
