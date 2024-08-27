import React from 'react';
import FeatureItem from './FeatureItem';
import featuresData from '../data/featuresData.json';

const Features = () => {
  const { image, qualityFood, features } = featuresData;

  return (
    <section className="features-five-area bgc-dark-green">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-image-part style-four"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <img src={image} alt="Features" />
              <div
                className="quality-food"
                style={{ backgroundImage: `url(${qualityFood.backgroundImage})` }}
              >
                <span className="for-border"></span>
                <span className="text">
                  {qualityFood.text.split(' ').map((line, index) => (
                    <React.Fragment key={index}>
                      {line} <br />
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="features-five-wrap mt-70 rmt-55"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
