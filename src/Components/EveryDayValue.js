import React from 'react';
import KBDPage from './KBDPage';
import KBPage from './KBPage';
import SpicePage from './SpicePage';
import ZingPage from './ZingPage';
import { Box } from '@mui/material';

export default function EverydayValue(props) {
  const { Add, items6, items7, items8, items9 } = props;

  return (

    <>

      <Box style={{ color: 'white', fontSize: 'calc(1rem + 1.5vw)', textAlign: 'center', marginTop: '2em', fontWeight: 'bold' }}>Everyday Value</Box>



      <Box className='x'>
        {items6.map((item) => (
          <KBPage key={item.id} item={item} Add={Add} />
        ))}

        {items7.map((item) => (
          <SpicePage key={item.id} item={item} Add={Add} />
        ))}

        {items8.map((item) => (
          <ZingPage key={item.id} item={item} Add={Add} />
        ))}

        {items9.map((item) => (
          <KBDPage key={item.id} item={item} Add={Add} />
        ))}

      </Box>
    </>
  );
}
