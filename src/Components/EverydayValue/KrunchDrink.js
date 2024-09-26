import { Box, Container } from '@mui/material'
import React from 'react'

export default function KrunchDrink(props) {

  const { items9, Add } = props

  return (

    <Container>
      {/* <Box style={{ zIndex: '1' }} className='navbar fixed-top navbar-expand-lg bg-black navbar-dark'>

         <Box className='a1'>

          <Link className="nav-link active a2 a3" aria-current="page" to="/a1">Everyday Value</Link>

          <Link className="nav-link active a2" aria-current="page" to="/b1">Ala Carte & Combos</Link>

          <Link className="nav-link active a2 " aria-current="page" to="/d1">Sharing</Link>

          <Link className="nav-link active a2" aria-current="page" to="/e1">Snacks & Beverages</Link>

        </Box> 

      </Box> */}


      <h2 style={{ color: 'white', textAlign: 'center', marginTop: '2em', fontWeight: 'bold' }}>Everyday Value</h2>



      {items9.map((x) => (

        <Box key={x.id} className='cb'>

          <Box>
            <img style={{ maxWidth: '400px' }} src={x.image} alt="" />
          </Box>


          <Box>

            <h2 >{x.name}</h2>


            <h5>Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun</h5>

            <h2 style={{ fontWeight: 'bold' }}>Rs {x.price}</h2>



            <Box style={{ display: 'flex', gap: '1em', marginTop: '1em', justifyContent: 'center' }}>


              <button className='qqq' onClick={props.decre}>  <i style={{ color: 'white' }} className="bi bi-dash"></i> </button>

              <h5 style={{ display: 'flex', alignItems: 'center' }}>{props.count}</h5>

              {props.count < 10 ? <button className='qqq' onClick={props.incre}>  <i className="bi bi-plus"></i> </button>
                : <button id='ppp' onClick={props.incre}>  <i className="bi bi-plus"></i> </button>}

              <button onClick={() => Add(x)} className='ee'>Add to Bucket</button>

            </Box>


          </Box>

        </Box>

      ))}

    </Container>
  )
}
