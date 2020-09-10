import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

function Box(props){
    return <Grid item xs ={3}> 
        <Paper>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                <p>{props.val.title}</p>
            </Typography>

            <Typography component="p" variant="h4">
            <p>{props.val.subtitle}</p>
            </Typography>
        </Paper>
    </Grid>
}

export default Box;
