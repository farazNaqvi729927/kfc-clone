import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Kfc from './logo.png'
import SideBar from './SideBar';
// import fried from '../Components/fried.png'
import { useMediaQuery } from 'react-responsive';



export default function NavBar(props) {

    const isOwof = useMediaQuery({ query: '(max-width: 1024px)' });
    const isOffz = useMediaQuery({ query: '(max-width: 1440px)' });
    const isOntz = useMediaQuery({ query: '(max-width: 1920px)' });


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

                <nav id='NAV' style={{ height: '95px', pointerEvents: pointer, zIndex: '1200' }} className="navbar fixed-top navbar-expand-lg bg-black navbar-dark">

                    <div className='a'>

                        {
                            isOntz ? (
                                <Link className="nav-link active" aria-current="page" to="/"><img style={{ height: '90%', width: '95px', marginLeft: '130px', position: 'absolute', top: '5%' }} src={Kfc} width='70px' alt="Kfc Rocks" /></Link>

                            )

                                : (
                                    <Link className="nav-link active" aria-current="page" to="/"><img style={{ position: 'absolute', left: '9%', top: '10%' }} src={Kfc} width='70px' alt="Kfc Rocks" /></Link>

                                )
                        }


                        <div className={isOwof ? 'A1024' : isOffz ? 'A1440' : isOntz ? 'A1920' : 'A'}>

                            <button onClick={showBtn} className={isOwof ? 'c1024' : isOffz ? 'c1440' : isOntz ? 'c1920' : 'c'}>
                                <img style={{ backgroundColor: 'transparent' }} height={15} src="https://www.kfcpakistan.com/assets/images/channels/1.png" alt="" />
                                Delivery
                            </button>

                            <button onClick={hideBtn} className={isOwof ? 'c1024' : isOffz ? 'c1440' : isOntz ? 'c1920' : 'c'} >
                                <img style={{ backgroundColor: 'transparent' }} height={18} src="https://www.kfcpakistan.com/assets/images/channels/2.png" alt="" />
                                Pickup
                            </button>

                        </div>


                        <button id='q' className={isOwof ? 'd1024' : isOffz ? 'd1440' : isOntz ? 'd1920' : 'd'}><i className="bi bi-geo-alt-fill"></i> Select Location</button>


                        {
                            isOwof ? (
                                <>
                                    <img style={{ height: '50px', width: '50px', marginLeft: '83.6%', marginTop: '6.5%' }} src="https://www.kfcpakistan.com/static/media/bucket-filled.d2ad11819eca0f28a8ac.svg" alt="" />
                                    {num ? (<button onClick={openSidebar} id='closebtn' className='e' style={{ textDecoration: 'none', backgroundColor: 'transparent', position: 'relative', left: '-12.5%', marginTop: '25px' }}>{num}</button>) : (<button onClick={openSidebar} id='closebtn' className='e' style={{ textDecoration: 'none', backgroundColor: 'transparent', position: 'relative', left: '-12.5%', marginTop: '25px' }}>{num}</button>)}
                                </>

                            )


                                : isOffz ? (
                                    <>
                                        <img style={{ position: 'absolute', left: '70%', top: '18%', height: '70px', width: '60px' }} src="https://www.kfcpakistan.com/static/media/bucket-filled.d2ad11819eca0f28a8ac.svg" alt="" />
                                        {num ? (<button onClick={openSidebar} id='closebtn' className='e' style={{ textDecoration: 'none', backgroundColor: 'transparent', position: 'relative', left: '155%', marginTop: '17px', fontSize: '20px' }}>{num}</button>) : (<button onClick={openSidebar} id='closebtn' className='e' style={{ textDecoration: 'none', backgroundColor: 'transparent', position: 'relative', left: '155%', marginTop: '17px', fontSize: '20px' }}>{num}</button>)}
                                    </>

                                )



                                    : isOntz ? (
                                        <>
                                            <img style={{ position: 'absolute', left: '72%', top: '0%', height: '100%', width: '90px' }} src="https://www.kfcpakistan.com/static/media/bucket-filled.d2ad11819eca0f28a8ac.svg" alt="" />
                                            {num ? (<button onClick={openSidebar} id='closebtn' className='e' style={{ fontSize: '30px', textDecoration: 'none', backgroundColor: 'transparent', position: 'relative', left: '204%', marginTop: '20px' }}>{num}</button>) : (<button onClick={openSidebar} id='closebtn' className='e' style={{ fontSize: '30px', textDecoration: 'none', backgroundColor: 'transparent', position: 'relative', left: '204%', marginTop: '20px' }}>{num}</button>)}
                                        </>

                                    )



                                        :

                                        <>
                                            <img style={{ height: '50px', width: '50px', marginLeft: '215.4%', marginTop: '5.8%' }} src="https://www.kfcpakistan.com/static/media/bucket-filled.d2ad11819eca0f28a8ac.svg" alt="" />
                                            {num ? (<button onClick={openSidebar} id='closebtn' className='e' style={{ textDecoration: 'none', backgroundColor: 'transparent', position: 'relative', right: '55px', marginTop: '24px' }}>{num}</button>) : (<button onClick={openSidebar} id='closebtn' className='e' style={{ textDecoration: 'none', backgroundColor: 'transparent', position: 'relative', left: '204%', marginTop: '20px' }}>{num}</button>)}

                                        </>

                        }



                        <div className={isOwof ? 'collapse navbar-collapse i1024' : isOffz ? 'collapse navbar-collapse i1440' : isOntz ? 'collapse navbar-collapse i1920' : "collapse navbar-collapse i"} id="navbarNav">

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

                        <div className={isOwof ? 'SBH1024' : isOffz ? 'SBH1440' : isOntz ? 'SBH1920' : 'SBH'}>

                            <button className={isOwof ? 'e11024' : isOffz ? 'e11440' : isOntz ? 'e11920' : 'e1'} >{props.num}</button>

                            <div className={isOwof ? 'SBN1024' : isOffz ? 'SBN1440' : isOntz ? 'SBN1920' : 'SBN'}>Your Bucket</div>

                            {num >= 1 ? <div className={isOwof ? 'SBC1024' : isOffz ? 'SBC1440' : isOntz ? 'SBC1920' : 'SBC'}>Rs {itemPrice}</div> : ''}

                            <button className={isOwof ? 'closebtn1024 SBCL1024' : isOffz ? 'closebtn1440 SBCL1440' : isOntz ? 'closebtn1920 SBCL1920' : 'closebtn SBCL'} onClick={closeSideBar} ><i className="bi bi-x-lg"></i></button>
                            {
                                num >= 1 ?
                                    <div className={isOwof ? 'viewB1024' : isOffz ? 'viewB1440' : isOffz ? 'viewB1440' : isOntz ? 'viewB1920' : 'viewB'}>
                                        <Link className={isOwof ? 'zxc1024' : isOffz ? 'zxc1440' : isOffz ? 'zxc1440' : isOntz ? 'zxc1920' : 'zxc'} onClick={closeSideBar} to='/Bucket'>View Bucket</Link>
                                    </div> : ''
                            }
                        </div>


                        <SideBar incre={incre} decre={decre} remove={remove} Num={Num} onRemove={onRemove} Add={Add} />



                    </div>

                </section>

            </div>

        </>
    )
}
