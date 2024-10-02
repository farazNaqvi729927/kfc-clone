import { Box, Container } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {



    return (
        <>
            <Container className='f'>

                <Box className='j'>

                    <form style={{ textAlign: 'center' }}>

                        <Box className="mb-3">
                            <label style={{ color: 'white', textAlign: 'center', fontSize: 'calc(1rem + 1vw)' }} htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input style={{ fontSize: 'calc(1rem + 1vw)' }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </Box>


                        <Box className="mb-3">
                            <label style={{ color: 'white', textAlign: 'center', fontSize: 'calc(1rem + 1vw)' }} htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input style={{ fontSize: 'calc(1rem + 1vw)' }} type="password" className="form-control" id="exampleInputPassword1" />
                        </Box>


                        <button className="l">Login</button>


                        <Box style={{ textAlign: 'center', marginTop: '4em' }}>
                            <Link className="sos" to="/s">Signup Here</Link>
                        </Box>

                    </form>

                </Box>

            </Container>


        </>
    )
}
