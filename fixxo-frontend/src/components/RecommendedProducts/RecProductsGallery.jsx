import React from 'react'
import office from './img/office.jpg'
import party from './img/party.jpg'
import './RecProducts.css'

const RecProductsGallery = () => {
   return (
      <>
         <div class="container mb-3">
            <div class="row">
               <div class="col-md-4 position-relative">
                  <img className='w-100' src={office} alt="" />
                  <div className='style-content-1'>
                     <h2 className='fw-bold '> <span>Office</span> <span>Style</span> </h2>
                     <button className='shop-btn text-decoration-underline fw-bold'>SHOP NOW</button>
                  </div>
               </div>
               <div class="col-md-4 offer text-center">
                  <h3 className='col mt-5 fw-bolder h3-responsive-text'>50% Offer</h3>
                  <p className='col mx-4 my-3 p-responsive-text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem, totam rem apriam eaque ipsa quae ab illo inventore</p>
                  <button className='py-2 px-4'>FLASH SALE</button>
               </div>
               <div class="col-md-4 position-relative">
                  <img className='w-100' src={party} alt="" />
                  <div className='style-content-2'>
                     <h2 className='fw-bold '> <span>Party</span> <span>Style</span> </h2>
                     <button className='shop-btn text-decoration-underline fw-bold'>SHOP NOW</button>
                  </div>
               </div>
            </div>
         </div>

      </>
   )
}

export default RecProductsGallery