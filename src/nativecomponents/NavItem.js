import React, { useState } from 'react';
import './NavItem.css';

export const NavItem = ({ status }) => {
  const [active, setActive] = useState(false);
  return (
    <li
      className={`nav-link ${active ? 'active' : 'inactive'}`}
      onClick={() => setActive(!active)}
    >
      <a href="/">
        {status} Tickets <span className="badge">13</span>
      </a>
    </li>
  );
};
