import React from 'react';

const SearchWidget = () => {
  return (
    <div className="widget widget-search" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
      <h4 className="widget-title">Search</h4>
      <form action="#" className="default-search-form">
        <input type="text" placeholder="Search here" required />
        <button type="submit" className="searchbutton far fa-search"></button>
      </form>
    </div>
  );
};

export default SearchWidget;
