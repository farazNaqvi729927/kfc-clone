import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Bucket(props) {
  const { itemPrice } = props;
  const [limit, setLimit] = useState(0);



  const handler = (e) => {
    if (e.key === 'Backspace') {
      setLimit(limit > 0 ? limit - 1 : 0);
    } else if (limit < 200) {
      setLimit(limit + 1);
    }
  };





  return (

    <Container>
      <Box className='bTicks'>
        <Box>
          <h1 >Checkout Panel</h1>
        </Box>

      </Box>





      <Box className='faraz'>

        <Box className='yy'>


          <textarea style={{ border: 'none', width: '100%', fontSize:'calc(0.5rem + 1vw)' }} onKeyDown={handler} minLength={0} className='qaq' rows="8" cols="38" />
          <Box sx={{fontSize:'calc(1rem + 1vw)'}}>Special Instructions (Optional)</Box>



          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            <Box sx={{ display: 'flex', alignItems: 'center',marginTop:'1em' }}>

              <input style={{ backgroundColor: '#1C1816', border: '2px solid #E4002B', marginRight: '8px',fontSize:'calc(0.5rem + 1vw)' }} className="form-check-input" type="checkbox" aria-label="..." />

              <Box sx={{fontSize:'calc(1rem + 1vw)'}}>Save For Future</Box>

            </Box>

            <Box sx={{fontSize:'calc(1rem + 1vw)',marginTop:'0.5em'}}>{limit}/200</Box>
          </Box>




          <Link className='cOut' to='/h'>

            <Box sx={{fontSize:'calc(1rem + 1vw)', padding:'0.5em', backgroundColor: '#E4002B', textAlign: 'center', border: 'none', borderRadius: '6px', cursor: 'pointer', }} >
              Place Order
            </Box>

          </Link>

          <Box className='y11'>
            <p>Subtotal</p>
            <p>Rs {itemPrice}</p>

          </Box>

        </Box>

      </Box>

    </Container>
  );
}
