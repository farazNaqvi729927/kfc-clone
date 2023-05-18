import React, { useState } from 'react'
import Google from './Google'
import SignUpGif from './SignUpGif'
import { Link } from 'react-router-dom';
import Kfc from './logo.png'
export default function SignUp() {
    const [input, setInput] = useState('')
    const [input1, setInput1] = useState('')
    const clickH = (e) => {
        setInput(e.target.value)
    }

    const clickH1 = (e) => {
        setInput1(e.target.value)
    }

    const handler = ()=>{
        alert('Logged In Successfully!')
    }


    return (
        <>
            <div className='f'>
                <div className='j'>
                    <div className='k'>
                        <div id='q'><SignUpGif /></div>
                        <div id='w'>
                            <h2 style={{ color: 'white' }}>Welcome!</h2>
                            <form action="">
                                <div id='two'>
                                    <input type="text" value={input} required onChange={clickH} /><br />
                                    <span>Name</span>
                                </div>
                                <div id='three'>
                                    <input type="number" value={input1} required onChange={clickH1} /><br />
                                    <span>Number</span>
                                </div>
                                <button onClick={handler} className='l'>Login</button>
                            </form>
                            <div className='m'>
                                <div style={{ backgroundColor: '#3F3F3F', width: '100px', marginTop: '-12px', height: '2px' }} />
                                <p>Or</p>
                                <div style={{ backgroundColor: '#3F3F3F', width: '100px', marginTop: '-12px', height: '2px' }} />
                            </div>
                            <Google />

                        </div>
                    </div>
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
        </>
    )
}
