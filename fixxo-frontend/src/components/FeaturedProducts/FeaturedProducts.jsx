import Carousel from './Carousel'
import FeaturedGallery from './FeaturedGallery'
import './FeaturedProducts.css'
import SingleFeaturedProduct from './SingleFeaturedProduct'


const FeaturedProducts = () => {


  return (
    <>
      <div className='d-md-none mb-4'>
        <Carousel />
      </div>
      <div className='container-xxl'>
        <FeaturedGallery />
        <h3 className='text-center mb-4'>Featured Products</h3>
        <div className='container text-center row mx-auto'>
          <div className="row mx-auto">
            <SingleFeaturedProduct />       
            <SingleFeaturedProduct />       
            <SingleFeaturedProduct />       
            <SingleFeaturedProduct />       
            <SingleFeaturedProduct />       
            <SingleFeaturedProduct />       
            <SingleFeaturedProduct />       
          </div>
        </div>
      </div> 
    </>
  )
}

export default FeaturedProducts