import React from 'react'
import './AddStudent.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Link } from 'react-router-dom';

function AddStudent() {
  return (
    <div>
       <div className='Rightbar'>
      <h2 style={{float:'left'}}><Link to='/Student'><ArrowBackIcon fontSize='10%'/></Link>Add Student</h2>
      <button  style={{float:'right',marginTop:'7%', float: 'right',
          marginTop: '4%',
          width: '128px',
          height: '41px',
          top: '61px',
          left: '1558px',
          marginRight:'3%',
          backgroundColor:'#5C92F7',
          borderRadius: '10px',}}>Click me</button>

          <div style={{ width: '100px',
    height: '100px',
   borderRadius:'50%',
   boxShadow:'0 0 20px 2px rgba(54, 53, 53, 0.6)',
   marginTop:'20%',
   backgroundColor:'aqua',
   justifyContent:'center',
   marginLeft:'40%'}}></div>
   <div className='camera'><CameraAltIcon/></div>


    <div className="inputContainer1">
        <div>
          <label className="label" htmlFor="input1" style={{marginLeft:'-60px'}}>FirstName:</label><br></br>
          <input className="inputField" type="text"  style={{marginLeft:'10%'}} id="input1" name="input1" />
        </div>
        <div>
          <label className="label" htmlFor="input2" style={{marginLeft:'-60px'}}>LastName</label><br></br>
          <input className="inputField" type="text" id="input2" name="input2" />
        </div>
      </div>

      <div className="inputContainer1">
        <div>
          <label className="label" htmlFor="input1" style={{marginLeft:'-60px'}}>Course:</label><br></br>
          <input className="inputField" type="text"  style={{marginLeft:'10%'}} id="input1" name="input1" />
        </div>
        <div>
          <label className="label" htmlFor="input2" style={{marginLeft:'-60px'}}>Password:</label><br></br>
          <input className="inputField" type="text" id="input2" name="input2" />
        </div>
      </div>

      <div className="inputContainer1">
        <div>
          <label className="label" htmlFor="input1" style={{marginLeft:'-60px'}}>Email:</label><br></br>
          <input className="inputField" type="text"  style={{marginLeft:'10%'}} id="input1" name="input1" />
        </div>
        <div>
          <label className="label" htmlFor="input2" style={{marginLeft:'-60px'}}>Phone No:</label><br></br>
          <input className="inputField" type="text" id="input2" name="input2" />
        </div>
      </div>
       </div>

       





       </div>
    
  )
}

export default AddStudent
