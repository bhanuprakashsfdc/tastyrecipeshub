import React from 'react';

const CategoryBannerItem = ({ title, subtitle, backgroundImage, link, gradientClass, styleClass, delay }) => {
  return (
    <div
      className="col"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="1500"
      data-aos-offset="50"
    >
      <div
        className={`category-banner-item ${styleClass} ${gradientClass}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <span className="quality">{subtitle}</span>
        <h2>{title}</h2>
        <a href={link} className="theme-btn">
          Shop now <i className="far fa-arrow-alt-right"></i>
        </a>
      </div>
    </div>
  );
};

export default CategoryBannerItem;
