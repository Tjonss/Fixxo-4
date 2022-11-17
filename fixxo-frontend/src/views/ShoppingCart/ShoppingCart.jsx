// import { useDispatch, useSelector } from 'react-redux'
// import CartProduct from './CartProduct'
// import { clearCart } from '../../store/actions/cartActions'

const ShoppingCart = () => {

  // const { cart, totalAmount } = useSelector(state => state.cartReducer)
  // const dispatch = useDispatch()


  return (
    <div className='container m-5'>

      
          <div className='p-2 text-center text-danger h4 mt-5'>
            Your cart is empty
          </div>
     
{/* 
        { cart.map(item => (
          <CartProduct key={item._id} item={item} />
        )) } */}

        <div className="container"></div>
        <div className="d-flex justify-content-center align-items-center p-2">
            <div className='mt-5'>
                <div>Total Price:</div>
                <small className='text-muted'>ink. vat</small>
            </div>
        </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-warning' >Clear Cart</button>
                <button className='btn btn-info ms-2'>Checkout</button>
            </div>
    </div>
  )
}

export default ShoppingCart