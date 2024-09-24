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


        <Box sx={{display:{xs:'none',sm:'none',md:'flex'}}}>

          <Box className='fl'></Box>


          <Box className='v1'>
            <i style={{ marginLeft: '0.15em', fontSize: '30px' }} className="bi bi-check2"></i>
            <p>Menu</p>
          </Box>


          <Box className='fl'></Box>


          <Box className='v1'>
            <i style={{ marginLeft: '0.15em', fontSize: '30px' }} className="bi bi-check2"></i>
            <p>Bucket</p>
          </Box>


          <Box className='fl'></Box>


          <Box className='v1' style={{ border: '2px solid white' }}>
            <p style={{ marginLeft: '0.6em', fontSize: '20px', marginTop: '0.2em' }}>3</p>
            <p style={{ marginLeft: '-0.7em', marginTop: '-0.5em' }}>Checkout</p>
          </Box>

        </Box>


      </Container>





      <Box className='faraz'>

        <Box className='yy'>


          <textarea style={{ border: 'none', width: '100%' }} onKeyDown={handler} minLength={0} className='qaq' rows="5" cols="38" />
          <p style={{textAlign:'left'}}>Special Instructions (Optional)</p>



          <Box className='future'>

            <input style={{ backgroundColor: '#1C1816', border: '2px solid #E4002B' }} className="form-check-input" type="checkbox" aria-label="..." />
            <p>Save For Future</p>
            <p style={{ marginLeft: '45%' }}>{limit}/200</p>

          </Box>


          {/* <Link className='done' to='/h'>

            <Box style={{ textAlign: 'center', height: '50px', width: '100%', border: '2px solid white', borderRadius: '6px', padding: '10px', cursor: 'pointer' }}>
              Done
            </Box>

          </Link> */}


          <Link className='cOut' to='/h'>

            <Box
              style={{ backgroundColor: '#E4002B', textAlign: 'center', height: '50px', width: '100%', border: 'none', borderRadius: '6px', padding: '13px', cursor: 'pointer', }} >
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
