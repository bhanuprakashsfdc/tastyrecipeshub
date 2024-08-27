import React from 'react';
import GalleryItem from './GalleryItem';
import galleryData from '../data/galleryData.json';

const Gallery = () => {
  return (
    <div className="gallery-area bgc-dark-green py-100 rpy-70">
      <div className="container">
        <div className="row">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className={`col-lg-${index % 3 === 0 ? '5' : index % 3 === 1 ? '4' : '3'} col-md-${
                index % 3 === 0 ? '7' : '5'
              }`}
            >
              <GalleryItem image={item.image} alt={item.alt} delay={item.delay} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
