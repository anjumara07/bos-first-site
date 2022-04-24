import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {useState , useEffect } from 'react';
import {addData} from '../Redux/Product/action'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export function Tables() {
    const [page,setPage] = useState(1)
    const [price ,setPrice] = useState(true)
    const allProducts = useSelector((store)=>store.data.data)
    const isLoggedIn = useSelector((store) => store.reducer.isLoggedIn)

    // console.log(allProducts);
    const dispatch = useDispatch();

  useEffect(() => {
      getData()
  },[page])    

  const getData = () =>{
      axios.get('http://localhost:2345/products',{
          params:{
              page:page,
              size:4
          }
      }).then((response) => {
        //   console.log(response.data.products);
        dispatch(addData(response.data.products));

      })
  }

  const sortPrice = () => {
     if(price===true){
        axios.get('http://localhost:2345/products').then((response) => {
        const data = response.data.products
        console.log(data);
        const ans = data.sort((a,b)=>{
            return a.cost_per_day - b.cost_per_day
        })
        console.log(ans);
        dispatch(addData([...ans]));
        setPrice(false);
        return
      })
      
     }
     else{
        axios.get('http://localhost:2345/products').then((response) => {
        const data = response.data.products
        console.log(data);
        const ans = data.sort((a,b)=>{
            return b.cost_per_day - a.cost_per_day
        })
        console.log(ans);
        dispatch(addData([...ans]));
        setPrice(true);
        return
      })
      
     }
     
  }

  return (
    <>
        <Button style={{margin:'10px'}} variant="contained">Filter Verified Place</Button>
        <Button style={{margin:'10px'}} onClick={sortPrice} variant="contained">Sort By Price</Button>
        <Button style={{margin:'10px'}} variant="contained">Sort By Rating</Button>
        <TableContainer style={{marginTop:'50px'}} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">City</StyledTableCell>
                <StyledTableCell align="center">Address</StyledTableCell>
                <StyledTableCell align="center">Capacity</StyledTableCell>
                <StyledTableCell align="center">Cost Per Day</StyledTableCell>
                <StyledTableCell align="center">Verified</StyledTableCell>
                <StyledTableCell align="center">Rating</StyledTableCell>
                <StyledTableCell align="center">Image</StyledTableCell>
                {isLoggedIn?<StyledTableCell align="center">Edit</StyledTableCell>:""}
                {isLoggedIn?<StyledTableCell align="center">Delete</StyledTableCell>:""}
            </TableRow>
            </TableHead>
            <TableBody>
            {allProducts.map((row) => (
                <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.city}</StyledTableCell>
                <StyledTableCell align="center">{row.address}</StyledTableCell>
                <StyledTableCell align="center">{row.capacity}</StyledTableCell>
                <StyledTableCell align="center">{row.cost_per_day}</StyledTableCell>
                <StyledTableCell align="center">{row.verified}</StyledTableCell>
                <StyledTableCell align="center">{row.rating}</StyledTableCell>
                <StyledTableCell align="center"><img src={row.image} alt="pet's house" width="100px" /></StyledTableCell>
                {isLoggedIn?<StyledTableCell align="center"><Button variant="contained">Edit</Button></StyledTableCell>:""}
                {isLoggedIn?<StyledTableCell align="center"><Grid style={{cursor: 'pointer'}} item xs={8}><DeleteIcon /></Grid></StyledTableCell>:""}
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        <Button style={{margin:'20px' , backgroundColor:'gray'}} variant="contained" disabled={page===1} onClick={()=>{setPage(page-1)}}>Prev</Button>
        <Button style={{margin:'20px' , backgroundColor:'gray'}} variant="contained" disabled={page===2}  onClick={()=>{setPage(page+1)}}>Next</Button>
    </>
  );
}
