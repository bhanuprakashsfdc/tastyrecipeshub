import React from 'react';

const CategoryItem = ({ icon, title, items, link }) => {
  return (
    <div className="fc-two-item">
      <div className="icon">
        <img src={icon} alt={title} className="category-icon" />
      </div>
      <h5>{title}</h5>
      <a href={link} className="btn">{items}</a>
    </div>
  );
};

export default CategoryItem;
