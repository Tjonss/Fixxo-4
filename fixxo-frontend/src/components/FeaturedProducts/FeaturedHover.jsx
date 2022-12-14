import React from 'react'

const FeaturedHover = () => {
  return (
    <>
    <div className='d-none d-xl-block'>
      <div className='Featured-hover Quick-view'>
        <small>Quick view</small>
        <div className='Quick-view-topleft'></div>
        <div className='Quick-view-bottomright'></div>
      </div>
      <div className='Quick-view-icons'>
        <div className='Rounded'>
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className='Rounded'>
          <i className="fa-solid fa-code-compare"></i>
        </div>
        <div className='Rounded'>
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
      </div>
    </div>
    </>
  )
}

export default FeaturedHover