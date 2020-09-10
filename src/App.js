import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import MenuIcon from '@material-ui/icons/Menu';


function App() {
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
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Dashboard
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <main>
        <Grid container spacing={3}>
            {
            boxes.map((val,index) => {
              return <Grid item xs ={3}> 

                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    <p key={index}>{val.title}</p>
                </Typography>

                <Typography component="p" variant="h4">
                  <p key={index}>{val.subtitle}</p>
                </Typography>

              </Grid>
            })}
        </Grid>

        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Orders</TableCell>
                <TableCell>Sale Amounts</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
                {
                restaurants.map((val) => {
                  return <TableRow>
                  <TableCell>
                    {val.name}
                  </TableCell>
                  <TableCell>
                  {val.orders}
                  </TableCell>
                  <TableCell>
                  {val.revenues}
                  </TableCell>

                  </TableRow>
                })}
            </TableBody>
          </Table>
        </Paper>
      </main>
    </div>
  );
}

export default App;
