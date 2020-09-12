import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EuroIcon from '@material-ui/icons/Euro';
import StoreIcon from '@material-ui/icons/Store';
import PeopleIcon from '@material-ui/icons/People';
import Motorcycle from '@material-ui/icons/Motorcycle';
import { Paper } from '@material-ui/core';
import './style.css';

function Box(props){
    return <Grid item xs ={3}> 
        <Paper className="box">

            {props.val.title === 'Revenue' ? <EuroIcon className="logo"/> : <span/>}
            {props.val.title === 'Users' ? <PeopleIcon className="logo"/> : <span/>}
            {props.val.title === 'Restaurants' ? <StoreIcon className="logo"/> : <span/>}
            {props.val.title === 'Riders' ? <Motorcycle className="logo"/> : <span/>}
            <Typography component="h2" variant="h6" color="primary" gutterBottom align='center'>
                {props.val.title}
            </Typography>

            <Typography component="p" variant="h4" align='center'>
                {props.val.subtitle}
            </Typography>
        </Paper>
    </Grid>
}

export default Box;
