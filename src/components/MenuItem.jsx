import React from 'react';

const MenuItem = ({ title, price, description, image }) => {
  return (
    <div className="food-menu-item style-two">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <h5>
          <span className="title">{title}</span>
          <span className="dots"></span>
          <span className="price">{price}</span>
        </h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
