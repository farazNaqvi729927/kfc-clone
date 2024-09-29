import React from 'react'
import { Box, Container } from '@mui/material'




export default function Boneless(props) {

    const { items11, Add } = props

    return (

        <Container>
            {/* <Box style={{ zIndex: '1' }} className='navbar fixed-top navbar-expand-lg bg-black navbar-dark'>

                <Box className='a1'>

                    <Link className="nav-link active a2" aria-current="page" to="/a1">Everyday Value</Link>

                    <Link className="nav-link active a2" aria-current="page" to="/b1">Ala Carte & Combos</Link>

                    <Link className="nav-link active a2 " aria-current="page" to="/d1">Sharing</Link>

                    <Link className="nav-link active a2 a3" aria-current="page" to="/e1">Snacks & Beverages</Link>

                </Box>

            </Box> */}


            



            {items11.map((x) => (

                <>
                    <h2 style={{ color: 'white', textAlign: 'center', marginTop: '2em', fontWeight: 'bold' }}>Snacks</h2>


                    <Box key={x.id} className='cb'>

                        <Box>
                            <img style={{ maxWidth: '400px' }} src={x.image} alt="" />
                        </Box>


                        <Box>

                            <h2 >{x.name}</h2>


                            <h3 >Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun</h3>

                            <h2 >Rs {x.price}</h2>



                            <Container style={{ display: 'flex', gap: '1em', marginTop: '1em', justifyContent: 'center', padding: '1em' }}>


                                <button className='qqq' onClick={props.decre}>  <i style={{ color: 'white' }} className="bi bi-dash"></i> </button>

                                <h5 style={{ display: 'flex', alignItems: 'center' }}>{props.count}</h5>

                                {props.count < 10 ? <button className='qqq' onClick={props.incre}>  <i className="bi bi-plus"></i> </button>
                                    : <button id='ppp' onClick={props.incre}>  <i className="bi bi-plus"></i> </button>}

                                <button onClick={() => Add(x)} className='ee'>Add to Bucket</button>

                            </Container>


                        </Box>

                    </Box>
                </>
            ))}
        </Container>
    )
}
