import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-between">
        <li className="mr-6">
          <Link to="/a" className="text-white hover:text-gray-300">
            ScreenA
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/b" className="text-white hover:text-gray-300">
            ScreenB
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/c" className="text-white hover:text-gray-300">
            ScreenC
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
