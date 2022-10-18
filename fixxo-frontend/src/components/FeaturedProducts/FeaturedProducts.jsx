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

      <div className="Featured-gallery">
        <FeaturedGallery />
      </div>

      

      <h3 className='text-center mb-4'>Featured Products</h3>
      <div className='container Featured-width text-center'>
        <div className="row">
          <SingleFeaturedProduct />       
          <SingleFeaturedProduct />       
          <SingleFeaturedProduct />       
          <SingleFeaturedProduct />       
          <SingleFeaturedProduct />       
          <SingleFeaturedProduct />       

        </div>
      </div>

    </>
  )
}

export default FeaturedProducts