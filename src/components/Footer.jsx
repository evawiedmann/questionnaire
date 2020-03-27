import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  return (
    <div>
    <h1>Social Media Links</h1>
    <div className='social'>
    <ul class="list-inline">
    <li><a href="https://twitter.com/epicodus?lang=en">Twitter</a></li>
    <li><a href= 'https://www.facebook.com/epicodus.school'>Facebook</a></li>
    <li><a href='https://www.instagram.com/epicodus.school/?hl=en'>Instagram</a></li>
    <li><a href='https://www.instagram.com/epicodus.school/?hl=en'>Instagram</a></li>
    <li><a href='https://www.epicodus.com/'>Epicodus Site</a></li>
    <li><a href= 'https://www.facebook.com/epicodus.school'>Facebook</a></li>
    <li><a href="mailto:hi@epicodus.com">Email</a></li>
    </ul>
    </div>
    </div>
  );
}

export default Footer;
