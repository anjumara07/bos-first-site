import * as React from 'react';
import Button from '@mui/material/Button';

import {Login} from './Login';
import {Tables} from './User'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addData} from '../Redux/Product/action'
import axios from 'axios'

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