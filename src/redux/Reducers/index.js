import {combineReducers} from 'redux'
import { 
    productReducer, 
    selectedProductReducer

} from './productReducer'

const reducers = combineReducers({
    productReducer,
    product: selectedProductReducer

})

export default reducers