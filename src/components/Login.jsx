import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div
        style={{
            marginTop:"80px"
        }
                
            }>

      <Typography variant="h3"> login page</Typography>
      <TextField label="enter name" variant='outlined'/><br></br><br></br>
      <TextField label="enter password" type='password' variant='outlined'/><br></br><br></br>
    
        <Button variant='contained' color='success'> login</Button><br></br><br></br>
     
       </div>

   
  )
}

export default Login