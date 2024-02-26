import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-center">
      <ul className="flex justify-between">
        <li className="mr-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-gray-600 hover:text-gray-300'
                : 'text-white hover:text-gray-300'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            to="/works"
            className={({ isActive }) =>
              isActive
                ? 'text-gray-600 hover:text-gray-300'
                : 'text-white hover:text-gray-300'
            }
          >
            Works
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
