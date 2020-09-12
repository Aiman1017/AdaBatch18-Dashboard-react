import './components/style.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard';
import EditRestaurant from './components/EditRestaurant';
import Header from './components/Header';
import LogIn from './components/LogIn'
import AddForm from './components/AddForm';


function App() {
  return(
    <Router className="App">
      <Header/>
      <Switch>
        <Route path='/addform'>
          <AddForm/>
        </Route>
        <Route path='/login'>
          <LogIn/>
        </Route>
        <Route path='/edit'>
          <EditRestaurant/>
        </Route>
        <Route path='/'>
          <Dashboard/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
