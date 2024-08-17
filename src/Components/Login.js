import React, { useState } from 'react'
import SignUpGif from './SignUpGif'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';




export default function Login() {

    const isOwof = useMediaQuery({ query: '(max-width: 1024px)' });
    const isOffz = useMediaQuery({ query: '(max-width: 1440px)' });
    const isOntz = useMediaQuery({ query: '(max-width: 1920px)' });


    const [input, setInput] = useState('')
    const [input1, setInput1] = useState('')
    const clickH = (e) => {
        setInput(e.target.value)
    }

    const clickH1 = (e) => {
        setInput1(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
    }


    return (
        <>

            {
                isOwof ? (
                    <div className='f'>
                        <div className='j1024'>
                            <div id='w'>
                                <h2 style={{ color: 'white', marginLeft: '25%' }}>Welcome!</h2>

                                <form action="">
                                    <div id='two'>
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" value={input} required onChange={clickH} id="email" aria-describedby="emailHelp" />
                                    </div>

                                    <div id='three'>
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" value={input1} required onChange={clickH1} className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <button onClick={handleClick} className='l'>Login</button>
                                </form>

                                <div className='m1024'>
                                    <div style={{ backgroundColor: '#3F3F3F', width: '100px', marginTop: '-12px', height: '2px' }} />
                                    <p>Or</p>
                                    <div style={{ backgroundColor: '#3F3F3F', width: '100px', marginTop: '-12px', height: '2px' }} />
                                </div>

                                <Link className="sos1024" to="/s">SignUp</Link>



                            </div>
                        </div>
                    </div>

                )



                    : isOffz ? (
                        <div className='f'>
                            <div className='j1440'>
                                <div className='k'>
                                    
                                    <div id='q'><SignUpGif /></div>
                                    
                                    <div id='w1440'>
                                        
                                        <h2 style={{ color: 'white' }}>Welcome!</h2>
                                        
                                        <form action="">
                                            <div id='two'>
                                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                                <input type="email" className="form-control" value={input} required onChange={clickH} id="email" aria-describedby="emailHelp" />
                                            </div>

                                            <div id='three'>
                                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                                <input type="password" value={input1} required onChange={clickH1} className="form-control" id="exampleInputPassword1" />
                                            </div>
                                            <button onClick={handleClick} className='l'>Login</button>
                                        </form>
                                        
                                        <div className='m'>
                                            <div style={{ backgroundColor: '#3F3F3F', width: '100px', marginTop: '-12px', height: '2px' }} />
                                            <p>Or</p>
                                            <div style={{ backgroundColor: '#3F3F3F', width: '100px', marginTop: '-12px', height: '2px' }} />
                                        </div>
                                        
                                        <Link className="sos1440" to="/s">SignUp</Link>



                                    </div>
                                </div>
                            </div>
                        </div>
                    )




                    : isOntz ? (
                        <div className='f'>
                            <div className='j1920'>
                                <div className='k'>
                                    
                                    <div id='q'><SignUpGif /></div>
                                    
                                    <div id='w1920'>
                                        
                                        <div style={{fontSize:'40px', color: 'white',marginLeft:'25%' }}>Welcome!</div>
                                        
                                        <form action="">
                                            <h2 id='two1920'>
                                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                                <input type="email" className="form-control" value={input} required onChange={clickH} id="email" aria-describedby="emailHelp" />
                                            </h2>

                                            <h2 id='three1920'>
                                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                                <input type="password" value={input1} required onChange={clickH1} className="form-control" id="exampleInputPassword1" />
                                            </h2>
                                            <button onClick={handleClick} className='l1920'>Login</button>
                                        </form>
                                        
                                        <div className='m1920'>
                                            <div style={{ backgroundColor: '#3F3F3F', width: '100px', marginTop: '-12px', height: '2px' }} />
                                            <p>Or</p>
                                            <div style={{ backgroundColor: '#3F3F3F', width: '100px', marginTop: '-12px', height: '2px' }} />
                                        </div>
                                        
                                        <Link className="sos1920" to="/s">SignUp</Link>



                                    </div>
                                </div>
                            </div>
                        </div>
                    )




                        : (

                            <div className='f'>
                                <div className='j'>
                                    <div className='k'>
                                        <div id='q'><SignUpGif /></div>
                                        <div id='w'>
                                            <h2 style={{ color: 'white' }}>Welcome!</h2>
                                            <form action="">
                                                <div id='two'>
                                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                                    <input type="email" className="form-control" value={input} required onChange={clickH} id="email" aria-describedby="emailHelp" />
                                                </div>

                                                <div id='three'>
                                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                                    <input type="password" value={input1} required onChange={clickH1} className="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <button onClick={handleClick} className='l'>Login</button>
                                            </form>
                                            <div className='m'>
                                                <div style={{ backgroundColor: '#3F3F3F', width: '100px', marginTop: '-12px', height: '2px' }} />
                                                <p>Or</p>
                                                <div style={{ backgroundColor: '#3F3F3F', width: '100px', marginTop: '-12px', height: '2px' }} />
                                            </div>
                                            <Link className="sos" to="/s">SignUp</Link>



                                        </div>
                                    </div>
                                </div>
                            </div>

                        )


            }
        </>
    )
}
