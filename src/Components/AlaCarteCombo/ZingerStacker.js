import React from 'react'
import { Link } from 'react-router-dom'

export default function ZingerStacker(props) {
  const { items16, Add } = props

  return (
    <div>
      <nav style={{ zIndex: '1' }} className='navbar navbar-expand-lg fixed-top navbar-dark bg-black'>
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

      {
        items16.map((x) => {
          return <div key={x.id}>
            <div className='cb' style={{ color: 'white', height: '450px', marginTop: '200px' }}>
              <div className='zzz'>
                <img src="https://www.kfcpakistan.com/assets/images/bg-ellipse.png" alt="" />
                <img style={{ position: 'absolute', top: '250px', left: '250px', height: '390px' }} src={x.image} alt="" />
              </div>

              <div style={{ marginTop: '60px', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontWeight: 'bold', lineHeight: '1.167' }}>{x.name}</h1>
                <h5 style={{}}>Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun</h5>
                <h2 style={{ fontWeight: 'bold' }}>Rs {x.price}</h2>

                <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                  <button id='qqq' onClick={props.decre}>-</button>
                  <h5 style={{ marginTop: '10px', width: '20px', marginLeft: '5px' }}>{props.count}</h5>
                  {props.count < 10 ? <button id='qqq' onClick={props.incre}>+</button> : <button id='ppp' onClick={props.incre}>+</button>}
                  <button onClick={() => Add(x)} className='ee'>Add to bucket</button>
                </div>
              </div>
            </div>
          </div>
        })

      }
    </div>

  )
}
