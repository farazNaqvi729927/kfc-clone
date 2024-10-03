import { Box } from '@mui/material'
import React from 'react'

export default function RiceNSpice(props) {

  const { items7, Add } = props

  return (

    <Box>

      {items7.map((x) => {

        return (
          <>
            <Box style={{ color: 'white', fontSize: 'calc(1rem + 1.5vw)', textAlign: 'center', marginTop: '2em', fontWeight: 'bold' }}>Everyday Value</Box>


            <Box key={x.id} className='cb'>

              <Box>
                <img style={{ maxWidth: 'calc(100vw - 20px)' }} src={x.image} alt="" />
              </Box>

              <Box>

                <Box sx={{ fontSize: 'calc(1rem + 1.5vw)', fontWeight: 'bold' }}>{x.name}</Box>
                <Box sx={{ fontSize: 'calc(1rem + 1.2vw)', width: '100%',padding:'0.5rem' }}>Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun</Box>
                <Box sx={{ fontSize: 'calc(1rem + 1.5vw)', fontWeight: 'bold' }}>Rs {x.price}</Box>


                <Box sx={{ display: 'flex', marginTop: '1em', justifyContent: 'center', padding: '1em', alignItems: 'center' }}>


                  <Box sx={{ display: 'flex', gap: '1em', justifyContent: 'center', padding: '1em', alignItems: 'center', marginLeft: '1em' }}>
                    <button className='qqq' onClick={props.decre}>  <i style={{ color: 'white' }} className="bi bi-dash"></i> </button>

                    <Box style={{ display: 'flex', alignItems: 'center', fontSize: 'calc(1rem + 1.2vw)' }}>{props.count}</Box>

                    {props.count < 10 ? <button className='qqq' onClick={props.incre}>  <i className="bi bi-plus"></i> </button>
                      : <button id='ppp' onClick={props.incre}>  <i className="bi bi-plus"></i> </button>}
                  </Box>


                  <Box>
                    <button onClick={() => Add(x)} className='ee'>Add to Bucket</button>
                  </Box>

                </Box>

              </Box>

            </Box>
          </>
        );
      })}
    </Box>
  )
}
