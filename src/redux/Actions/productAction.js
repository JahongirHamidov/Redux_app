import actionTypes from '../Constants/action-types'
const {    
    SET_PRODUCTS,
    SELECTED_PRODUCT,
    REMOVE_SELECTED_PRODUCT
} = actionTypes

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (products) => {
    return { 
        type: SELECTED_PRODUCT,
        payload: products
    }
}

export const removeSelectedProducts = () => {
    return {
        type: REMOVE_SELECTED_PRODUCT
    }
}
 

