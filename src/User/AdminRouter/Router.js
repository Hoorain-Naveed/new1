import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Camera from '../Camera';
import Check from '../Check';
import Login from '../Login';
import { Link } from 'react-router-dom';

import CongratsPage from '../CongratsPage';

function Routerss() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="/Check" element={<Check ining=' in' />} />
        <Route path="/camera" element={<Link to='/out'><Camera  check=' CheckIn'/></Link>} />
        <Route path="/checkout" element={<Camera  check=' CheckOut'/>} />
        <Route path="/out" element={ <Link to='/checkout'><Check ining='out' /></Link>} /> */}
        <Route path="/" element={<Link to='/Check'><Login /></Link>} />
<Route path="/Check" element={<Link to='/camera'><Check ining='in' /></Link>} />
<Route path="/camera" element={<Link to='/out'><Camera check=' CheckIn' /></Link>} />
<Route path="/congrats" element={<CongratsPage />} />
<Route path="/checkout" element={<Link to='/congrats'><Camera check=' CheckOut'  /></Link>} />
<Route path="/out" element={<Link to='/checkout'><Check ining=' out' /></Link>} />

      </Routes>
    </Router>
  );
}

export default Routerss;