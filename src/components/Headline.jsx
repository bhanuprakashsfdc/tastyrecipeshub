import React from 'react';
import headingShape1 from '/assets/images/shapes/heading1.png';
import headingShape2 from '/assets/images/shapes/heading2.png';
import headlineData from '../data/headlineData.json'; // Import the JSON data

const MarqueeItem = ({ text, icon }) => (
  <>
    <span className="marquee-item">{text}</span>
    {icon && <span className="marquee-item"><i className={icon}></i></span>}
  </>
);

const Headline = () => {
  const renderMarqueeItems = () => {
    return headlineData.map((item, index) => (
      <MarqueeItem key={index} text={item.text} icon={item.icon} />
    ));
  };

  return (
    <div className="headline-area bgc-dark-green pt-120 rpt-60 rel z-2">
      <span className="marquee-wrap white-text">
        <span className="marquee-inner left">{renderMarqueeItems()}</span>
        <span className="marquee-inner left">{renderMarqueeItems()}</span>
        <span className="marquee-inner left">{renderMarqueeItems()}</span>
      </span>
      <div className="headline-shapes">
        <div className="shape one">
          <img src={headingShape1} alt="Shape" />
        </div>
        <div className="shape two">
          <img src={headingShape2} alt="Shape" />
        </div>
      </div>
    </div>
  );
};

export default Headline;
