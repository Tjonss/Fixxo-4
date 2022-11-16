import { useState } from 'react'
import FeaturedHover from './FeaturedHover'
import FeaturedProductsContent from './FeaturedProductsContent'
import { Link } from 'react-router-dom'

const SingleFeaturedProduct = ({ product }) => {

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }
  const handleMouseOut = () => {
    setIsHovering(false)
  }

  const varformastejagkollaomdetfinnsenprodukt = () => {
    // varför måste jag kolla om det finns en produkt för att klicka på navbarlänken till produkten?
  }
  return (
    <>
    {product && (   
      <div className='col-6 col-md-4'>
        <Link to={`/products/${product.id}`} className="position-relative" 
              onMouseOver={handleMouseOver} 
              onMouseOut={handleMouseOut}>
          <img className='d-block w-100' src={product.imageURL}  />
        </Link>
        <FeaturedProductsContent product={product}/>
      </div>
       )}
    </>
  )
}

export default SingleFeaturedProduct