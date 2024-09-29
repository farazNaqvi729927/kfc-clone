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
      <Container className='bTicks'>
        <Box>
          <h1 >Checkout Panel</h1>
        </Box>

      </Container>





      <Box className='faraz'>

        <Box className='yy'>


          <textarea style={{ border: 'none', width: '100%' }} onKeyDown={handler} minLength={0} className='qaq' rows="5" cols="38" />
          <p style={{fontSize:'clamp(2rem, 1.8rem + 1vw, 2rem)', textAlign: 'left' }}>Special Instructions (Optional)</p>



          <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            <Box style={{ display: 'flex', alignItems: 'center' }}>

              <input style={{ backgroundColor: '#1C1816', border: '2px solid #E4002B', marginRight: '8px' }} className="form-check-input" type="checkbox" aria-label="..." />

              <Box sx={{fontSize:'clamp(2rem, 1.8rem + 1vw, 2rem)'}}>Save For Future</Box>

            </Box>

            <div style={{fontSize:'clamp(2rem, 1.8rem + 1vw, 2rem)'}}>{limit}/200</div>
          </Box>




          <Link className='cOut' to='/h'>

            <Box style={{fontSize:'clamp(2rem, 1.8rem + 1vw, 2rem)', backgroundColor: '#E4002B', textAlign: 'center', border: 'none', borderRadius: '6px', padding: '13px', cursor: 'pointer', }} >
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
