import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Newsletter = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1500, offset: 50 });
  }, []);

  return (
    <section className="newsletter-area bgc-dark-green pt-75 rel z-1">
      <div className="container">
        <div className="newsletter-wrap">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div
                className="section-title text-white rmb-25"
                data-aos="fade-left"
              >
                <span className="sub-title mb-5">Join our newsletter</span>
                <h2>Subscribe to our newsletter to get more updates</h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div
                className="newsletter-form-wrap"
                data-aos="fade-right"
              >
                <h6>Hurry up to join us to get more offers.</h6>
                <form className="newsletter-form style-two mt-15" action="#">
                  <label htmlFor="news-email">
                    <i className="fas fa-envelope"></i>
                  </label>
                  <input
                    id="news-email"
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                  <button className="theme-btn style-two" type="submit">
                    Subscribe <i className="far fa-arrow-alt-right"></i>
                  </button>
                </form>
                <div className="check-field mt-15">
                  <input id="update-news" type="checkbox" />
                  <label htmlFor="update-news">
                    Get 15 days update news & latest offers
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
