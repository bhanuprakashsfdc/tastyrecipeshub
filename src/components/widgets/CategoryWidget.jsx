import React from 'react';

const CategoryWidget = () => {
  return (
    <div className="widget widget-category" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
      <h4 className="widget-title">Category</h4>
      <ul>
        <li><a href="blog.html">Beef & Chicken Hamburger <span className="count">8</span></a></li>
        <li><a href="blog.html">Italian Pizza <span className="count">3</span></a></li>
        <li><a href="blog.html">Sandwich <span className="count">5</span></a></li>
        <li><a href="blog.html">Chicken Roll <span className="count">2</span></a></li>
        <li><a href="blog.html">Soup <span className="count">5</span></a></li>
      </ul>
    </div>
  );
};

export default CategoryWidget;
