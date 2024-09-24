import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';




export default function SignUp() {
    return (
        <Container className='f'>

            <div className='j'>

                <div id='w'>
                    <h2 style={{ color: 'white', textAlign: 'center' }}>Welcome!</h2>


                    <form style={{ marginTop: '3em', textAlign: 'center' }}>


                        <div className="mb-3">
                            <label style={{ color: 'white', textAlign: 'center' }} htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>


                        <div className="mb-3">
                            <label style={{ color: 'white', textAlign: 'center' }} htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label style={{ color: 'white', textAlign: 'center' }} htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="lsign">Create Account</button>

                    </form>


                    <div style={{ textAlign: 'center', marginTop: '4em' }}>
                        <Link className="sos" to="/h">Login Here</Link>
                    </div>

                </div>

            </div>

        </Container>
    )
}
