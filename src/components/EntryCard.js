import React from 'react';
import './EntryCard.css';

export const EntryCard = ({
  title,
  description,
  assigned_to,
  category,
  status,
  supervisor,
}) => {
  return (
    <div className="wrapper">
      <div className="entry-wrapper">
        <div className="entry-header">
          {title} {description}
        </div>
        <div>assigned to {assigned_to}</div>
      </div>
      <div>{category}</div>
      <div className="owner-wrapper">
        <div className="owner">{supervisor}</div>
        <div className="status">{status}</div>
      </div>
    </div>
  );
};
