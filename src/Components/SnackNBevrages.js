import React from 'react';
import BonelessPage from './BonelessPage';
import CrispyDuoPage from './CrispyDuoPage';
import CrispyPage from './CrispyPage';
import WowPage from './WowPage';
import { Box } from '@mui/material';




export default function SnackNBevrages(props) {
  const { Add, items10, items11, items12, items13 } = props;

  return (
    <>

      <Box style={{ color: 'white', fontSize: 'calc(1rem + 1.5vw)', textAlign: 'center', marginTop: '2em', fontWeight: 'bold' }}>Snacks</Box>

      <Box className='x'>
        {items12.map((item) => (
          <CrispyPage key={item.id} item={item} Add={Add} />
        ))}
        {items11.map((item) => (
          <BonelessPage key={item.id} item={item} Add={Add} />
        ))}
        {items13.map((item) => (
          <WowPage key={item.id} item={item} Add={Add} />
        ))}
        {items10.map((item) => (
          <CrispyDuoPage key={item.id} item={item} Add={Add} />
        ))}
      </Box>
    </>
  );
}
