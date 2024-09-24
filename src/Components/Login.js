import { Box, Container } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {



    return (
        <>
            <Container className='f'>
               
                <Box className='j'>
                    
                    <Box id='w'>
                        <h2 style={{ color: 'white', textAlign: 'center' }}>Welcome!</h2>

                       
                        <form style={{ textAlign: 'center' }}>
                           
                            <Box className="mb-3">
                                <label style={{ color: 'white', textAlign: 'center' }} htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </Box>

                            <Box className="mb-3">
                                <label style={{ color: 'white', textAlign: 'center' }} htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </Box>

                            <button type="submit" className="l">Login</button>
                        
                        </form>

                        
                        <Box style={{ textAlign: 'center', marginTop: '4em' }}>
                            <Link className="sos" to="/s">SignUp Here</Link>
                        </Box>
                  
                    </Box>
               
                </Box>
            
            </Container>


        </>
    )
}
