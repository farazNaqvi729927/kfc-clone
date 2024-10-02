import React from 'react';
import KBurgerPage from './KBurgerPage';
import TPage from './TPage';
import ZBPage from './ZBPage';
import ZSCPage from './ZSCPage';
import { Box } from '@mui/material';

export default function AlaCarteCombo(props) {
  const { Add, items14, items15, items16, items17 } = props;

  return (
    <>

      <Box style={{ color: 'white', fontSize: 'calc(1rem + 1.5vw)', textAlign: 'center', marginTop: '2em', fontWeight: 'bold' }}>Ala Carte Combo</Box>


      <Box className='x'>
        {items14.map((item) => (
          <TPage key={item.id} item={item} Add={Add} />
        ))}

        {items15.map((item) => (
          <ZBPage key={item.id} item={item} Add={Add} />
        ))}

        {items16.map((item) => (
          <ZSCPage key={item.id} item={item} Add={Add} />
        ))}

        {items17.map((item) => (
          <KBurgerPage key={item.id} item={item} Add={Add} />
        ))}
      </Box>
    </>
  );
}
