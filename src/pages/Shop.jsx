import React from 'react';
import Banner from '../utils/Banner';
import ShopArea from '../components/shop/ShopArea'
const ShopPage = () => {
  return (
    <div>
      <Banner bannerType="shopBanner" />
      <ShopArea />
    </div>
  );
};

export default ShopPage;
