import Carousel from './Carousel'
import './FeaturedProducts.css'
import SingleFeaturedProduct from './SingleFeaturedProduct'


const FeaturedProducts = () => {


  return (
    <>
      <div className='d-md-none mb-4'>
        <Carousel />
      </div>
      <h3 className='text-center mb-4'>Featured Products</h3>
      <div className='container text-center'>

        <SingleFeaturedProduct />

        <div className='row'>
          <div className="col">
            <img className='d-block w-100' src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"  />
          </div>
          <div className="col">
            <img className='d-block w-100'src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          </div>
        </div>
      </div>

    </>
  )
}

export default FeaturedProducts