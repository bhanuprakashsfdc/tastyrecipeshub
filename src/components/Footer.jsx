import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTopButton from '../utils/scrollToTop';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // You can customize global settings here
    });
  }, []);

  return (
    <footer className="main-footer footer-two bgc-dark-green pt-120 rpt-90 rel z-1">
      <div className="widget-area pb-70">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="0"
            >
              <div className="footer-widget footer-text">
                <div className="footer-title">
                  <h5>Location</h5>
                </div>
                <p>1403 Washington Ave, New Orleans, LA 70130, United States</p>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-offset="0"
            >
              <div className="footer-widget footer-contact">
                <div className="footer-title">
                  <h5>Contact Us</h5>
                </div>
                <ul>
                  <li>
                    <a href="mailto:wellfood@gmail.com"><p>wellfood@gmail.com</p></a>
                  </li>
                  <li>
                    <a href="callto:+(1)0987654321"><p>+(1) 098 765 4321</p></a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1500"
              data-aos-offset="0"
            >
              <div className="footer-widget opening-hour">
                <div className="footer-title">
                  <h5>Opening Hours</h5>
                </div>
                <ul>
                  <li>
                    Monday – Friday: <span>8am – 4pm</span>
                  </li>
                  <li>
                    Saturday: <span>8am – 12am</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="1500"
              data-aos-offset="0"
            >
              <div className="footer-widget footer-text">
                <div className="footer-title">
                  <h5>Follow Us</h5>
                </div>
                <div className="social-style-one mt-5">
                  <a href="contact.html">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="contact.html">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="contact.html">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="contact.html">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-30 pb-15">
        <div className="container rel text-center">
          <ul className="footer-bottom-nav">
            <li>
              <a href="product-details.html"><p className="minfmenu">Hamburger</p></a>
            </li>
            <li>
              <a href="#"><p className="minfmenu">Pizza</p></a>
            </li>
            <li>
              <a href="product-details.html"><p className="minfmenu">Vegetable roll</p></a>
            </li>
            <li>
              <a href="product-details.html"><p className="minfmenu">Sea fish </p> </a>
            </li>
            <li>
              <a href="product-details.html"><p className="minfmenu">Fried chicken </p> </a>
            </li>
            <li>
              <a href="#"> <p className="minfmenu">Burger</p></a>
            </li>
            <li>
              <a href="#"> <p className="minfmenu">Salad</p></a>
            </li>
          </ul>
          <ScrollToTopButton />
        </div>
        <hr className="mt-25 mb-30" />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  Copyright 2024 <a href="index.html">Wellfood</a>. All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
