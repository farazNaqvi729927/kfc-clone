import React from 'react'
import { Link } from 'react-router-dom'
import SharePage from './SharePage';
import { useMediaQuery } from 'react-responsive';





export default function Sharing(props) {

    const isOwof = useMediaQuery({ query: '(max-width: 1024px)' });
    const isOffz = useMediaQuery({ query: '(max-width: 1440px)' });
    const isOntz = useMediaQuery({ query: '(max-width: 1920px)' });


    const { Add, items1, items2, items3, items4 } = props



    return (
        <div className='u'>
            <nav style={{ zIndex: '1' }} className='navbar fixed-top navbar-expand-lg  navbar-dark bg-black'>

                <div className={isOwof ? 'a11024' : isOffz ? 'a11440' : isOntz ? 'a11920' : 'a1'}>
                    <div id='qq'>
                        <Link className={isOwof ? "nav-link  active a21024" : isOffz ? "nav-link  active a21440" : isOntz ? "nav-link  active a21920" : 'nav-link  active a2'} aria-current="page" to="/a1"> Everyday Value</Link>
                    </div>

                    <div id='qq'>
                        <Link className={isOwof ? "nav-link  active a21024" : isOffz ? "nav-link  active a21440" : isOntz ? "nav-link  active a21920" : 'nav-link  active a2'} aria-current="page" to="/b1">Ala Carte & Combos</Link>
                    </div>

                    <div id='qq'>
                        <Link className={isOwof ? "nav-link  active a21024 a31024" : isOffz ? "nav-link  active a21440 a31440" : isOntz ? "nav-link  active a21920 a31920" : 'nav-link  active a2 a3'} aria-current="page" to="/d1">Sharing</Link>
                    </div>

                    <div id='qq'>
                        <Link className={isOwof ? "nav-link  active a21024" : isOffz ? "nav-link  active a21440" : isOntz ? "nav-link  active a21920" : 'nav-link  active a2'} aria-current="page" to="/e1">Snacks & Beverages</Link>
                    </div>
                </div>
            </nav>


            {
                isOwof ? (
                    <div className='h11024'>
                        <p style={{ color: 'white', fontSize: '1.5rem', width: '20%' }}>Sharing & Caring</p>
                        <div style={{ backgroundColor: '#3F3F3F', width: '65%', marginTop: '15px', height: '2px' }} />
                    </div>

                )


                    : isOffz ? (
                        <div className='h11440'>
                            <p style={{ color: 'white', fontSize: '2rem', width: '20%' }}>Sharing & Caring</p>
                            <div style={{ backgroundColor: '#3F3F3F', width: '65%', marginTop: '2%', height: '2px', marginLeft: '-2%' }} />
                        </div>

                    )



                        : isOntz ? (
                            <div className='h11920'>
                                <p style={{ color: 'white', fontSize: '3rem', width: '20%' }}>Sharing & Caring</p>
                                <div style={{ backgroundColor: '#3F3F3F', width: '65%', marginTop: '2.5%', height: '2px', marginLeft: '2%' }} />
                            </div>

                        )


                            : (
                                <div className='h1'>
                                    <p style={{ color: 'white', fontSize: '1.7rem' }}>Sharing</p>
                                    <div style={{ backgroundColor: '#3F3F3F', width: '900px', marginTop: '15px', height: '2px' }} />
                                </div>

                            )
            }




            <div className={ isOwof? 'x1024' : isOffz ? 'x1440' : isOntz ? 'x1920' : 'x'}>
                {
                    items1.map((item) => {
                        return <SharePage key={item.id} item={item} Add={Add} />

                    })
                }

                {
                    items2.map((item) => {
                        return <SharePage key={item.id} item={item} Add={Add} />

                    })

                }


                {
                    items3.map((item) => {
                        return <SharePage key={item.id} item={item} Add={Add} />

                    })

                }

                {
                    items4.map((item) => {
                        return <SharePage key={item.id} item={item} Add={Add} />

                    })
                }
            </div>

        </div>
    )
}
