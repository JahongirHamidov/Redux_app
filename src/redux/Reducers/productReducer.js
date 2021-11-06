import actionTypes from '../Constants/action-types'
const {
    SET_PRODUCTS,
    // SELECTED_PRODUCT,
    //REMOVE_SELECTED_PRODUCT
} = actionTypes

const initialState = {
    products: []
}
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_PRODUCTS:
            return {...state, products: payload}
            
  //      case SELECTED_PRODUCT:

            
//        case REMOVE_SELECTED_PRODUCT:

    
        default:
            return state;
    }
}