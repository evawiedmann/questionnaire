import React from 'react';
import { Link } from 'react-router-dom';

function Picker(){
  return (
    <div>
      <h2>Welcome! Let's get started.</h2>
      <h3>Choose One:</h3>
      <div><Link to="/MenteeForm">Mentee</Link> | <Link to="/MentorForm">Mentor</Link>
      </div>
    </div>
  );
}

export default Picker;
