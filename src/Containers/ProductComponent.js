import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'


import { makeStyles } from '@material-ui/core/styles'


import {
    Card,
    Button,
    CardMedia,
    Typography,
    CardActions,
    CardContent,
    CardActionArea,
} from '@material-ui/core'


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    
  },
  media: {
    height: 140,
  },
  
})

const ProductComponent = () => {
        const classes = useStyles()
        const products = useSelector( state => state.productReducer.products)
        
        const renderList = products.map((product) => {
            const {id, title, category, price, image, description} = product
            return (
                <Card className={classes.root} key={id}>
                    <Link to={`/product/${id}`} >
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={image}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Link>
                </Card>
            )
        })

    return (
        <>
            {renderList}
        </>
    )
}



export default ProductComponent