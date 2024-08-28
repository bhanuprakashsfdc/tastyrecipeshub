import React from 'react';

const TestimonialItem = ({ text, author, designation }) => {
  return (
    <div className="testimonial-five-item">
      <div className="text">{text}</div>
      <span className="author">{author}</span>
      <span className="designation">{designation}</span>
    </div>
  );
};

export default TestimonialItem;
