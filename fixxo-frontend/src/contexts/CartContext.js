import { createContext, useReducer } from 'react';
import actiontypes from '../reducers/actiontypes';
import { cartReducer } from '../reducers/cartReducer';

const CartContext = createContext();


export const CartContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, { cart: 0 })

  const increment = () => {
    dispatch({type: actiontypes().cart.increment})
    console.log(state)
  }

  const decrement = () => {
    dispatch({ type: actiontypes().cart.decrement })
    console.log(state)
  }

  return (
    <CartContext.Provider value={{ dispatch, state, increment, decrement }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContext