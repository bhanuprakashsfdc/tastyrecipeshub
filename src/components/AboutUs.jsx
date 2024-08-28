import React from 'react';
import Banner from '../utils/Banner';

const AboutUsPage = () => {
  return (
    <div>
      <Banner bannerType="aboutUsBanner" />
      <section className="about-us-area pt-100 rpt-80 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="about-image-five mb-30 rmb-55" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">
                <img src="assets/images/about/about-five.jpg" alt="About" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-us-content" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="50">
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">learn About wellfood</span>
                  <h2>Amazing & Quality Food For Your Good Health</h2>
                </div>
                <p>Welcome to our restaurant, where culinary excellence meets warm hospitality in every dish we serve. Nestled in the heart of City Name, our eatery invites you on a journey.</p>
                <div className="about-btn-author pt-5 mb-45">
                  <a href="about.html" className="theme-btn style-two">learn more about us <i className="far fa-arrow-alt-right"></i></a>
                  <a href="menu.html" className="read-more">Explore popular menu <i className="far fa-arrow-alt-right"></i></a>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-high-quality"></i>
                      </div>
                      <h5><a href="menu-burger.html">Best Quality Food</a></h5>
                      <p>Our talented chefs craft each dish with precision, sourcing the best ingredients.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-chef"></i>
                      </div>
                      <h5><a href="menu-burger.html">Experience our Chefs</a></h5>
                      <p>Our talented chefs craft each dish with precision, sourcing the best ingredients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
