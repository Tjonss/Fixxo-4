import { useState } from 'react'
import FeaturedHover from './FeaturedHover'
import FeaturedProductsContent from './FeaturedProductsContent'
import {Link} from 'react-router-dom'

const SingleFeaturedProduct = () => {

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }
  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <>
      <div className='col-6 col-md-4'>
        <Link to='/products/:id' className="position-relative" 
              onMouseOver={handleMouseOver} 
              onMouseOut={handleMouseOut}>
          <img className='d-block w-100' src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"  />
        </Link>
        <FeaturedProductsContent/>
      </div>
    </>
  )
}

export default SingleFeaturedProduct