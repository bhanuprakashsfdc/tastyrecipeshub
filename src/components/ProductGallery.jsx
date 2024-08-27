import React, { useState } from 'react';
import ProductItem from './ProductItem';
import productGalleryData from '../data/productGalleryData.json';

const ProductGallery = () => {
  const { section, categories, products } = productGalleryData;
  const [activeCategory, setActiveCategory] = useState('*');

  const filterProducts = (category) => {
    setActiveCategory(category);
  };

  const filteredProducts = activeCategory === '*' 
    ? products 
    : products.filter((product) => product.category.includes(activeCategory.replace('.', '')));

  return (
    <section className="pood-filter-area bgc-lighter pt-30 rpt-80 pb-100 rpb-70 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title text-center mb-50">
              <span className="sub-title mb-5">{section.title}</span>
              <h2>{section.heading}</h2>
            </div>
          </div>
        </div>
        <ul className="nav product-filter-nav filter-btns-one justify-content-center mb-40" role="tablist">
          {categories.map((category, index) => (
            <li
              key={index}
              className={activeCategory === category.filter ? 'active' : ''}
              onClick={() => filterProducts(category.filter)}
            >
              {category.name}
            </li>
          ))}
        </ul>
        <div className="row product-filter-active">
          {filteredProducts.map((product, index) => (
            <ProductItem
              key={index}
              title={product.title}
              category={product.category}
              image={product.image}
              badge={product.badge}
              rating={product.rating}
              reviews={product.reviews}
              price={product.price}
              oldPrice={product.oldPrice}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
