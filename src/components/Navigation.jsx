import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/a">ScreenA</Link>
        </li>
        <li>
          <Link to="/b">ScreenB</Link>
        </li>
        <li>
          <Link to="/c">ScreenC</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
