import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-between">
        <li className="mr-6">
          <Link to="/home" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/works" className="text-white hover:text-gray-300">
            Works
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
