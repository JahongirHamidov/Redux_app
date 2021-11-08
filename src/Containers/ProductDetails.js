import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { selectedProducts, removeSelectedProducts } from '../redux/Actions/productAction'

import {
    Card,
    CardHeader,
    Collapse,
    Avatar,
    IconButton,
    CardMedia,
    Typography,
    CardActions,
    CardContent,
} from '@material-ui/core'

import Spinner from '../Components/Spinner/Spinner.js'


const ProductDetails = () => {
    const product = useSelector((state) => state.product)
    const {image, title, price, category, description} = product
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
            return () => {
                dispatch(removeSelectedProducts())
            }
        }, [productId])
        


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    

    return (
        <div>
            { product.length ===0 ? (
                <Spinner />
            ) : (
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            R
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                        </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        </IconButton>
                        <IconButton aria-label="share">
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>{category}</Typography>
                        <h1>{price}</h1>
                        </CardContent>
                    </Collapse>
                </Card>
                )}
        </div>
        
    )
}

export default ProductDetails







