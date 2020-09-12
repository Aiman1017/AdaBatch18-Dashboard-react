import React from 'react';
import { TextField, Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import './style.css';

class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: '', password:''}
        this.usernameChange = this.usernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    usernameChange(event){
        this.setState({
            username: event.target.value
        });
    }

    passwordChange(event){
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit(){
        fetch('https://cors-anywhere.herokuapp.com/http://restaurant-api-module-2.herokuapp.com/api/restaurants', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + localStorage.setItem('user', '123')
            },
            body: JSON.stringify({name:this.state.name, email:this.state.email, 
            address:this.state.address, phone:this.state.phone, opening_time:
            this.state.opening_time})
            })
            .then(response => response.json())
            .then(data => {
            console.log(data);
        });
     }

    render(){
        return(
            <main className='form'>
                 <Grid xs={12}>
                    <TextField id="standard-basic" label="Name" val={this.state.name} onChange={this.usernameChange} autoFocus required/>
                </Grid>
                    
                <Grid xs={12}>
                    <TextField id="standard-basic" label="Password" type='password' val={this.state.address} onChange={this.passwordChange}/>
                </Grid>

                <Button onClick={this.handleSubmit} className='loginButton'>Log In</Button>
            </main>
        )
    }
}

export default LogIn;