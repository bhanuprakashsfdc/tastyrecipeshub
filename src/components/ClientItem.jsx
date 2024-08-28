import React from 'react';

const ClientItem = ({ link, image, alt }) => {
  return (
    <a href={link} className="client-item">
      <img src={image} alt={alt} />
    </a>
  );
};

export default ClientItem;
