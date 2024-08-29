import React from 'react'
import Newsletter from '../components/Newsletter'
import Headline from '../components/Headline'
import Clients from '../components/Clients'
import Blog from '../components/Blog'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import Features from '../components/Features'
import WhyChooseUs from '../components/WhyChooseUs'
import Divider from '../utils/Divider'
import Divider2 from '../utils/Divider2'
import PopularMenu from '../components/PopularMenu'
import CategoryBanner from '../components/CategoryBanner'
import ProductGallery from '../components/ProductGallery'
import AboutUs from '../components/AboutUs'
import FoodCategory from '../components/FoodCategory'
import Hero from '../components/Hero'
const HomeBackup = () => {
  return (
    <div>
      <Hero />
      <FoodCategory />
      <Headline />
      <AboutUs />
      <Divider />
      <ProductGallery />
      <CategoryBanner />
      <Headline />
      <PopularMenu />
      <Divider2 />
      <WhyChooseUs />
      <Features />
      <Headline />
      <Gallery />
      <Testimonials />
      <Blog />
      <Clients />
      <Headline />
      <Newsletter />
    </div>
  )
}

export default HomeBackup
