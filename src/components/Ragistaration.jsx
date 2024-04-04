import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Ragistaration = () => {
  return (
    <div  style={{
        marginTop:"80px"
    }
            
        }>
        <Typography variant='h3'> Ragistaration</Typography><br></br><br></br>
     <TextField label="enter first name" variant='outlined'/><br></br><br></br>
     <TextField label="enter last name" variant='outlined'/><br></br><br></br>
     <TextField label="email id" variant='outlined'/><br></br><br></br>
     <TextField label="enter password" type='password' variant='outlined'/><br></br><br></br>
     <TextField label="enter address" variant='outlined'/><br></br>
    <Button variant='contained' color='success'> ragister </Button>
    </div>
  )
}

export default Ragistaration