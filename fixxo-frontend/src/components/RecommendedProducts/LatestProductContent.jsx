import React from 'react'
// import latest_1 from './img/latest_1'
import { Link } from 'react-router-dom'



const LatestProductContent = (props) => {

   return (
      <>
         <Link to={`/products/${props.id}`} className="links">
         <div className="d-flex align-items-center justify-content-center">
            <img className='img-fluid pe-3 w-25' src={props.image} alt="" />
            <div>
               <small className=''>{props.category}</small>
               <p className='mb-0 text-name'>{props.name}</p>
               <div className='ratings-stars'>
                  <i className='fa-sharp fa-solid fa-star me-1'></i>
                  <i className='fa-sharp fa-solid fa-star me-1'></i>
                  <i className='fa-sharp fa-solid fa-star me-1'></i>
                  <i className='fa-sharp fa-solid fa-star me-1'></i>
                  <i className='fa-sharp fa-solid fa-star me-1'></i>
               </div>
               <span className=''>{props.price}:-</span>
            </div>
         </div>
         </Link>
      </>
   )
}

export default LatestProductContent