import React from 'react'

const FeaturedProductsContent = ({ product }) => {
  return (
    <div className='Featured-content mb-2'>
      <small className='d-block fw-lighter mt-1'>{product.categoryName}</small>
      <small className='fw-bold font-monospace'>{product.name}</small>
      <div className='Featured-ratings '>
        <i className="fa-sharp fa-solid fa-star star-size"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
      </div>
      <small className=''>{product.price}:-</small>
    </div>
  )
}

export default FeaturedProductsContent