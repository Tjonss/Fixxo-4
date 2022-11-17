import React from 'react'
import LatestProductContent from './LatestProductContent'
import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'


const LatestProduct = () => {

   const { products, getProducts } = useContext(ProductsContext)

   useEffect(() => {
      getProducts()
      // console.log(products)
   }, [])

   return (
      <>
         <div className="container">

            <div className="row">
               <div className="col-md-6 col-lg-4 row g-3">
                  <h3 className="fs-5 fw-bold text-center">Latest Product</h3>
               
                  {products.slice(0, 3).map(x => {
                     // console.log(x)
                     return <LatestProductContent key={x.id} name={x.name} category={x.categoryName} id={x.id} price={x.price} image={x.imageURL} />
                  })}

               </div>

               <div className="col-md-6 col-lg-4 row g-3">
                  <h3 className="fs-5 fw-bold text-center">Best Selling Product</h3>

                  {products.slice(6, 9).map(x => {
                     return <LatestProductContent product={x} key={x.id} name={x.name} category={x.categoryName} id={x.id} price={x.price} image={x.imageURL} />
                  })}

               </div>

               <div className="col-md-6 col-lg-4 row g-3">
                  <h3 className="fs-5 fw-bold text-center">Top Reacted Product</h3>
                  {products.slice(3, 6).map(x => {
                     return <LatestProductContent key={x.id} name={x.name} category={x.categoryName} id={x.id} price={x.price} image={x.imageURL} />
                  })}
               </div>
            </div>

            <hr className='mt-5' />
         </div>
      </>
   )
}

export default LatestProduct