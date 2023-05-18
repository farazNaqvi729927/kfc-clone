import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Kfc from './logo.png'
import SideBar from './SideBar';


export default function Registration(props) {
    const [disable, setDisable] = useState(false)
    const Ref = useRef(null)
    const pageRef = useRef(null)
    const { remove, num, Num, itemPrice, onRemove, Add, incre, decre } = props


    const hideBtn = () => {
        document.getElementById('q').style.display = 'none';
    }

    const showBtn = () => {
        document.getElementById('q').style.display = 'flex';
    }


    const openSidebar = (e) => {
        document.getElementById('nav').style.width = '30%'
        if (pageRef.current.contains(e.target)) {
            document.getElementById('overlay').style.position = 'fixed'
            document.getElementById('overlay').style.width = '100%'
            document.getElementById('overlay').style.height = '100%'
            document.getElementById('overlay').style.zIndex = '999'
            document.body.style.overflowY = 'hidden'
            setDisable(true)
        }
    }

    const closeSideBar = (e) => {
        document.getElementById('nav').style.width = '0%'
        if (Ref.current.contains(e.target)) {
            document.body.style.overflowY = 'visible'
            document.getElementById('overlay').style.width = '0%'
            document.getElementById('overlay').style.height = '0%'
            document.getElementById('overlay').style.opacity = '10'
            document.body.style.backgroundColor = 'black'
            setDisable(false)
        }
    }

    useEffect(() => {
        const handler = (e) => {
            if (!Ref.current.contains(e.target)) {
                document.getElementById('nav').style.width = '0%'
                document.body.style.overflow = 'visible'
                document.getElementById('overlay').style.width = '0%'
                document.getElementById('overlay').style.height = '0%'
                document.getElementById('overlay').style.opacity = '10'
                setDisable(false)
            }
        }
        document.addEventListener('mousedown', handler)
    }
    )

    const pointer = disable ? 'none' : 'auto'

    return (
        <>

            <div id='overlay' ref={pageRef}>
                <nav id='NAV' style={{ height: '95px', pointerEvents: pointer, zIndex: '2' }} className="navbar fixed-top navbar-expand-lg bg-black navbar-dark">
                    <div className='a'>
                        <Link className="nav-link active" aria-current="page" to="/"><img style={{ position: 'absolute', left: '130px' }} src={Kfc} width='70px' alt="Kfc Rocks" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className='A'>
                            <button onClick={showBtn} className='c'>
                                <img style={{ backgroundColor: 'transparent' }} height={15} src="https://www.kfcpakistan.com/assets/images/channels/1.png" alt="" />
                                <div style={{ marginLeft: '3px', backgroundColor: 'transparent' }}>
                                    Delivery
                                </div>
                            </button>
                            <button onClick={hideBtn} className='c' >
                                <img style={{ backgroundColor: 'transparent' }} height={18} src="https://www.kfcpakistan.com/assets/images/channels/2.png" alt="" />
                                <div style={{ marginLeft: '3px', backgroundColor: 'transparent' }}>
                                    Pickup
                                </div>
                            </button>
                        </div>
                        <button id='q' className='d'><i style={{ backgroundColor: 'transparent', position: 'absolute',border:'none' , left: '15px' }} className="bi bi-geo-alt-fill"></i> Select Location</button>


                        {num ? (<button onClick={openSidebar} id='closebtn' className='e' style={{ textDecoration: 'none', backgroundColor: 'transparent', color: 'white', position: 'absolute', right: '285px', marginTop: '24px' }}>{num}</button>) : (<button onClick={openSidebar} id='closebtn' className='e' style={{ textDecoration: 'none', backgroundColor: 'transparent', color: 'white', position: 'absolute', right: '285px', marginTop: '24px' }}>{num}</button>)}
                        <div className="collapse navbar-collapse i" id="navbarNav">

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/h">Registration/SignUp</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div ref={Ref}>
                <section className='overlay' id='nav' >
                    <div style={{ display: 'flex' }}>
                        <div style={{position: 'fixed',zIndex: '1300',backgroundColor: 'black',width: '29%', height: '110px',}}>
                            <button className='e1' style={{ textDecoration: 'none', backgroundColor: 'transparent',border:'none', color: 'white', marginTop: '24px', marginLeft: '10px' }} >{props.num}</button>
                            <h3 style={{ fontSize: '1.5rem', marginTop: '24px', color: 'white', position: 'absolute', top: '8px', left: '63px' }}>Your Bucket</h3>
                            {num >= 1 ? <div style={{ color: 'white', fontSize: '23px', fontWeight: 'bold', position: 'absolute', top:'8px', right: '40px', marginTop: '22px' }}>Rs {itemPrice}</div> : ''}
                            <button style={{ marginTop: '24px', position: 'absolute', right: '0', top: '10px', color: 'white', fontWeight: '200px',border:'none'}} className='closebtn' onClick={closeSideBar} ><i className="bi bi-x-lg"></i></button>
                        </div>

                        <SideBar incre={incre} decre={decre} remove={remove} Num={Num} onRemove={onRemove} Add={Add} />

                        {
                            num >= 1 ?
                                <div style={{ backgroundColor: 'black', width: '29%', height: '109px', zIndex: '1300', position: 'fixed', bottom: '0' }}>
                                    <Link className='zxc' style={{ fontWeight: 'bold' }} onClick={closeSideBar} to='/Bucket'>View Bucket</Link>
                                </div> : ''
                        }
                    </div>
                </section>
            </div>

        </>
    )
}
