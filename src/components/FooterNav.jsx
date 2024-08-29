import React from 'react';

const FooterNav = ({ items }) => (
  <ul className="footer-bottom-nav">
    {items.map((item, index) => (
      <li key={index}>
        <a href={item.url}>
          <p className="minfmenu">{item.text}</p>
        </a>
      </li>
    ))}
  </ul>
);

export default FooterNav;
