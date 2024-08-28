import React from 'react';

const BannerWidget = () => {
  return (
    <div className="widget widget-banner" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
      <div className="category-banner-item" style={{ backgroundImage: 'url(assets/images/widgets/banner-bg.jpg)' }}>
        <span className="price">only $59</span>
        <h3>SPECIALTY PIZZAS</h3>
        <div className="ratting">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <span>(5k)</span>
        </div>
        <a href="shop.html" className="theme-btn style-two">Order now <i className="far fa-arrow-alt-right"></i></a>
      </div>
    </div>
  );
};

export default BannerWidget;
