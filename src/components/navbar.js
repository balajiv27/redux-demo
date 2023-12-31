import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/usermanagement">User Management</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
