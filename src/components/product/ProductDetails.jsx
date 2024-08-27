import React from 'react';

const ProductDetails = () => {
  return (
    <section className="product-details pb-10 pt-130 rpt-100 productarea">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="product-details-image rmb-55"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <img
                src="assets/images/products/product-details.jpg"
                alt="Product Details"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="product-details-content"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <div className="section-title">
                <h2>Italian beef pizza</h2>
              </div>
              <span className="price mb-15">$58.63</span>
              <div className="ratting mb-40">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span>4.9 (Customer Reviews)</span>
              </div>
              <p>
                Quis ipsum sed et proin sit aliquet in quis aliqu ullamcorper
                sollicitudin quis ut sedorbi dui porttitor duis porttitore
                fringilla. Estauris purus vita volutpat. Estorem felis mau
                libero nisi. Rhoncus phasellus facilisi praesent venenatis.
              </p>
              <form action="#" className="add-to-cart py-25">
                <h5>Quantity</h5>
                <input
                  type="number"
                  defaultValue="2"
                  min="1"
                  max="20"
                  required
                />
                <button type="submit" className="theme-btn mb-15">
                  Add to Cart <i className="far fa-arrow-alt-right"></i>
                </button>
              </form>
              <ul className="category-tags pt-20 pb-30">
                <li>
                  <h6>Categories</h6> : <a href="#">Restaurant</a>
                </li>
                <li>
                  <h6>Tags</h6> : 
                  <a href="#">Pizza</a>, 
                  <a href="#">Burger</a>, 
                  <a href="#">Soup</a>
                </li>
              </ul>
              <div className="social-style-one">
                <h5>Share</h5>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>
          </div>
        </div>
        <ul
          className="nav nav tab-style-one mt-125 rmt-95 mb-40"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="50"
        >
          <li>
            <a href="#details" data-bs-toggle="tab" className="active show">
              Descriptions
            </a>
          </li>
          <li>
            <a href="#information" data-bs-toggle="tab">
              Additional Information
            </a>
          </li>
          <li>
            <a href="#reviews" data-bs-toggle="tab">
              Reviews (3)
            </a>
          </li>
        </ul>
        <div
          className="tab-content pb-60"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-offset="50"
        >
          <div className="tab-pane fade active show" id="details">
            <p>
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
              nulla id sit neque scelerisque pulvinar. Mus amet interdum turpis
              consequat adipiscing. Elementum feugiat sed duis consectetur
              varius et cras mattis. Lobortis auctor sit in eu nisl fusce augue
              venenatis, dui. Phasellus eget sagittis mauris, nibh augue cursus
              pellentesque amet elementum. Tristique amet sollicitudin sit nulla
              aliquam, imperdiet sed ut diam. Suspendisse ipsum rhoncus nulla
              lectus. Id neque in urna neque non amet. Tortor sed aliquam in
              faucibus enim, posuere. Sed et accumsan, neque posuere tempus in
              cras. Ornare lectus pretium, est eget purus, enim quam purus
              netus. Turpis nunc.
            </p>
            <p>
              Dictum ultrices et suspendisse amet mattis in pellentesque.
              Vulputate arcu, consectetur odio donec nec duis ultrices facilisi.
              Mauris cursus elit diam, urna suspendisse et, amet. Vitae ligula
              ultrices nulla justo, enim lorem duis. Volutpat sit et neque,
              aliquam, diam at at neque. Lacus augue.
            </p>
          </div>
          <div className="tab-pane fade" id="information">
            <p>
              Circumstances occur in which toil and pain can procure him some
              great pleasure. To take a trivial example, which of us ever
              undertakes laborious physical exercise, except to obtain some
              advantage from it? But who has any right to find fault with a man
              who chooses to enjoy a pleasure that has no annoying consequences?
            </p>
            <ul className="list-style-one mt-20 mb-15">
              <li>Fresh Chicken Burger</li>
              <li>Pizza With Mushrooms</li>
              <li>Double Burger & Fries</li>
            </ul>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
          <div className="tab-pane fade" id="reviews">
            <h5>Reviews (3)</h5>
            <div className="comments rattings mt-25">
              <div className="comment-body">
                <div className="author-thumb">
                  <img
                    src="assets/images/products/product-comment1.jpg"
                    alt="Author"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <ul className="comment-header">
                    <li>
                      <h6>Daniel A. Hayes</h6>
                    </li>
                    <li>15 Jan 2024</li>
                  </ul>
                  <p>
                    SaaS, or Software as a Service, is a cloud-based software
                    delivery model where applications are hosted by a
                    third-party provider and accessed via the internet. It offers
                    benefits such as scalability and cost-effectiveness.
                  </p>
                </div>
              </div>
              <div className="comment-body">
                <div className="author-thumb">
                  <img
                    src="assets/images/products/product-comment2.jpg"
                    alt="Author"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <ul className="comment-header">
                    <li>
                      <h6>Daniel A. Hayes</h6>
                    </li>
                    <li>15 Jan 2024</li>
                  </ul>
                  <p>
                    SaaS, or Software as a Service, is a cloud-based software
                    delivery model where applications are hosted by a
                    third-party provider and accessed via the internet. It offers
                    benefits such as scalability and cost-effectiveness.
                  </p>
                </div>
              </div>
              <div className="comment-body">
                <div className="author-thumb">
                  <img
                    src="assets/images/products/product-comment3.jpg"
                    alt="Author"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <ul className="comment-header">
                    <li>
                      <h6>Daniel A. Hayes</h6>
                    </li>
                    <li>15 Jan 2024</li>
                  </ul>
                  <p>
                    SaaS, or Software as a Service, is a cloud-based software
                    delivery model where applications are hosted by a
                    third-party provider and accessed via the internet. It offers
                    benefits such as scalability and cost-effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
