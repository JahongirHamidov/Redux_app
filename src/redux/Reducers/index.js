import {combineReducers} from 'redux'
import { 
    productReducer, 
    selectedProductReducer,
    removeSelectedProductReducer

} from './productReducer'

const reducers = combineReducers({
    productReducer,
    product: selectedProductReducer,
    removeSelectedProductReducer

})

export default reducers