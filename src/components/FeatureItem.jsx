import React from 'react';

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="featured-item-two">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <div className="content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
