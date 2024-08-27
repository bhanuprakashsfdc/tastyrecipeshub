import React from 'react';
import heroData from '../data/heroData.json';

const Hero = () => {
  const { backgroundImage, subTitle, title, description, buttonText, buttonLink, shapes } = heroData;

  return (
    <section
      className="hero-area-five bgs-cover pt-185 rpt-145 pb-250 rel z-1"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div
          className="hero-content-four style-two py-60 rpt-0 text-center text-white"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="50"
        >
          <span className="sub-title">{subTitle}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={buttonLink} className="theme-btn mt-25">
            {buttonText} <i className="far fa-arrow-alt-right"></i>
          </a>
        </div>
      </div>
      <div className="hero-shapes">
        <div className="shape one">
          <img src={shapes.shape1} alt="Hero Shape" />
        </div>
        <div className="shape two">
          <img src={shapes.shape2} alt="Hero Shape" />
        </div>
        <div className="shape five">
          <img src={shapes.shape5} alt="Hero Shape" />
        </div>
        <div
          className="hero-left"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-offset="50"
        >
          <img src={shapes.heroLeft} alt="Hero Shape" />
        </div>
        <div
          className="hero-right"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-offset="50"
        >
          <img src={shapes.heroRight} alt="Hero Shape" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
