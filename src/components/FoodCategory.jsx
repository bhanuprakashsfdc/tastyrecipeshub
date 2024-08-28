import React from 'react';
import Slider from 'react-slick';
import CategoryItem from './CategoryItem';
import foodCategoryData from '../data/foodCategoryData.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FoodCategory = () => {
  const { sectionTitle, categories } = foodCategoryData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of items to show in one slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows for navigation
  };

  return (
    <section className="category-area rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div
              className="section-title text-center mb-50"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <span className="sub-title mb-5">{sectionTitle.subTitle}</span>
              <h2>{sectionTitle.title}</h2>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              icon={category.icon}
              title={category.title}
              items={category.items}
              link={category.link}
              delay={category.delay}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FoodCategory;
