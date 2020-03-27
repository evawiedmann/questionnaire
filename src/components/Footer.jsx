import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  return (
    <div>
      <h1>Social Media Links</h1>
      <div className='social'>
      <a href="https://twitter.com/epicodus?lang=en">Twitter</a>
  | <br/><a href= 'https://www.facebook.com/epicodus.school/'>Facebook</a> <a href='https://www.instagram.com/epicodus.school/?hl=en'>Instagram</a>
      </div>
    </div>
  );
}

export default Footer;
