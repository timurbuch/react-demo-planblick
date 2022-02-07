import React from 'react';
import { NavItem } from '../nativecomponents/NavItem';
import './NavBar.css';
export const NavBar = () => {
  return (
    <div>
      <ul className="nav">
        <NavItem status={'Open'} />

        <NavItem status={'Pending'} />

        <NavItem status={'On-Hold'} />
      </ul>
    </div>
  );
};
