import { useState } from 'react'
import FeaturedHover from './FeaturedHover'
import FeaturedProductsContent from './FeaturedProductsContent'

const SingleFeaturedProduct = () => {

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }
  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <div className='row'>
      <div className="col">
        <div className="position-relative" 
              onMouseOver={handleMouseOver} 
              onMouseOut={handleMouseOut}>
          <img className='d-block w-100' src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"  />

        <div className="d-md-block">
          {isHovering && ( 
            <FeaturedHover />
          )}
        </div>
          

        </div>
        <FeaturedProductsContent/>
      </div>
      <div className="col">
        <img className='d-block w-100'src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      </div>
    </div>
  )
}

export default SingleFeaturedProduct