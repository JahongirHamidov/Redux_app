import actionTypes from '../Constants/action-types'
const {
    SET_PRODUCTS,
    SELECTED_PRODUCT,
    REMOVE_SELECTED_PRODUCT
} = actionTypes

const initialState = {
    products: []
}
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_PRODUCTS:
            return {...state, products: payload}
        default:
            return state;
    }
}

export const selectedProductReducer = (state={}, type, payload) => {
    switch (type) {
        case SELECTED_PRODUCT:
            return { ...state, ...payload } 
        default:
            return state;
    }
}

export const removeSelectedProductReducer = ( state={}, type, payload ) => {
    switch (type) {
        case REMOVE_SELECTED_PRODUCT:
            return {...state}
        default:
            return state
    }
}