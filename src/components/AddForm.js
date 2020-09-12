import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './style.css';

class AddForm extends React.Component{
    constructor(){
        super();
        this.state = {name:'', address:'', opening_time:'', email: '', phone:''}
        this.nameChange = this.nameChange.bind(this);
        this.addressChange = this.addressChange.bind(this);
        this.opening_timeChange = this.opening_timeChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    nameChange(event){
        this.setState({
            name: event.target.value
        });
    }

    addressChange(event){
        this.setState({
            address: event.target.value
        })
    }

    opening_timeChange(event){
        this.setState({
            opening_time: event.target.value
        })
    }

    emailChange(event){
        this.setState({
            email: event.target.value
        })
    }

    phoneChange(event){
        this.setState({
            phone: event.target.value
        })
    }

    handleClick(){
        fetch('https://cors-anywhere.herokuapp.com/http://restaurant-api-module-2.herokuapp.com/api/restaurants', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjViOGNhZmU3YzQ4NjAwMTc3ZjczZDQiLCJ1c2VybmFtZSI6ImFpbWFuIiwicGFzc3dvcmQiOiIkMmEkMDUkbGdBdEpJTzlIU0t6NTMubnFVTlNTLk9Jc21nWGplRzBleHlRQmVIald2aWFvUjhvNEg0UVMiLCJfX3YiOjAsImlhdCI6MTU5OTgzNTMxOSwiZXhwIjoxNTk5ODQ1Mzk5fQ.ZYeqv0wm_9d2N8Kx6c4Si39McXzQOrXX_zcm6s_GaqY'
            },
            body: JSON.stringify({name:this.state.name, email:this.state.email, 
            address:this.state.address, phone:this.state.phone, opening_time:
            this.state.opening_time})
            })
            .then(response => response.json())
            .then(data => {
            console.log(data)
        })
     }

    render(){
        return(
            <main>
                <h1 className='formTitle'>Add New Restaurant Form</h1>
                <form className="restaurantForm">
                    <Grid xs={12}>
                        <TextField id="standard-basic" label="Restaurant Name" val={this.state.name} onChange={this.nameChange}/>
                    </Grid>
                    
                    <Grid xs={12}>
                    <TextField id="standard-basic" label="Restaurant Address" val={this.state.address} onChange={this.addressChange}/>
                    </Grid>

                    <Grid xs={12}>
                    <TextField id="standard-basic" label="Email" val={this.state.email} onChange={this.emailChange}/>
                    </Grid>
                    
                    <Grid xs={12}>
                    <TextField id="standard-basic" label="Phone" val={this.state.phone} onChange={this.phoneChange}/>
                    </Grid>

                    <Grid xs={12}>
                    <TextField id="standard-basic" label="Opening Time" val={this.state.opening_time} onChange={this.opening_timeChange}/>
                    </Grid>

                    <Button variant="outlined" color="primary" onClick={this.handleClick}>Add Restaurant</Button>
                </form>
            </main>
        );
    }
}

export default AddForm;