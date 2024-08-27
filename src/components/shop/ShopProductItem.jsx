import React from 'react';

const ShopProductItem = ({ image, name, price, discountPrice }) => {
  return (
    <div className="product-item-two">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="content">
        <div className="ratting">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <span>(5k)</span>
        </div>
        <h5><a href="product-details.html">{name}</a></h5>
        <span className="price"><del>{discountPrice}</del> {price}</span>
      </div>
      <a href="shop.html" className="theme-btn">add to cart <i className="far fa-arrow-alt-right"></i></a>
    </div>
  );
};

export default ShopProductItem;
