import React from 'react'
import { Link } from 'react-router-dom'
import KBDPage from './KBDPage'
import KBPage from './KBPage'
import SpicePage from './SpicePage'
import ZingPage from './ZingPage'
import { useMediaQuery } from 'react-responsive';





export default function EverydayValue(props) {

  const isOwof = useMediaQuery({ query: '(max-width: 1024px)' });
  const isOffz = useMediaQuery({ query: '(max-width: 1440px)' });
  const isOntz = useMediaQuery({ query: '(max-width: 1920px)' });


  const { Add, items6, items7, items8, items9 } = props;




  return (

    <div className='u'>

      <nav style={{ zIndex: '1' }} className='navbar fixed-top navbar-expand-lg bg-black navbar-dark'>

        <div className={isOwof ? 'a11024' : isOffz ? 'a11440' : isOntz ? 'a11920' : 'a1'}>
          <div className='qq'>
            <Link className={isOwof ? "nav-link  active a21024 a31024" : isOffz ? "nav-link  active a21440 a31440" : isOntz ? "nav-link  active a21920 a31920" : 'nav-link  active a2 a3'} aria-current="page" to="/a1"> Everyday Value</Link>
          </div>

          <div className='qq'>
            <Link className={isOwof ? "nav-link  active a21024" : isOffz ? "nav-link  active a21440" : isOntz ? "nav-link  active a21920" : 'nav-link  active a2'} aria-current="page" to="/b1">Ala Carte & Combos</Link>
          </div>

          <div className='qq'>
            <Link className={isOwof ? "nav-link  active a21024" : isOffz ? "nav-link  active a21440" : isOntz ? "nav-link  active a21920" : 'nav-link  active a2'} aria-current="page" to="/d1">Sharing</Link>
          </div>

          <div className='qq'>
            <Link className={isOwof ? "nav-link  active a21024" : isOffz ? "nav-link  active a21440" : isOntz ? "nav-link  active a21920" : 'nav-link  active a2 '} aria-current="page" to="/e1">Snacks & Beverages</Link>
          </div>

        </div>

      </nav>



      {
        isOwof ? (
          <div className='h11024'>
            <p style={{ color: 'white', fontSize: '1.5rem', width: '20%' }}>Everyday Value</p>
            <div style={{ backgroundColor: '#3F3F3F', width: '65%', marginTop: '15px', height: '2px' }} />
          </div>

        )


        : isOffz ? (
          <div className='h11440'>
            <p style={{ color: 'white', fontSize: '2rem', width: '20%' }}>Everyday Value</p>
            <div style={{ backgroundColor: '#3F3F3F', width: '65%', marginTop: '2%', height: '2px',marginLeft:'-2%' }} />
          </div>

        )


        
        : isOntz ? (
          <div className='h11920'>
            <p style={{ color: 'white', fontSize: '3rem', width: '20%' }}>Everyday Value</p>
            <div style={{ backgroundColor: '#3F3F3F', width: '65%', marginTop: '2.5%', height: '2px',marginLeft:'-2%' }} />
          </div>

        )

          : (
            <div className='h1'>
              <p style={{ color: 'white', fontSize: '1.7rem' }}>Everyday Value</p>
              <div style={{ backgroundColor: '#3F3F3F', width: '900px', marginTop: '15px', height: '2px' }} />
            </div>

          )
      }




      <div className={ isOwof? 'x1024' : isOffz ? 'x1440' : isOntz ? 'x1920' : 'x'}>
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

    </div>
  )
}
