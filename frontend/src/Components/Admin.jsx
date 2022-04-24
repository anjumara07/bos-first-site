import * as React from 'react';
import Button from '@mui/material/Button';

import {Login} from './Login';
import {Tables} from './User'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export const Admin =()=>{
    const isLoggedIn = useSelector((store) => store.reducer.isLoggedIn)
    const navigate = useNavigate();
    return (
        <>
           {isLoggedIn?<Button onClick={()=>{navigate('/create')}} style={{margin:'20px' , backgroundColor:'black'}} variant="contained" >Create</Button>:""}
           {isLoggedIn ? <Tables />:<Login />}
        </>
    )
}