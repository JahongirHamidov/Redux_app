import {actionTypes} from '../Constants/action-types'
const {
    SET_PRODUCTS,
    // SELECTED_PRODUCT,
    //REMOVE_SELECTED_PRODUCT
} = actionTypes

const initialState = {
    products: [
        {
            id:1,
            title: "Jahongir",
            category: "programmer"
        }
    ]
}
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_PRODUCTS:
            return state
            
  //      case SELECTED_PRODUCT:

            
//        case REMOVE_SELECTED_PRODUCT:

    
        default:
            return state;
    }
}