import React from 'react'
import { Link } from 'react-router-dom'
import KBDPage from './KBDPage'
import KBPage from './KBPage'
import Kfc from './logo.png'
import SpicePage from './SpicePage'
import ZingPage from './ZingPage'
export default function EverydayValue(props) {
  const { Add, items6, items7, items8, items9 } = props

  return (
    <div className='u'>
      <nav style={{ zIndex: '1' }} className='navbar fixed-top navbar-expand-lg bg-black navbar-dark'>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='a1'>
          <div id='qq'>
            <Link className="nav-link  active a2 a3" aria-current="page" to="/a1"> Everyday Value</Link>
          </div>

          <div id='qq'>
            <Link className="nav-link active a2 " aria-current="page" to="/b1">Ala Carte & Combos</Link>
          </div>

          <div id='qq'>
            <Link className="nav-link active a2" aria-current="page" to="/d1">Sharing</Link>
          </div>

          <div id='qq'>
            <Link className="nav-link active a2" aria-current="page" to="/e1">Snacks & Beverages</Link>
          </div>

        </div>
      </nav>
      <div className='h1'>
        <p style={{ color: 'white', fontSize: '1.7rem' }}>Everyday Value</p>
        <div style={{ backgroundColor: '#3F3F3F', width: '900px', marginTop: '15px', height: '2px' }} />
      </div>

      <div className='x'>
        <>
          {

            items6.map((item) => {

              return <KBPage key={item.id} item={item} Add={Add} />
            })

          }

          {
            items7.map((item) => {
              return <SpicePage key={item.id} item={item} Add={Add} />

            }
            )
          }

          {
            items8.map((item) => {
              return <ZingPage key={item.id} item={item} Add={Add} />

            }
            )
          }

          {
            items9.map((item) => {
              return <KBDPage key={item.id} item={item} Add={Add} />

            }
            )
          }

        </>
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
