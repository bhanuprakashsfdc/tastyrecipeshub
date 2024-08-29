import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTopButton from '../utils/scrollToTop';
import MiniFooter from './MiniFooter';
import FooterNav from './FooterNav';
import FooterWidget from './FooterWidget';
import footerData from '../data/footerData.json';

const Footer = () => {
  const { location, contact, openingHours, socialMedia } = footerData;

  const menuItems = [
    { text: 'Hamburger', url: 'product-details.html' },
    { text: 'Pizza', url: '#' },
    { text: 'Vegetable roll', url: 'product-details.html' },
    { text: 'Sea fish', url: 'product-details.html' },
    { text: 'Fried chicken', url: 'product-details.html' },
    { text: 'Burger', url: '#' },
    { text: 'Salad', url: '#' },
  ];

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
            {/* Location */}
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="0"
            >
              <FooterWidget title={location.title}>
                <p>{location.address}</p>
              </FooterWidget>
            </div>

            {/* Contact */}
            <div
              className="col-xl-2 col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-offset="0"
            >
              <FooterWidget title={contact.title}>
                <ul>
                  <li>
                    <a href={`mailto:${contact.email}`}>
                      <p>{contact.email}</p>
                    </a>
                  </li>
                  <li>
                    <a href={`callto:${contact.phone}`}>
                      <p>{contact.phone}</p>
                    </a>
                  </li>
                </ul>
              </FooterWidget>
            </div>

            {/* Opening Hours */}
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1500"
              data-aos-offset="0"
            >
              <FooterWidget title={openingHours.title}>
                <ul>
                  {openingHours.hours.map((hour, index) => (
                    <li className="foli" key={index}>
                      {hour.day}: <span>{hour.time}</span>
                    </li>
                  ))}
                </ul>
              </FooterWidget>
            </div>

            {/* Social Media */}
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="1500"
              data-aos-offset="0"
            >
              <FooterWidget title={socialMedia.title}>
                <div className="social-style-one mt-5">
                  {socialMedia.links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                      <i className={`fab fa-${link.platform}`}></i>
                    </a>
                  ))}
                </div>
              </FooterWidget>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-30 pb-15">
        <div className="container rel text-center">
          <FooterNav items={menuItems} />
          <ScrollToTopButton />
        </div>
        <hr className="mt-25 mb-30" />
        <MiniFooter />
      </div>
    </footer>
  );
};

export default Footer;
