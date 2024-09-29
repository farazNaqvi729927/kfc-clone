import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';



export default function KBurgerPage(props) {

    return (
        <div class="y" >
        <Link className="nav-link active" aria-current="page" to={props.item.link}>

          <img style={{ maxWidth: '200px' }} src={props.item.image} class="card-img-top" alt="..." />

          <div class="card-body">
            <h5 class="card-title kbN">{props.item.name}</h5>
            <p class="card-text kbDesc">{props.item.descp}</p>
          </div>

          <Box className='tsFlex'>
            <Box className="kbP">Rs {props.item.price}</Box>
            <Button onClick={() => props.Add(props.item)} sx={{ backgroundColor: '#E4002B', color: 'white', fontSize: 'clamp(1rem, 1rem + 1vw, 1.3rem)' }} color="success"> Add To Bucket </Button>
          </Box>
        
        </Link>
      
      </div>
    )
}
