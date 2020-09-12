import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import ListTable from './ListTable';
import Box from './Box';

class Dashboard extends React.Component{
  boxes = [
    {'title': 'Revenue', 'subtitle': 'Rm 3000'},
    {'title': 'Users', 'subtitle': 'Rm 2000'},
    {'title': 'Restaurants', 'subtitle': '15'},
    {'title': 'Riders', 'subtitle': '120'}
  ]

  constructor(props){
    super(props);
    this.state = {restaurants: []}
  }

  componentDidMount(){
    const url = 'http://restaurant-api-module-2.herokuapp.com/api/restaurants'
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    fetch(proxyUrl + url).then(response => response.json()).then(data => {
      console.log(data)
      this.setState({
        restaurants:data["data"]
      });
    });
  }

  render(){
    return (
    <div>
      <Grid container spacing={3}>
      {
      this.boxes.map((val, index) => {
        return <Box key={index} val={val}/>
          })}
      </Grid>

      <Paper>
          <Typography component="h2" variant="h6" color="primary" gutterBottom align='center'>
          List Of Restaurant
          </Typography>
          <ListTable restaurants={this.state.restaurants}/>
      </Paper>
    </div>
    );
  }
}

export default Dashboard;
