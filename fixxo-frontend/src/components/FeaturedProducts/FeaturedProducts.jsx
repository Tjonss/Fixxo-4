import Carousel from './Carousel'
import FeaturedGallery from './FeaturedGallery'
import './FeaturedProducts.css'
import SingleFeaturedProduct from './SingleFeaturedProduct'
import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'


const FeaturedProducts = () => {

  const { products, getProducts } = useContext(ProductsContext)
  

  useEffect(() => {
    getProducts()
    console.log(products)

  }, [])
  
  return (
    <>
      <div className='d-md-none mb-4'>
        <Carousel />
      </div>
      <div className='container-xxl'>
        <FeaturedGallery />
        <h3 className='text-center mb-4'>Featured Products</h3>
        <div className='container text-center row mx-auto mb-5'>
          <div className="row">
            { products && products.map(product => <SingleFeaturedProduct product={product} key={product.name}/>)}      
          </div>
        </div>
      </div> 
    </>
  )
}

export default FeaturedProducts