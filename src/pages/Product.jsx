import React from 'react'
import Banner from '../utils/Banner'
import ProductDetails from '../components/product/ProductDetails'
import ReviewForm from '../components/product/ReviewForm'
import RelatedProducts from '../components/product/RelatedProducts'
const Product = () => {
  return (
    <div>
       <Banner bannerType="singleProductBanner" />
       <ProductDetails />
       <ReviewForm />
       <RelatedProducts />
    </div>
  )
}

export default Product
