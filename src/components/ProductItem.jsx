import React from 'react';

const ProductItem = ({ title, category, image, badge, rating, reviews, price, oldPrice, link }) => {
  return (
    <div className={`col-xl-3 col-lg-4 col-sm-6 item ${category}`}>
      <div className="product-item-two">
        <div className="image">
          <img src={image} alt={title} />
          {badge && <span className="pizza-badge">{badge}</span>}
        </div>
        <div className="content">
          <div className="ratting">
            {[...Array(rating)].map((_, i) => (
              <i className="fas fa-star" key={i}></i>
            ))}
            <span>({reviews})</span>
          </div>
          <h5>
            <a href={link}>{title}</a>
          </h5>
          <span className="price">
            <del>{oldPrice}</del> {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
