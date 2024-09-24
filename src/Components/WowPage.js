import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function WowPage(props) {

  return (
    <div className="y">
      <Link className="nav-link active" aria-current="page" to={props.item.link}>
        <img style={{ maxWidth: '200px' }} src={props.item.image} alt="" />
        <div className="kbN">{props.item.name}</div>
        <p className="kbDesc">{props.item.descp}</p>
      </Link>

      <Box className='tsFlex'>
        <Box className="kbP">Rs {props.item.price}</Box>
        <Button onClick={() => props.Add(props.item)} sx={{ backgroundColor: '#E4002B', color: 'white', fontSize: 'calc(1rem + 1vw' }} color="success"> Add To Bucket </Button>
      </Box>
    </div>
  );
}
