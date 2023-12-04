// homepage.js
import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <>
      <div>Home</div>
      <br />
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </>
  );
}

export default Homepage;
