import React from 'react';
import whyChooseUsData from '../data/whyChooseUsData.json';

const WhyChooseUs = () => {
  const { title, heading, description, image } = whyChooseUsData;

  return (
    <section className="why-choose-five-area bgc-dark-green pt-20 rpt-50 pb-100 rpb-70 rel z-1">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div
              className="why-choose-five-content text-white rmb-55"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <div className="section-title mb-25">
                <span className="sub-title mb-5">{title}</span>
                <h2>{heading}</h2>
              </div>
              <p>{description}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="why-choose-five-image"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <img src={image} alt="Why Choose Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
