import React from 'react';
import relatedProductsData from '../../data/relatedProducts.json'; 

const RelatedProducts = () => {
  return (
    <section className="related-products-area pt-130 rpt-100 pb-100 rpb-70 rel z-1 relatedproductarea">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb-50"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <h2>Related Product</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {relatedProductsData.map((product, index) => (
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <div className="product-item-two">
                <div className="image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="content">
                  <div className="ratting">
                    {[...Array(product.rating)].map((_, i) => (
                      <i className="fas fa-star" key={i}></i>
                    ))}
                    <span>({product.reviews})</span>
                  </div>
                  <h5>
                    <a href={product.link}>{product.title}</a>
                  </h5>
                  <span className="price">
                    <del>{product.price.original}</del> {product.price.discounted}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
