import React from 'react'
import { Link } from 'react-router-dom'
import KBurgerPage from './KBurgerPage'
import Kfc from './logo.png'
import TPage from './TPage'
import ZBage from './ZBPage'
import ZSCPage from './ZSCPage'
export default function AlaCarteCombo(props) {
  const { Add, items14, items15, items16, items17 } = props

  return (
    <div className='u'>
      <nav style={{ zIndex: '1' }} className='navbar fixed-top navbar-expand-lg  navbar-dark bg-black'>
        <div className='a1'>
          <div id='qq'>
            <Link className="nav-link active a2" aria-current="page" to="/a1"> Everyday Value</Link>
          </div>

          <div id='qq'>
            <Link className="nav-link active a2 a3" aria-current="page" to="/b1">Ala Carte & Combos</Link>
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
        <p style={{ color: 'white', fontSize: '1.7rem' }}>Ale Carte Combo</p>
        <div style={{ backgroundColor: '#3F3F3F', width: '900px', marginTop: '15px', height: '2px' }} />
      </div>

      <div className='x'>
        {
          items14.map((item) => {
            return <TPage key={item.id} item={item} Add={Add} />

          })
        }

        {
          items15.map((item) => {
            return <ZBage key={item.id} item={item} Add={Add} />

          })
        }

        {
          items16.map((item) => {
            return <ZSCPage key={item.id} item={item} Add={Add} />

          })
        }

        {
          items17.map((item) => {
            return <KBurgerPage key={item.id} item={item} Add={Add} />

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
