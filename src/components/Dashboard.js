import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import ListTable from './ListTable';
import Header from './Header';
import Box from './Box';

function Dashboard(props){
    const boxes = [
        {'title': 'Revenue', 'subtitle': 'Rm 3000'},
        {'title': 'Users', 'subtitle': 'Rm 2000'},
        {'title': 'Restaurants', 'subtitle': '15'},
        {'title': 'Riders', 'subtitle': '120'}
      ]

    const restaurants = [
        {'name': "Uncle's Bob",  'orders': 90, 'revenues': 'Rm10000'},
        {'name': 'McDonalds', 'orders': 100, 'revenues': 'Rm20000'},
        {'name': 'Pizza Hut', 'orders': 100, 'revenues': 'Rm19500'},
        {'name': 'Murni', 'orders': 80, 'revenues': 'Rm15000'}
      ];

    return <div>
    <Header/>

    <Grid container spacing={3}>
    {
    boxes.map((val,index) => {
      return <Box val={val}/>
        })}
    </Grid>

    <Paper>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Orders
        </Typography>
        <ListTable restaurants={restaurants}/>
    </Paper>
    </div>
}

export default Dashboard;
