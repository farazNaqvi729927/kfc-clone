import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function FFTHREE() {
  const [count, setCount] = useState(1);

  const incre = ()=>{
    setCount(count + 1);
  }

  const decre = ()=>{
    if(count > 1){
      setCount(count - 1);
    }  
  }


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

      <div className='cb' style={{ color: 'white', height: '450px', marginTop: '200px' }}>
        <div className='zzz'>
          <img src="https://www.kfcpakistan.com/assets/images/bg-ellipse.png" alt="" />
          <img style={{ position: 'absolute', top: '250px', left: '250px', height: '390px' }} src="https://images.kfcpakistan.com/image/1670410866622-image.jpg" alt="" />
        </div>

        <div style={{ marginTop: '60px',justifyContent: 'space-between',alignItems: 'center' }}>
          <h1 style={{ fontWeight: 'bold', lineHeight: '1.167' }}>Family Festival 3</h1>
          <h5 style={{}}>An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Chicken</h5>
          <h2 style={{ fontWeight: 'bold' }}>Rs 2190</h2>

          <div style={{display:'flex',gap:'15px',marginTop:'15px'}}>
            <button id='qqq' onClick={decre}>-</button>
            <h5 style={{marginTop:'10px',width:'20px',marginLeft:'5px'}}>{count}</h5>
            <button id='qqq' onClick={incre}>+</button>
            <button className='ee'>Add to bucket</button>
          </div>
        </div>
      </div>
    </div>
  )
}