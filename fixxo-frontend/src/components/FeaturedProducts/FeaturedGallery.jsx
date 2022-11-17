import React from 'react'
import kid from './img/kid.jpg'
import man from './img/man.jpg'
import woman from './img/woman.jpg'
import accessories from './img/accessories.jpg'
import FeaturedButton from './FeaturedButton'

const FeaturedGallery = () => {
  return (
    <>
      <div className="container-xxl d-none d-md-block mt-5 mb-5">
        <div className="row">
          <div className="col-6 position-relative">
            <div className="border-0">
              <img className='w-100 d-block img-fluid p-3' src={woman} alt='woman'/>
              <FeaturedButton title='Woman'/>
            </div>
          </div>
          <div className="col-6 ">
          <div className="d-flex">
            <div className="position-relative">
              <img className='img-fluid' src={kid} alt="kid" />
            <FeaturedButton title='Kids'/>
            </div>
            <div className="ms-3 position-relative">
              <img className='img-fluid' src={man} alt="man" />
              <FeaturedButton title='Man'/>
            </div>
            </div>
            <div className="mt-md-4 position-relative">
              <img className='img-fluid' src={accessories} alt="accessories" />
              <FeaturedButton title='Accessories'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedGallery




