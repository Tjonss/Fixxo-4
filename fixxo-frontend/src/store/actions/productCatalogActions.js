import actiontypes from '../actiontypes'

import axios from 'axios'

export const getProductCatalog = () => {
    return async dispatch => {
        dispatch({
            type: actiontypes().productCatalog.getProductCatalog
        })
        try {
            const res = await axios.get('https://localhost:7090/api/products')
            console.log(res.data)
            if(res.status === 200) {
                dispatch(getProductCatalogSuccess(res.data))
            } else {
                throw new Error('could not get the data')
            }
        } catch (err) {
            dispatch(getProductCatalogFailure(err.message))
        }
    }
}


const getProductCatalogSuccess = (products) => {
    return {
        type: actiontypes().productCatalog.getProductCatalogSuccess,
        payload: products
    }
}


const getProductCatalogFailure = (err) => {
    return {
        type: actiontypes().productCatalog.getProductCatalogFailure,
        payload: err
    }
}