import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Kfc from './logo.png'

export default function Bucket(props) {
  const { num, onRemove, Add, onremove,itemPrice } = props
  const [limit, setLimit] = useState(0);
  const s = {
    backgroundColor: '#1C1816',
    borderRadius: '7px',
    marginTop: '20px',
    width: '740px',
    height: '160px',
    padding: '15px',
    display: 'flex'
  }

  const handler = (e) => {
    if (limit < 200) {
      setLimit(limit + 1)
    }

    if (limit > 0 && e.key === 'Backspace') {
      setLimit(limit - 1)
    }

    if (limit === 0 && e.key === 'Backspace') {
      setLimit(0)
    }

  }

  return (
    <>
      <div style={{ display: 'flex', marginTop: '150px', color: 'white', justifyContent: 'center' }}>
        <div id='v1'>
          <i style={{ marginLeft: '5px', fontSize: '30px' }} className="bi bi-check2"></i>
          <p style={{ marginTop: '10px', marginLeft: '2px' }}>Menu</p>
        </div>

        <div style={{ backgroundColor: '#E4002B', width: '150px', marginTop: '20px', marginLeft: '10px', height: '1px' }} />


        <div id='v1' style={{ marginLeft: '8px' }}>
          <p style={{ marginTop: '5px', marginLeft: '14px', fontSize: '20px' }}>2</p>
          <p style={{ marginTop: '10px', marginLeft: '2px' }}>Bucket</p>
        </div>

        <div style={{ backgroundColor: '#E4002B', width: '150px', marginLeft: '10px', marginTop: '20px', height: '1px' }} />

        <div id='v1' style={{ marginLeft: '8px', border: '2px solid white' }}>
          <p style={{ marginTop: '2px', marginLeft: '13px', fontSize: '20px' }}>3</p>
          <p style={{ marginTop: '10px' }}>Checkout</p>
        </div>
      </div>




      <div className='faraz' style={{ display: 'flex' }}>
        <div>
          {
            num.map((Item) => {
              return <div style={s} key={Item.id}>
                <img className='small1' src={Item.image} alt={Item.name} />
                <h6 style={{ color: 'white', fontSize: '20px', fontWeight: 'bolder', marginTop: '7px', marginLeft: '15px' }}>{Item.name}</h6>
                <div style={{ color: 'white', fontWeight: 'bold', position: 'absolute', right: '520px', fontSize: '20px', marginTop: '7px' }}>Rs {Item.qty * Item.price}</div>
                <p style={{ position: 'absolute', left: '240px', fontSize: '20px', marginTop: '35px' }}>Rs {Item.price}</p>
                <button className='Btn2111' onClick={() => onremove(Item)} style={{ position: 'absolute', right: '515px', fontSize: '20px', marginTop: '35px' }}><i style={{ fontSize: 'large', color: '#E4002B' }} className="bi bi-trash2"></i></button>

                <div style={{ display: 'flex', position: 'absolute', left: '150px', marginTop: '20px', backgroundColor: 'transparent' }}>
                  {Item.qty < 2 ? (<button className='Btn21' onClick={() => onRemove(Item)}><i style={{ fontSize: 'large' }} className="bi bi-trash2"></i></button>) : (<button className='Btn111' onClick={() => onRemove(Item)}>-</button>)}
                  <div className='Btn11' style={{ color: 'white' }}>{Item.qty}</div>
                  {Item.qty < 10 ? <div ><button className='Btn211' onClick={() => Add(Item)}>+</button></div> : <div><button className='btn211' onClick={() => Add(Item)}>+</button></div>}
                </div>
              </div>
            })
          }
        </div>
        <div className='y1' style={{ marginTop: '15px' }}>
          <div>
            <textarea style={{ border: 'none' }} onKeyDown={handler} maxLength={200} minLength={0} className='qaq' rows="4" cols="38" />
            <span style={{ display: 'flex' }}>Special Instructions(Optional)</span>
          </div>

          <div style={{ display: 'flex', marginTop: '40px', gap: '8px', fontSize: 'large' }}>
            <input id='ip' style={{ backgroundColor: '#1C1816', border: '2px solid #E4002B' }} className="form-check-input" type="checkbox" aria-label="..." />
            <p>Save For Future</p>
            <p style={{ position: 'absolute', right: '110px' }}>{limit}/200</p>
          </div>

          <Link style={{ textDecoration: 'none', color: 'white', marginLeft: '130px' }} to='/h'>
            <div style={{ textAlign: 'center', height: '50px', width: '320px', border: '2px solid white', borderRadius: '6px', padding: '10px', cursor: 'pointer' }}>
              Done
            </div>
          </Link>

          <Link style={{ textDecoration: 'none', color: 'white', marginLeft: '130px' }} to='/h'>
            <div style={{ backgroundColor: '#E4002B', textAlign: 'center', height: '50px', width: '320px', border: 'none', borderRadius: '6px', padding: '13px', cursor: 'pointer' }}>
              Proceed To Checkout
            </div>
          </Link>
        </div>

        <div className='y11'>
          <p>Subtotal</p>
          <p style={{position:'absolute',right:'20px'}}>Rs {itemPrice}</p>
      </div>
      </div>
      

      

      <div className='o2'>
        <div className='p1'>
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
    </>
  )
}
