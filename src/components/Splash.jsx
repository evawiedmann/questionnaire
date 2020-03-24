import React from 'react';
import { Link } from 'react-router-dom';

function Picker(){
  return (
    <div>
      <h2>Choose One:</h2>
      <div><Link to="/MenteeForm">Mentee</Link> | <Link to="/MentorForm">Mentor</Link>
      </div>
    </div>
  );
}

export default Picker;
