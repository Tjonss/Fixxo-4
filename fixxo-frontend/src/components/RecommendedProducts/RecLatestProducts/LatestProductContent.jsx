import React from 'react'
import latest_1 from '../img/latest_1.jpg'

const LatestProductContent = () => {
   return (
      <>
         <div className="d-flex align-items-center justify-content-center">
            <img className='img-fluid pe-3 w-25' src={latest_1} alt="" />
            <div>
               <small className=''>Category</small>
               <p className='mb-0'>Modern Black <br /> Blouse</p>
               <div className='ratings-stars'>
                  <i className='fa-sharp fa-solid fa-star me-1'></i>
                  <i className='fa-sharp fa-solid fa-star me-1'></i>
                  <i className='fa-sharp fa-solid fa-star me-1'></i>
                  <i className='fa-sharp fa-solid fa-star me-1'></i>
                  <i className='fa-sharp fa-solid fa-star me-1'></i>
               </div>
               <span className=''>$35.00</span>
            </div>
         </div>
      </>
   )
}

export default LatestProductContent