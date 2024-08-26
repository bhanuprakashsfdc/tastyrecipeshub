import React from 'react'
import Newsletter from '../components/Newsletter'
import Headline from '../components/Headline'
import Clients from '../components/Clients'
import Blog from '../components/Blog'
import Testimonials from '../components/Testimonials'
const Home = () => {
  return (
    <div>
      <Testimonials />
      <Blog />
      <Clients />
      <Headline />
      <Newsletter />
    </div>
  )
}

export default Home
