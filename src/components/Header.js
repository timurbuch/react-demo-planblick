import React from 'react';
import './Header.css';
export const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="title-wrapper">
          <h2>Open Tickets</h2>
          <span> 230 Tickets</span>
        </div>

        <div className="search-wrapper">
          <input type="text" placeholder="Search" />
          <button>Search Ticket</button>
        </div>
      </div>
    </header>
  );
};
