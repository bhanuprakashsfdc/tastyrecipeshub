import React from 'react';

const TagCloudWidget = () => {
  return (
    <div className="widget widget-tag-cloud" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
      <h4 className="widget-title">Popular Tags</h4>
      <div className="tag-coulds">
        <a href="shop.html">Spicy</a>
        <a href="shop.html">Seafoods</a>
        <a href="shop.html">Burger</a>
        <a href="shop.html">Pizza</a>
        <a href="shop.html">Soup</a>
        <a href="shop.html">Crap</a>
        <a href="shop.html">Juice</a>
        <a href="shop.html">Bread</a>
      </div>
    </div>
  );
};

export default TagCloudWidget;
