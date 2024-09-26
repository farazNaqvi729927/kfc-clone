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
      <Box className='navbar fixed-top navbar-expand-lg bg-black navbar-dark'>

        {/* <Box className='a1'>

          <Link className="nav-link active a2 a3" aria-current="page" to="/a1">Everyday Value</Link>

          <Link className="nav-link active a2" aria-current="page" to="/b1">Ala Carte & Combos</Link>

          <Link className="nav-link active a2" aria-current="page" to="/d1">Sharing</Link>

          <Link className="nav-link active a2" aria-current="page" to="/e1">Snacks & Beverages</Link>

        </Box> */}

      </Box>



      <h2 style={{ color: 'white', textAlign: 'center', marginTop: '2em' }}>Everyday Value</h2>



      <div className='x'>
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

      </div>
    </>
  );
}
