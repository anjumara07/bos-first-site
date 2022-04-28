import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useEffect , useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
// import {addData} from '../Redux/Product/action'

export function Create() {

  const [values, setValues] = useState({});

  const handleChange = (e) => {
    //  console.log(e.target.value)
      const {id,value} = e.target;
      setValues({...values,[id]:value})
  }

  const updateState = ()=>{
    console.log(values);
    axios.post(`https://bos-first-site-065.herokuapp.com/products`,values).then((response) =>{
       console.log(response.data);
       alert("Data is Added in The Table ✔️")   
    })
  }

  return (
    <>
    <h1>Create Data</h1>
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
          id="id"
          label="ID"
          variant="filled"
        />
        <br/>
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
