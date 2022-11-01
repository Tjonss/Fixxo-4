import React from 'react'
import LatestProductContent from './LatestProductContent'

const LatestProduct = () => {
   return (
      <>
         <div className="container">

            <div className="row">
               <div className="col-md-6 col-lg-4 row g-3">
                  <h3 className="fs-5 fw-bold text-center">Latest Product</h3>
                  <LatestProductContent />
                  <LatestProductContent />
                  <LatestProductContent />
               </div>

               <div className="col-md-6 col-lg-4 row g-3">
                  <h3 className="fs-5 fw-bold text-center">Best Selling Product</h3>
                  <LatestProductContent />
                  <LatestProductContent />
                  <LatestProductContent />
               </div>

               <div className="col-md-6 col-lg-4 row g-3">
                  <h3 className="fs-5 fw-bold text-center">Top Reacted Product</h3>
                  <LatestProductContent />
                  <LatestProductContent />
                  <LatestProductContent />
               </div>
            </div>

         <hr className='mt-5'/>
         </div>
      </>
   )
}

export default LatestProduct