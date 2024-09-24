import { Box, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function KrunchBurger(props) {

  const { items6, Add } = props

  return (
    <div>
      <Box style={{ zIndex: '1' }} className='navbar fixed-top navbar-expand-lg bg-black navbar-dark'>

        <Box className='a1'>

          <Link className="nav-link active a2 a3" aria-current="page" to="/a1">Everyday Value</Link>

          <Link className="nav-link active a2" aria-current="page" to="/b1">Ala Carte & Combos</Link>

          <Link className="nav-link active a2 " aria-current="page" to="/d1">Sharing</Link>

          <Link className="nav-link active a2" aria-current="page" to="/e1">Snacks & Beverages</Link>

        </Box>

      </Box>

      {items6.map((x) => (

        <div key={x.id} className='cb'>

          <div>
            <img style={{ maxWidth: '400px' }} src={x.image} alt="" />
          </div>


          <Box sx={{ padding: '2em',textAlign:'center',justifyContent:'center' }}>

            <h1 style={{ fontWeight: 'bold', lineHeight: '1.167' }}>{x.name}</h1>

            <h5>Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun</h5>

            <h2 style={{ fontWeight: 'bold' }}>Rs {x.price}</h2>

            
            <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>

              <button className='qqq' onClick={props.decre}>-</button>
              <h5 style={{ marginTop: '10px', width: '20px', marginLeft: '5px' }}>{props.count}</h5>
              {props.count < 10 ? <button className='qqq' onClick={props.incre}>+</button> : <button id='ppp' onClick={props.incre}>+</button>}
              <button onClick={() => Add(x)} className='ee'>Add to bucket</button>

            </div>

          </Box>

        </div>

      ))}

    </div>
  )
}
