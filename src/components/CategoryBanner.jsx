import React from 'react';
import CategoryBannerItem from './CategoryBannerItem';
import categoryBannerData from '../data/categoryBannerData.json';

const CategoryBanner = () => {
  return (
    <div className="category-banner-area-five">
      <div className="container-fluid">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          {categoryBannerData.map((item, index) => (
            <CategoryBannerItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              backgroundImage={item.backgroundImage}
              link={item.link}
              gradientClass={item.gradientClass}
              styleClass={item.styleClass}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
