import { Box } from '@mui/material';
import React from 'react';

export default function SideBar(props) {
  const { Num, onRemove, Add } = props;

  return (
    <Box sx={{ backgroundColor: 'black' }}>
      <Box>

        {Num.length < 1 && (<p className='sbemptyB'>Bucket is Empty!☹️</p>)}

        {Num.map((Item) => (

          <Box key={Item.id}>

            <Box className='sbItem' >

              <img style={{ maxWidth: '15rem', height: '90px' }} src={Item.image} alt={Item.name} />


              <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '0.2em', flex: '1' }}>

                <Box sx={{ fontSize: 'calc(1rem + 0.8vw)',fontWeight: 'bold'  }}>
                  {Item.name}
                </Box>



                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5em' }}>

                  <Box sx={{ display: 'flex', alignItems: 'center'}}>

                    {Item.qty < 2 ? (

                      <button className='delB' onClick={() => onRemove(Item)}>
                        <i className="bi bi-trash2"></i>
                      </button>

                    ) : (

                      <button className='Btn' onClick={() => onRemove(Item)}>
                        <i className="bi bi-dash"></i>
                      </button>

                    )}


                    <Box sx={{fontSize: 'calc(1rem + 0.8vw)', color: 'white', fontWeight: 'bold', margin: '0 0.2em' }}>
                      {Item.qty}
                    </Box>


                    {Item.qty < 10 ? (

                      <button className='Btn2' onClick={() => Add(Item)}>
                        <i className="bi bi-plus"></i>
                      </button>

                    ) : (

                      <button className='btn2' onClick={() => Add(Item)}>
                        <i className="bi bi-plus"></i>
                      </button>

                    )}

                  </Box>


                  <Box sx={{fontSize: 'calc(1rem + 0.8vw)', fontWeight: 'bold' }}>
                    Rs {Item.qty * Item.price}
                  </Box>

                </Box>

              </Box>

            </Box>

          </Box>

        ))}

      </Box>

    </Box>

  );

}
