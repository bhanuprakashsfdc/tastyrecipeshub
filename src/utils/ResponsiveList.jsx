import React from 'react';

const ResponsiveList = ({ links }) => {
  return (
    <ul className="responsive-list">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </ul>
  );
};

export default ResponsiveList;
