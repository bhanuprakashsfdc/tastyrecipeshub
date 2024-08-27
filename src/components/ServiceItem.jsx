import React from 'react';

const ServiceItem = ({ icon, title, description, link }) => {
  return (
    <div className="col-sm-6">
      <div className="service-item style-two">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <h5><a href={link}>{title}</a></h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
