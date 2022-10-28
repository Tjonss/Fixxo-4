import React from 'react'

const FeaturedProductsContent = () => {
  return (
    <div className='Featured-content mb-2'>
      <small className='d-block fw-lighter mt-1'>Category</small>
      <small className='fw-bold font-monospace'>HP Pavilion</small>
      <div className='Featured-ratings '>
        <i className="fa-sharp fa-solid fa-star star-size"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
      </div>
      <small className=''>$30.00</small>
    </div>
  )
}

export default FeaturedProductsContent