import React from 'react';
import bannerData from '../data/bannerData.json';

const Banner = ({ bannerType }) => {
  const banner = bannerData[bannerType];

  if (!banner) {
    return null; // or render a fallback banner
  }

  return (
    <section
      className="page-banner-area overlay pt-215 rpt-150 pb-160 rpb-120 rel z-1 bgs-cover text-center"
      style={{ backgroundImage: `url(${banner.backgroundImage})` }}
    >
      <div className="container">
        <div className="banner-inner text-white">
          <h1 className="page-title" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
            {banner.title}
          </h1>
          <nav aria-label="breadcrumb">
            <ol
              className="breadcrumb justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              {banner.breadcrumb.map((item, index) => (
                <li key={index} className={`breadcrumb-item ${index === banner.breadcrumb.length - 1 ? 'active' : ''}`}>
                  {item.link === "#" ? (
                    item.name
                  ) : (
                    <a className="bannertext" href={item.link}>{item.name}</a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Banner;
