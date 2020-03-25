import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  return (
    <div>
      <h1>Social Media Links</h1>
      <div className='nav'><Link to="/">Home</Link> | <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
}

export default Footer;
