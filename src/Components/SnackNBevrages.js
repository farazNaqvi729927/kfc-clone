import React from 'react'
import { Link } from 'react-router-dom'
import BonelessPage from './BonelessPage'
import CrispyDuoPage from './CrispyDuoPage'
import CrispyPage from './CrispyPage'
import Kfc from './logo.png'
import WowPage from './WowPage'

export default function SnackNBevrages(props) {
    const { Add,items10, items11, items12, items13 } = props
    return (
        <div className='u'>
            <nav style={{ zIndex: '1' }} className='navbar fixed-top navbar-expand-lg  navbar-dark bg-black'>
                <div className='a1'>
                    <div id='qq'>
                        <Link className="nav-link active a2" aria-current="page" to="/a1"> Everyday Value</Link>
                    </div>

                    <div id='qq'>
                        <Link className="nav-link active a2" aria-current="page" to="/b1">Ala Carte & Combos</Link>
                    </div>

                    <div id='qq'>
                        <Link className="nav-link active a2" aria-current="page" to="/d1">Sharing</Link>
                    </div>

                    <div id='qq'>
                        <Link className="nav-link active a2 a3" aria-current="page" to="/e1">Snacks & Beverages</Link>
                    </div>
                </div>
            </nav>

            <div className='h1'>
                <p style={{ color: 'white', fontSize: '1.7rem' }}>Snacks & Bevrages</p>
                <div style={{ backgroundColor: '#3F3F3F', width: '900px', marginTop: '15px', height: '2px' }} />
            </div>

            <div className='x'>
                {
                    items12.map((item) => {
                        return <CrispyPage key={item.id} item={item} Add={Add} />

                    })
                }

                {
                    items11.map((item) => {
                        return <BonelessPage key={item.id} item={item} Add={Add} />

                    })
                }

                {
                    items13.map((item) => {
                        return <WowPage key={item.id} item={item} Add={Add} />

                    })
                }

{
                    items10.map((item) => {
                        return <CrispyDuoPage key={item.id} item={item} Add={Add} />

                    })
                }
            </div>

            <div className='o1'>
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
