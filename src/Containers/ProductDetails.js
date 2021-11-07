import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { selectedProducts } from '../redux/Actions/productAction'


const ProductDetails = () => {
    const product = useSelector((state) => state.product)
    const {productId} = useParams()
    const dispatch = useDispatch()
    console.log(productId)

    const fetchProductDetails = async() => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
                .catch( err => {
                    console.log("Error: ", err) 
                })
            dispatch(selectedProducts(response.data))
    }

        useEffect(() => {
            if( productId && productId != ''){
                fetchProductDetails()
            }
        }, [productId])
        
    return (
        <div>
            <h1>Product Details</h1>
        </div>
    )
}

export default ProductDetails