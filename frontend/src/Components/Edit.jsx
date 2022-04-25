import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useParams} from 'react-router-dom';
import axios from 'axios';

export function EditForm() {

  const {id} = useParams();
  
  const [data,setdata] = React.useState({})

  const updateState = ()=>{
      axios.patch(`http://localhost:2345/products/${id}`,data).then(function(response){
          alert("Your Data is Updated ✔️") 
      })
  }

  const handleChange = (e)=>{
      const {id,value} = e.target
      // console.log(id,value)
    setdata({...data,[id]:value})
  }


  return (
    <>
    <h1>Edit Form</h1>
      <Box style={{display: 'flex' , width:'465px', margin:'auto'}}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          onChange={handleChange}
          id="name"
          label="Name"
          variant="filled"
        />
        <br/>
        <TextField
          onChange={handleChange}
          id="city"
          label="City"
          variant="filled"
        />
        <br/>
        <TextField
          onChange={handleChange}
          id="address"
          label="Address"
          variant="filled"
        />
        <br/>
        <TextField
          onChange={handleChange}
          id="capacity"
          label="Capacity"
          type="number"
          abelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      </div>
      <div>
        <TextField
          onChange={handleChange}
          id="cost_per_day"
          label="Cost Per Day"
          type="number"
          abelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <br/>
        <TextField
          onChange={handleChange}
          id="verified"
          label="Verified"
          variant="filled"
        />
        <br/>
        <TextField
          onChange={handleChange}
          id="image"
          label="Image"
          variant="filled"
        />
        <br/>
        <TextField
          onChange={handleChange}
          id="rating"
          label="Rating"
          type="number"
          abelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      </div>
      
    </Box>
    <Button style={{margin:'10px' , backgroundColor:'black'}} onClick={updateState} variant="contained">Update</Button>
    </>
  );
}
