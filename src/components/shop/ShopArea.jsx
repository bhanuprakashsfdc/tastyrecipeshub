import React from 'react';
import ShopSidebar from './ShopSidebar';
import ShopProductItem from './ShopProductItem';

const ShopArea = () => {
  const products = [
    {
      image: 'assets/images/dishes/dish1.png',
      name: 'fresh chicken burger',
      price: '$25',
      discountPrice: '$50',
    },
    {
      image: 'assets/images/dishes/dish2.png',
      name: 'pizza with mushrooms',
      price: '$25',
      discountPrice: '$50',
    },
    {
      image: 'assets/images/dishes/dish3.png',
      name: 'double burger & fries',
      price: '$25',
      discountPrice: '$50',
    },
    {
      image: 'assets/images/dishes/dish5.png',
      name: 'Italian beef pizza',
      price: '$25',
      discountPrice: '$50',
    },
    {
      image: 'assets/images/dishes/dish6.png',
      name: 'fried chicken burger',
      price: '$25',
      discountPrice: '$50',
    },
    {
      image: 'assets/images/dishes/dish4.png',
      name: 'fried chicken french',
      price: '$25',
      discountPrice: '$50',
    },
    {
      image: 'assets/images/dishes/dish7.png',
      name: 'fried chicken french',
      price: '$25',
      discountPrice: '$50',
    },
    {
      image: 'assets/images/dishes/dish8.png',
      name: 'fried chicken drench',
      price: '$25',
      discountPrice: '$50',
    },
    {
      image: 'assets/images/dishes/dish9.png',
      name: 'roasted chicken',
      price: '$25',
      discountPrice: '$50',
    },
    {
      image: 'assets/images/dishes/dish10.png',
      name: 'Italian beef pizza',
      price: '$25',
      discountPrice: '$50',
    },
    {
      image: 'assets/images/dishes/dish11.png',
      name: 'Italian beef pizza',
      price: '$25',
      discountPrice: '$50',
    },
    {
      image: 'assets/images/dishes/dish12.png',
      name: 'top fried chicken',
      price: '$25',
      discountPrice: '$50',
    },
  ];

  return (
    <section className="shop-area py-130 rpy-100 shoparea">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-8">
            <ShopSidebar />
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="shop-page-wrap">
              <div className="shop-shorter rel z-3 mb-35">
                <div className="sort-text mb-15" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">
                  Showing 1–12 of 27 results
                </div>
                <div className="products-dropdown mb-15" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="50">
                  <select>
                    <option value="default" selected="">Default Sorting</option>
                    <option value="new">Newness Sorting</option>
                    <option value="old">Oldest Sorting</option>
                    <option value="hight-to-low">High To Low</option>
                    <option value="low-to-high">Low To High</option>
                  </select>
                </div>
              </div>
              <div className="row">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={index % 2 === 0 ? '0' : '50'}
                    data-aos-duration="1500"
                    data-aos-offset="50"
                  >
                    <ShopProductItem
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      discountPrice={product.discountPrice}
                    />
                  </div>
                ))}
              </div>
              <ul className="pagination pt-30 flex-wrap" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                <li className="page-item disabled">
                  <span className="page-link"><i className="fal fa-arrow-left"></i></span>
                </li>
                <li className="page-item active">
                  <span className="page-link">
                    1
                    <span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item">
                  <a className="page-link" href="#"><i className="fal fa-arrow-right"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopArea;
