import React from 'react';
import Slider from 'react-slick';
import ClientItem from './ClientItem';
import clientsData from '../data/clientsData.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="client-area bg-light rel z-1">
      <div className="container">
        <div className="client-wrap-two py-80">
          <Slider {...settings}>
            {clientsData.map((client, index) => (
              <ClientItem
                key={index}
                link={client.link}
                image={client.image}
                alt={client.alt}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Clients;
