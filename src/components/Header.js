import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

function Header(){
    return <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">
            Dashboard
          </Typography>

          <Link className="loginIcon" to='/login'>Login</Link>
          <Link to='/addform' className='addIcon'>Add Restaurant</Link>
        </Toolbar>
      </AppBar>
}

export default Header