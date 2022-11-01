import React from 'react'
import RecProductsGallery from './RecProductsGallery'
import './RecProducts.css'
import LatestProduct from './RecLatestProducts/LatestProduct'

const RecProducts = () => {
   return (
      <>
        <RecProductsGallery />
        <LatestProduct />
      </>
   )
}

export default RecProducts