import React from 'react'
import { Link } from 'react-router-dom';
import Kfc from './logo.png'

export default function SignUp() {
    return (
        <div id='pope'>
            <div id='pop'>
                <h2 style={{ color: 'white',marginTop:'100px',marginLeft:'570px' }}>Please Signup Here!</h2>
                <form className='SU'>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="email" className="form-control" id="email" placeholder='Enter Name' aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder='Enter Email' aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder='Enter Password' id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary my-3">Submit</button>
                </form>
            </div>


            <div className='o'>
                <div className='p'>
                    <div className='q'>
                        <Link to="/"><img src={Kfc} width='70px' alt="Kfc Rocks" /></Link>
                    </div>
                    <div className='r'>
                    </div>
                    <div className='s'>
                        <p style={{ color: '#D4D4D4', fontWeight: '500', marginBottom: '10px' }}>Find us on</p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <div id='v'>
                                <a className='ddd' rel='noreferrer' href="https://www.youtube.com/channel/UCg4hfdWApV0Uea6aFW7PZUg" target='_blank'>
                                    <i className="bi bi-youtube"></i> </a>
                            </div>

                            <div id='v'>
                                <a style={{ color: 'black' }} className='ddd' rel='noreferrer' href="https://www.instagram.com/kfcpakistanofficial/?hl=en" target='_blank'>
                                    <i className="bi bi-instagram"></i> </a>
                            </div>

                            <div id='v'>
                                <a style={{ color: 'blue' }} className='ddd' rel='noreferrer' href="https://www.facebook.com/KFCPakistan/" target='_blank'>
                                    <i className="bi bi-facebook"></i> </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
