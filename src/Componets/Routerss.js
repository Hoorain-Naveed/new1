import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login  from './Login';
import Student from './Student';
import AddStudent from './AddStudent';

function Routerss() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Student" element={<Student />} />
        <Route path="/AddStudent" element={<AddStudent />} />
      </Routes>
    </Router>
  );
}

export default Routerss;

