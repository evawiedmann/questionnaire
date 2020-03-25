import React from 'react';
import { Link } from 'react-router-dom';

function Match(){
  return (
    <div>
      <h1>Epicodus Mentorship Matcher</h1>
      <h3>You've got a match!</h3>
      <p>Please follow the instructions below to get in contact with your mentor/mentee.</p>
      <div className='match'><Link to="/">Matched</Link>
      </div>
    </div>
  );
}

export default Match;
