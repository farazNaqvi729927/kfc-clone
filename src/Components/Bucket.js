import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';


export default function Bucket(props) {
  const { itemPrice } = props
  const [limit, setLimit] = useState(0);


  const isOwof = useMediaQuery({ query: '(max-width: 1024px)' });
  const isOffz = useMediaQuery({ query: '(max-width: 1440px)' });
  const isOntz = useMediaQuery({ query: '(max-width: 1920px)' });




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

      <div className='bTicks'>


        {

          isOwof ? (
            <div >
              <h4 style={{ marginTop: '-35px', marginLeft: '2px' }}> Checkout Panel</h4>
            </div>
          )

            :
            isOffz ? (
              <div >
                <div style={{ marginTop: '10px', marginLeft: '2px',fontSize:'40px' }}> Checkout Panel</div>
              </div>
            )


              : isOntz ? (
                <div >
                  <h1 style={{ marginTop: '10px', marginLeft: '92px' }}> Checkout Panel</h1>
                </div>
              )


                :

                <>
                  <div className={isOffz ? 'v11440' : 'v1'}>
                    <i style={{ marginLeft: '5px', fontSize: '30px' }} className="bi bi-check2"></i>
                    <p style={{ marginTop: '10px', marginLeft: '2px' }}>Menu</p>
                  </div>

                  <div className='fl'></div>


                  <div className={isOffz ? 'v11440' : 'v1'}>
                    <p style={{ marginTop: '5px', marginLeft: '14px', fontSize: '20px' }}>2</p>
                    <p style={{ marginTop: '10px', marginLeft: '2px' }}>Bucket</p>
                  </div>


                  <div className='fl'></div>


                  <div className={isOffz ? 'v11440' : 'v1'} style={{ marginLeft: '8px', border: '2px solid white' }}>
                    <p style={{ marginTop: '2px', marginLeft: '13px', fontSize: '20px' }}>3</p>
                    <p style={{ marginTop: '10px' }}>Checkout</p>
                  </div>
                </>

        }
      </div>



      {
        isOwof ? (
          <div className='faraz1024'>

            <div className='y11024'>

              <div>
                <textarea style={{ border: 'none', width: '100%' }} onKeyDown={handler} maxLength={200} minLength={0} className='qaq' rows="3" cols="38" />
                <span style={{ display: 'flex' }}>Special Instructions(Optional)</span>
              </div>


              <div className='future'>
                <input id='ip' style={{ backgroundColor: '#1C1816', border: '2px solid #E4002B' }} className="form-check-input" type="checkbox" aria-label="..." />
                <p>Save For Future</p>
                <p style={{ position: 'absolute', left: '59%' }}>{limit}/200</p>
              </div>


              <Link className='cOut1024' to='/h'>
                <div style={{ backgroundColor: '#E4002B', textAlign: 'center', height: '40px', width: '260px', border: 'none', borderRadius: '6px', paddingTop: '8px', cursor: 'pointer' }}>
                  <p style={{ marginTop: '-6%' }}></p> Proceed To Checkout
                </div>
              </Link>
            </div>



            <div className='y111024'>
              <p>Subtotal</p>
              <p style={{ position: 'absolute', right: '20px' }}>Rs {itemPrice}</p>

            </div>

          </div>
        )


          : isOffz ? (
            <div className='faraz1440'>


              <div className='y11440'>

                <div>
                  <textarea style={{ border: 'none', width: '100%' }} onKeyDown={handler} maxLength={200} minLength={0} className='qaq' rows="4" cols="38" />
                  <span style={{ display: 'flex', fontSize: '20px' }}>Special Instructions(Optional)</span>
                </div>


                <div className='future1440'>
                  <input id='ip' style={{ backgroundColor: '#1C1816', border: '2px solid #E4002B' }} className="form-check-input" type="checkbox" aria-label="..." />
                  <p>Save For Future</p>
                  <p style={{ marginLeft: '40%' }}>{limit}/200</p>
                </div>


                <Link className='cOut1440' to='/h'>
                  <div style={{ backgroundColor: '#E4002B', textAlign: 'center', height: '50px', marginTop:'10%', width: '320px', border: 'none', borderRadius: '6px', paddingTop: '10px', cursor: 'pointer' }}>
                    <p style={{ marginTop: '-6%' }}></p> Proceed To Checkout
                  </div>
                </Link>
              </div>




              <div className='y111440'>
                <p>Subtotal</p>
                <p style={{ marginLeft: '50%' }}>Rs {itemPrice}</p>

              </div>

            </div>
          )


            : isOntz ? (
              <div className='faraz1920'>


                <div className='y11920'>

                  <div>
                    <textarea style={{ border: 'none', width: '100%' }} onKeyDown={handler} className='qaq' rows="4" cols="38" />
                    <span style={{ display: 'flex', fontSize: '30px' }}>Special Instructions(Optional)</span>
                  </div>


                  <div className='future1920'>
                    <input id='ip' style={{ backgroundColor: '#1C1816', border: '2px solid #E4002B' }} className="form-check-input" type="checkbox" aria-label="..." />
                    <p>Save For Future</p>
                    <p style={{ marginLeft: '40%' }}>{limit}/200</p>
                  </div>


                  <Link className='cOut1920' to='/h'>
                    <div style={{ backgroundColor: '#E4002B', textAlign: 'center', height: '80px', width: '450px', border: 'none', borderRadius: '6px', paddingTop: '27px', cursor: 'pointer', marginTop: '20%' }}>
                      <p style={{ marginTop: '-6%' }}></p> Proceed To Checkout
                    </div>
                  </Link>
                </div>




                <div className='y111920'>
                  <p>Subtotal</p>
                  <p style={{ marginLeft: '50%' }}>Rs {itemPrice}</p>

                </div>

              </div>
            )




              : (

                <div className='faraz'>

                  {/* <div>
                  {
                    num.map((Item) => {
                      return <div className='bcheck' key={Item.id}>

                        <img className='small1' src={Item.image} alt={Item.name} />

                        <h6 style={{ color: 'white', fontSize: '20px', fontWeight: 'bolder', marginTop: '7px', marginLeft: '15px' }}>{Item.name}</h6>

                        <div style={{ color: 'white', fontWeight: 'bold', position: 'absolute', right: '520px', fontSize: '20px', marginTop: '7px' }}>Rs {Item.qty * Item.price}</div>

                        <p style={{ position: 'absolute', left: '240px', fontSize: '20px', marginTop: '35px' }}>Rs {Item.price}</p>

                        <button className='Btn2111' onClick={() => onremove(Item)} ><i style={{ fontSize: 'large', color: '#E4002B' }} className="bi bi-trash2"></i></button>


                        <div className='count'>

                          {Item.qty < 2 ? (<button className='Btn21' onClick={() => onRemove(Item)}><i style={{ fontSize: 'large' }} className="bi bi-trash2"></i></button>) : (<button className='Btn111' onClick={() => onRemove(Item)}>-</button>)}
                          <div className='Btn11' style={{ color: 'white' }}>{Item.qty}</div>
                          {Item.qty < 10 ? <div ><button className='Btn211' onClick={() => Add(Item)}>+</button></div> : <div><button className='btn211' onClick={() => Add(Item)}>+</button></div>}

                        </div>

                      </div>
                    })
                  }
                </div> */}



                  <div className='y1'>

                    <div>
                      <textarea style={{ border: 'none' }} onKeyDown={handler} maxLength={200} minLength={0} className='qaq' rows="4" cols="38" />
                      <span style={{ display: 'flex' }}>Special Instructions(Optional)</span>
                    </div>


                    <div className='future'>
                      <input id='ip' style={{ backgroundColor: '#1C1816', border: '2px solid #E4002B' }} className="form-check-input" type="checkbox" aria-label="..." />
                      <p>Save For Future</p>
                      <p style={{ position: 'absolute', right: '110px' }}>{limit}/200</p>
                    </div>


                    <Link className='done' to='/h'>
                      <div style={{ textAlign: 'center', height: '50px', width: '320px', border: '2px solid white', borderRadius: '6px', padding: '10px', cursor: 'pointer' }}>
                        Done
                      </div>
                    </Link>


                    <Link className='cOut' to='/h'>
                      <div style={{ backgroundColor: '#E4002B', textAlign: 'center', height: '50px', width: '320px', border: 'none', borderRadius: '6px', padding: '13px', cursor: 'pointer' }}>
                        Proceed To Checkout
                      </div>
                    </Link>
                  </div>



                  <div className='y11'>
                    <p>Subtotal</p>
                    <p style={{ position: 'absolute', right: '20px' }}>Rs {itemPrice}</p>

                  </div>

                </div>

              )
      }


    </>
  )
}
