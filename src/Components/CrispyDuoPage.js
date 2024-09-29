import React from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import { Box, Button, CardContent, CardMedia, Typography } from '@mui/material';


export default function CrispyDuoPage(props) {



  return (
    
    <Box className='y'>

      <Link className="nav-link active" aria-current="page" to={props.item.link}>

        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <CardMedia component="img" src={props.item.image} sx={{ maxWidth: '200px', borderRadius: '2%' }} />
        </Box>

        <Typography variant='h6'>
          <h5 class="card-title kbN">{props.item.name}</h5>
        </Typography>

        <CardContent>
          <p class="card-text kbDesc">{props.item.descp}</p>
        </CardContent>

        <Box className="kbP">Rs {props.item.price}</Box>
      </Link>
      <Button onClick={() => props.Add(props.item)} sx={{ backgroundColor: '#E4002B', color: 'white', fontSize: 'clamp(1rem, 1rem + 1vw, 1.3rem)' }} color="success"> Add To Bucket </Button>

    </Box>
  );
}
