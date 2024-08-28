import React from 'react';
import MenuItem from './MenuItem';
import popularMenuData from '../data/popularMenuData.json';

const PopularMenu = () => {
  const { section, menuItems } = popularMenuData;

  return (
    <section className="popular-area pt-110 rpt-85 pb-130 rpb-100 rel z-1 backval">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="popular-menu-content rmb-55"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <div className="section-title mb-25">
                <span className="sub-title mb-5">{section.title}</span>
                <h2>{section.heading}</h2>
              </div>
              <img src={section.image} alt="Food Menu" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="food-menu-five"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
