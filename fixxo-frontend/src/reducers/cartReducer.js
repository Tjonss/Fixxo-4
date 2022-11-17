import actiontypes from './actiontypes'


export const cartReducer = (state, action) => {

  switch(action.type) {
    case actiontypes().cart.increment:
      return {...state, cart: state.cart + 1}
    case actiontypes().cart.decrement:
      return {...state, cart: state.cart - 1} 
    default: 
    return state
  }
}