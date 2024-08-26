import React from 'react';

const TestimonialAuthors = ({ authors }) => {
  return (
    <div className="testimonials-five-authors mb-20" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
      {authors.map((author, index) => (
        <div key={index} className="testimonial-five-author-item">
          <img src={author.image} alt={author.alt} />
        </div>
      ))}
    </div>
  );
};

export default TestimonialAuthors;
