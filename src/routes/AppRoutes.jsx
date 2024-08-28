import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Shop from '../pages/Shop';
import Product from '../pages/Product';
import AboutUsPage from '../components/AboutUs';
import BlogsPage from '../pages/BlogsPage';
import BlogDetails from '../pages/BlogDetails';


const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/shop.html" element={<Shop />} />
            <Route path="/product.html" element={<Product />} />
            <Route path="/blogs.html" element={<BlogsPage />} />
            <Route path="/blog-details.html" element={<BlogDetails />} />
            <Route path="/about-us.html" element={<AboutUsPage />} />
            <Route path="*" element={<Error />} />
            </Route>
       </Routes>
    );
};
export default AppRoutes;