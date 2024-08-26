import React from 'react';
import TestimonialItem from './TestimonialItem';
import TestimonialAuthors from './TestimonialAuthors';
import TestimonialShapes from './TestimonialShapes';
import testimonialData from '../data/testimonialData.json';

const Testimonials = () => {
  const { sectionTitle, authors, testimonials, shapes } = testimonialData;

  return (
    <section className="testimonials-five rel z-1 bgc-lighter py-130 rpy-100">
      <div className="container rel">
        <div className="row text-center justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <div className="section-title mb-50" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
              <span className="sub-title mb-5">{sectionTitle.subTitle}</span>
              <h2>{sectionTitle.title}</h2>
            </div>
            <TestimonialAuthors authors={authors} />
            <div className="testimonials-five-content" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" data-aos-offset="50">
              {testimonials.map((testimonial, index) => (
                <TestimonialItem
                  key={index}
                  text={testimonial.text}
                  author={testimonial.author}
                  designation={testimonial.designation}
                />
              ))}
            </div>
          </div>
        </div>
        <TestimonialShapes shapes={shapes} />
      </div>
    </section>
  );
};

export default Testimonials;
