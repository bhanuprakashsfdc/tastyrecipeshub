import React from 'react';

const ReviewForm = () => {
  return (
    <section className="review-form-area productarea">
      <div className="container">
        <form
          id="review-form"
          className="review-form z-1 rel"
          name="review-form"
          action="#"
          method="post"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="50"
        >
          <h5>Add a review</h5>
          <p>3 reviews for Blue Stripes & Stone Earrings</p>
          <div className="row mt-25">
            <div className="col-lg-4">
              <div className="form-group">
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <input
                  type="email"
                  id="email-address"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Write Message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mb-0">
                <div className="ratting d-flex mb-25">
                  <b>Add Reviews</b>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <button type="submit" className="theme-btn">
                  Send Reviews <i className="fas fa-angle-double-right"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReviewForm;
