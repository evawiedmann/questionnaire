import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  return (
    <div>
      <h1>Social Media Links</h1>
      <div className='social'><Link to="/">Facebook</Link> | <Link to="/Contact">Main Site</Link>
      </div>
    </div>
  );
}

export default Footer;
