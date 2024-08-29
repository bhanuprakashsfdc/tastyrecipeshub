import React from 'react';

const FooterWidget = ({ title, children }) => (
  <div className="footer-widget">
    <div className="footer-title">
      <h5>{title}</h5>
    </div>
    {children}
  </div>
);

export default FooterWidget;
