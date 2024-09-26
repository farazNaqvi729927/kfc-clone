import React from 'react';
import SharePage from './SharePage';
import { Box } from '@mui/material';

export default function Sharing(props) {
    const { Add, items1, items2, items3, items4 } = props;

    return (
        <>
            <Box className='navbar fixed-top navbar-expand-lg bg-black navbar-dark'>

                {/* <Box className='a1'>

                    <Link className="nav-link active a2" aria-current="page" to="/a1">Everyday Value</Link>

                    <Link className="nav-link active a2" aria-current="page" to="/b1">Ala Carte & Combos</Link>

                    <Link className="nav-link active a2 a3" aria-current="page" to="/d1">Sharing</Link>

                    <Link className="nav-link active a2" aria-current="page" to="/e1">Snacks & Beverages</Link>

                </Box> */}

            </Box>



            <h2 style={{color:'white',textAlign:'center',marginTop:'2em'}}>Sharing</h2>

            <div className='x'>
                {items1.map((item) => (
                    <SharePage key={item.id} item={item} Add={Add} />
                ))}
                {items2.map((item) => (
                    <SharePage key={item.id} item={item} Add={Add} />
                ))}
                {items3.map((item) => (
                    <SharePage key={item.id} item={item} Add={Add} />
                ))}
                {items4.map((item) => (
                    <SharePage key={item.id} item={item} Add={Add} />
                ))}
            </div>
        </>
    );
}
