import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


class Article extends Component {
    render(props) {
        const { picture, name, prix, stock, } = this.props;
        return (
            <div>
                <Card sx={{ maxWidth: 345, mr:3 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={picture}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" mt={2}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                            <Typography gutterBottom variant="subtitle2" component="h6" mt={2}>
                                Prix: {prix}$
                            </Typography>
                            <Typography gutterBottom variant="subtitle2" component="h6">
                                Stock: {stock}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button  size="small" color="primary" onClick={this.props.onChildClick}>
                            Acheter 
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Article;