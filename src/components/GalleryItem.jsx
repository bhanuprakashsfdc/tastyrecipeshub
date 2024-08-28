import React from 'react';

const GalleryItem = ({ image, alt, delay }) => {
  return (
    <div
      className="gallery-item-four"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="1500"
      data-aos-offset="50"
    >
      <img src={image} alt={alt} />
    </div>
  );
};

export default GalleryItem;
