import React from 'react';

const TestimonialShapes = ({ shapes }) => {
  return (
    <div className="testimonials-five-shapes">
      <div className="shape left" data-aos="fade-left" data-aos-delay="150" data-aos-duration="1500" data-aos-offset="50">
        <img src={shapes.leftShape} alt="Left" />
      </div>
      <div className="shape right" data-aos="fade-right" data-aos-delay="150" data-aos-duration="1500" data-aos-offset="50">
        <img src={shapes.rightShape} alt="Right" />
      </div>
      <div className="testimonials-shapes">
        <div className="shape one">
          <img src={shapes.shape1} alt="Shape" />
        </div>
        <div className="shape three">
          <img src={shapes.shape2} alt="Shape" />
        </div>
        <div className="shape four">
          <img src={shapes.shape3} alt="Shape" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialShapes;
