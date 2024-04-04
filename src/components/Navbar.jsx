import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h3'> my app</Typography>&nbsp;&nbsp;
                <Button variant='contained' color='success'><Link to={'/'}style={{textDecoration:"none",color:"white"}}>log In</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='error'><Link to={'/signup'}style={{textDecoration:"none",color:"white"}}>Sign UP</Link></Button>&nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar