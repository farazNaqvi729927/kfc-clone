import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Container } from '@mui/material';




export default function SignUp() {
    return (
        <Container className='f'>

            <Box className='j'>

                    <form style={{textAlign: 'center' }}>


                        <Box className="mb-3">
                            <label style={{ color: 'white', textAlign: 'center',fontSize: 'calc(1rem + 1vw)' }} htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input style={{fontSize:'clamp(1rem, 1.8rem + 1vw, 2rem)' }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </Box>


                        <Box className="mb-3">
                            <label style={{ color: 'white', textAlign: 'center',fontSize: 'calc(1rem + 1vw)' }} htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input style={{ fontSize: 'calc(1rem + 1vw)' }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </Box>

                        <Box className="mb-3">
                            <label style={{ color: 'white', textAlign: 'center',fontSize: 'calc(1rem + 1vw)' }} htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input style={{ fontSize: 'calc(1rem + 1vw)' }} type="password" className="form-control" id="exampleInputPassword1" />
                        </Box>

                        <button className="lsign">Create Account</button>

                    </form>


                    <Box style={{ textAlign: 'center', marginTop: '4em' }}>
                        <Link className="sos" to="/h">Login Here</Link>
                    </Box>

            </Box>

        </Container>
    )
}
