import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

const Header = () => {
  useEffect(() => {
    const handleMouseOver = (event) => {
      const dropdown = event.currentTarget.querySelector('.dropdown-menu');
      if (dropdown) {
        dropdown.classList.add('show');
      }
    };

    const handleMouseOut = (event) => {
      const dropdown = event.currentTarget.querySelector('.dropdown-menu');
      if (dropdown) {
        dropdown.classList.remove('show');
      }
    };

    const dropdownItems = document.querySelectorAll('.dropdown');
    dropdownItems.forEach((item) => {
      item.addEventListener('mouseover', handleMouseOver);
      item.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      dropdownItems.forEach((item) => {
        item.removeEventListener('mouseover', handleMouseOver);
        item.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <header className="main-header white-menu menu-absolute">
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/images/logos/logo-white.png" alt="Logo" title="Logo" />
                </a>
              </div>
            </div>

            <div className="nav-outer ms-lg-5 ps-xxl-4 clearfix">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header py-10">
                  <div className="mobile-logo">
                    <a href="index.html">
                      <img src="assets/images/logos/logo-white.png" alt="Logo" title="Logo" />
                    </a>
                  </div>
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div className="navbar-collapse collapse clearfix">
                  <ul className="navigation clearfix">
                    <li className="dropdown">
                      <a href="#">Home</a>
                      <ul className="dropdown-menu">
                        <li><a href="index.html">Home Restaurant</a></li>
                        <li><a href="index2.html">Home Pizza</a></li>
                        <li><a href="index3.html">Home Burger</a></li>
                        <li><a href="index4.html">Home Chicken</a></li>
                        <li><a href="index5.html">Juice & Drinks</a></li>
                        <li><a href="index6.html">Home Grill</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Menu</a>
                      <ul className="dropdown-menu">
                        <li><a href="menu-restaurant.html">Menu Restaurant</a></li>
                        <li><a href="menu-pizza.html">Menu Pizza</a></li>
                        <li><a href="menu-grill.html">Menu Grill</a></li>
                        <li><a href="menu-burger.html">Menu Burger</a></li>
                        <li><a href="menu-sea-food.html">Menu Sea Food</a></li>
                        <li><a href="menu-chicken.html">Menu Chicken</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <ul className="dropdown-menu">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="history.html">Our History</a></li>
                        <li><a href="faq.html">FAQs</a></li>
                        <li className="dropdown">
                          <a href="#">Chefs</a>
                          <ul className="dropdown-menu">
                            <li><a href="chefs.html">Our Chefs</a></li>
                            <li><a href="chef-details.html">Chef Details</a></li>
                          </ul>
                        </li>
                        <li><a href="gallery.html">Gallery</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Blog</a>
                      <ul className="dropdown-menu">
                        <li><a href="blog.html">Blog Standard</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Shop</a>
                      <ul className="dropdown-menu">
                        <li><a href="shop.html">Products</a></li>
                        <li><a href="product-details.html">Product Details</a></li>
                        <li><a href="cart.html">Shopping Cart</a></li>
                        <li><a href="checkout.html">Checkout Page</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="header-number">
              <i className="far fa-phone"></i>Call : <a href="callto:+88012345688">+880 123 456 88</a>
            </div>

            <div className="nav-search py-10">
              <button className="far fa-search"></button>
              <form action="#" className="hide">
                <input type="text" placeholder="Search" className="searchbox" required />
                <button type="submit" className="searchbutton far fa-search"></button>
              </form>
            </div>

            <div className="menu-btns">
              <button>
                <i className="far fa-shopping-cart"></i> <span>2</span>
              </button>
              <a href="contact.html" className="theme-btn style-two">
                Book now <i className="far fa-arrow-alt-right"></i>
              </a>

              <div className="menu-sidebar">
                <button className="bg-transparent"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
