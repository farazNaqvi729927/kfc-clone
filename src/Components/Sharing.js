import React from 'react';
import SharePage from './SharePage';
import { Box } from '@mui/material';

export default function Sharing(props) {
    const { Add, items1, items2, items3, items4 } = props;

    return (
        <>

            <Box style={{ color: 'white', fontSize: 'calc(1rem + 1.5vw)', textAlign: 'center', marginTop: '2em', fontWeight: 'bold' }}>Sharing</Box>

            <Box className='x'>
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
            </Box>
        </>
    );
}
