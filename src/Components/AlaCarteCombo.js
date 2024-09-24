import React from 'react';
import { Link } from 'react-router-dom';
import KBurgerPage from './KBurgerPage';
import TPage from './TPage';
import ZBPage from './ZBPage';
import ZSCPage from './ZSCPage';
import { Box } from '@mui/material';

export default function AlaCarteCombo(props) {
  const { Add, items14, items15, items16, items17 } = props;

  return (
    <>
      <Box className='navbar fixed-top navbar-expand-lg bg-black navbar-dark'>

        <Box className='a1'>

          <Link className="nav-link active a2" aria-current="page" to="/a1">Everyday Value</Link>

          <Link className="nav-link active a2 a3" aria-current="page" to="/b1">Ala Carte & Combos</Link>

          <Link className="nav-link active a2" aria-current="page" to="/d1">Sharing</Link>

          <Link className="nav-link active a2" aria-current="page" to="/e1">Snacks & Beverages</Link>

        </Box>

      </Box>





      <div className='x'>
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
      </div>
    </>
  );
}
