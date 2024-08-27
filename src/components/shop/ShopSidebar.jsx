import React from 'react';

const ShopSidebar = () => {
  return (
    <div className="shop-sidebar rmb-75">
      <div className="widget widget-search" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
        <h4 className="widget-title">Search</h4>
        <form action="#" className="default-search-form">
          <input type="text" placeholder="Search here" required />
          <button type="submit" className="searchbutton far fa-search"></button>
        </form>
      </div>

      <div className="widget widget-category" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
        <h4 className="widget-title">Category</h4>
        <ul>
          <li><a href="shop.html">Beef & Chicken Hamburger <span className="count">8</span></a></li>
          <li><a href="shop.html">Italian Pizza <span className="count">3</span></a></li>
          <li><a href="shop.html">Sandwich <span className="count">5</span></a></li>
          <li><a href="shop.html">Chicken Roll <span className="count">2</span></a></li>
          <li><a href="shop.html">Soup <span className="count">5</span></a></li>
        </ul>
      </div>

      <div className="widget widget-filter" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
        <h4 className="widget-title">Pricing</h4>
        <div className="price-filter-wrap">
          <div className="price-slider-range"></div>
          <div className="price">
            <span>Price </span>
            <input type="text" id="price" readOnly />
          </div>
        </div>
      </div>

      <div className="widget widget-products" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
        <h4 className="widget-title">Best Seller</h4>
        <ul>
          <li>
            <div className="image">
              <img src="assets/images/widgets/product1.jpg" alt="Product" />
            </div>
            <div className="content">
              <div className="ratting">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h6><a href="product-details.html">Vegetable Hamburger</a></h6>
              <span className="price">$58.63</span>
            </div>
          </li>
          <li>
            <div className="image">
              <img src="assets/images/widgets/product2.jpg" alt="Product" />
            </div>
            <div className="content">
              <div className="ratting">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h6><a href="product-details.html">Italian Chicken Pizza</a></h6>
              <span className="price">$83.25</span>
            </div>
          </li>
          <li>
            <div className="image">
              <img src="assets/images/widgets/product3.jpg" alt="Product" />
            </div>
            <div className="content">
              <div className="ratting">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h6><a href="product-details.html">Crab Seafood Sauce</a></h6>
              <span className="price">$83.25</span>
            </div>
          </li>
        </ul>
      </div>

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
    </div>
  );
};

export default ShopSidebar;
