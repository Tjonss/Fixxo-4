import React from 'react'
import Showroom from './Showroom/Showroom'
import FeaturedInstagram from '../components/FeaturedInstagram/FeaturedInstagram'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import RecProducts from '../components/RecommendedProducts/RecProducts'
const HomeView = () => {
  return (
    <div>
      <Showroom/>
      <FeaturedProducts />
      <RecProducts />
      <FeaturedInstagram />
      
    </div>
  )
}

export default HomeView