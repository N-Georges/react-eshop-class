import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';

class Panier extends Component {
    render(props) {
        const {name, prix, stock} = this.props;
        return (
            <div>
                <Box sx={{ m:4 }}>
                    {/* <Typography gutterBottom variant="h4">
                        Mon panier:
                    </Typography> */}
                <Box sx={{display: 'flex'}}>
                    <Typography sx={{color: 'info.main'}} gutterBottom variant="h5" m='4'>
                        {name} |
                    </Typography>
                    <Typography sx={{color: 'info.main'}} gutterBottom variant="h5" m='4'>
                        {prix} | 
                    </Typography>
                    <Typography sx={{color: 'info.main'}} gutterBottom variant="h5" m='4'>
                        {stock} |
                    </Typography>
                    <Button  size="small" color="error" onClick={this.props.onChildDel}>
                            Rendre 
                    </Button>
                </Box>    
                </Box>
            </div>
        );
    }
}

export default Panier;