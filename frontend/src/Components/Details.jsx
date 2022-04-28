import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';

export const Detail =()=>{
  
  const {id} = useParams();
  const [data,setData] = useState();
  const [load,setLoad] = useState(true);
  
  useEffect(() => {
      setLoad(true);
      axios.get(`https://bos-first-site-065.herokuapp.com/products/${id}`).then((response) => {
          console.log(response.data);
          setData(response.data);
          setLoad(false);
      })

  },[])    


  return (
      <>
        {load?<div>Loading...</div>:<Card style={{margin:"auto" ,marginTop:'30px', width:'900px'}} sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="100%"
            image={data.image}
            alt="green iguana"
            width="100%"
            />
            <CardContent style={{textAlign: 'left'}}>
                <Typography gutterBottom variant="h5" component="div">
                    Name : {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>Summary : </h3> Boarding facilities you leave em we love them
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>Address : </h3> {data.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>City :</h3> {data.city}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>Rating : </h3> {data.rating}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>Verified : </h3> {data.verified}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>Cost per Day : </h3> {data.cost_per_day}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>Number of pets that will be watched at one time : </h3> {data.capacity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>Accepted Pet Types : </h3> Dog Cats Rabbits
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>Accepted Pet size : </h3> 10-20 kg
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>The place your pet will sleep at night : </h3> Wherever they want
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>The number of potty breaks provided per day : </h3> Full access outside
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>The number of walks provided per day : </h3> 22
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>The type of home I stay in : </h3> House
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>My outdoor area size : </h3> Large
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>Emergency transport : </h3> Yes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>Level of adult supervision : </h3> Pets will never be left unattended
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>The place your pet will be if they are left unsupervised at home : </h3> Free roam of the house
                </Typography>
            </CardContent>
        </CardActionArea>
        </Card>}
    </>
  );
}
