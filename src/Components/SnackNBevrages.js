import React from 'react';
import { Link } from 'react-router-dom';
import BonelessPage from './BonelessPage';
import CrispyDuoPage from './CrispyDuoPage';
import CrispyPage from './CrispyPage';
import WowPage from './WowPage';
import { Box } from '@mui/material';




export default function SnackNBevrages(props) {
  const { Add, items10, items11, items12, items13 } = props;

  return (
    <>

      {/* <Box className='navbar fixed-top navbar-expand-lg bg-black navbar-dark'>

        <Box className='a1'>

          <Link className="nav-link active a2" aria-current="page" to="/a1">Everyday Value</Link>

          <Link className="nav-link active a2" aria-current="page" to="/b1">Ala Carte & Combos</Link>

          <Link className="nav-link active a2" aria-current="page" to="/d1">Sharing</Link>

          <Link className="nav-link active a2 a3" aria-current="page" to="/e1">Snacks & Beverages</Link>

        </Box>

      </Box> */}





      <div className='x'>
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
      </div>
    </>
  );
}
