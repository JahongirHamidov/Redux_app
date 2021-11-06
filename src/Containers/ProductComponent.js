import React from 'react'
import { useSelector } from 'react-redux'


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
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

const ProductComponent = () => {
        const products = useSelector( state => state.productReducer.products)
        const { id, title } =products[0]

        const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {title}
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
        </Card>
    )
}



export default ProductComponent