import React from 'react';
import { useMediaQuery } from 'react-responsive';


export default function SideBar(props) {

  const isOwof = useMediaQuery({ query: '(max-width: 1024px)' });
  const isOffz = useMediaQuery({ query: '(max-width: 1440px)' });
  const isOntz = useMediaQuery({ query: '(max-width: 1920px)' });


  const { Num, onRemove, Add } = props





  return (
    <div>
      <div style={{ marginTop: '100px', position: 'absolute', left: '10px' }}>
        {
          Num < 1 &&
          <div style={{ color: 'white', width: '370px', marginTop: '180px' }}><br />
            <p className={isOwof ? 'sbemptyB1024' : isOffz ? 'sbemptyB1440' : isOntz ? 'sbemptyB1920' : 'sbemptyB'}>You havent added any items in bucket yet !</p> </div>
        }


        {
          isOwof ? (


            Num.map((Item) => {
              return <div className='sbItem1024' key={Item.id}>

                <img src={Item.image} alt={Item.name} />

                <div style={{ fontSize: '14px', marginRight: '5%', color: 'white', fontWeight: 'bold', marginTop: '7px', marginLeft: '2%' }}>{Item.name}</div>

                <div style={{ fontSize: '15px', color: 'white', fontWeight: 'bold', position: 'absolute', left: '70%', marginTop: '18%' }}>Rs {Item.qty * Item.price}</div>


                <div style={{ display: 'flex' }}>

                  {Item.qty < 2 ? (<button style={{ marginLeft: '15%', marginBottom: '10px', backgroundColor: 'transparent', color: '#E4002B', marginTop: '17.2%', position: 'absolute', left: '20%', border: 'none' }} onClick={() => onRemove(Item)}><i style={{ fontSize: 'small' }} className="bi bi-trash2"></i></button>) : (<button className='Btn1024' onClick={() => onRemove(Item)}>-</button>)}

                  <div className='Btn11024' style={{ color: 'white', fontWeight: 'bold' }}>{Item.qty}</div>

                  {Item.qty < 10 ? <div ><button className='Btn21024' onClick={() => Add(Item)}>+</button></div> : <div  ><button className='btn21024' onClick={() => Add(Item)}>+</button></div>}

                </div>

              </div>
            })


          )

            :

            isOffz ? (

              Num.map((Item) => {
                return <div className='sbItem1440' key={Item.id}>

                  <img style={{ width: '30%', height: '100px', marginTop: '-8%', marginLeft: '-1%' }} src={Item.image} alt={Item.name} />

                  <div style={{ fontSize: '20px', marginRight: '5%', color: 'white', fontWeight: 'bold', marginTop: '7px', marginLeft: '2%' }}>{Item.name}</div>

                  <div style={{ fontSize: '20px', color: 'white', fontWeight: 'bold', position: 'absolute', left: '70%', marginTop: '13%' }}>Rs {Item.qty * Item.price}</div>


                  <div style={{ display: 'flex' }}>

                    {Item.qty < 2 ? (<button style={{ backgroundColor: 'transparent', color: '#E4002B', marginTop: '14%', position: 'absolute', left: '36%', border: 'none' }} onClick={() => onRemove(Item)}><i style={{ fontSize: 'large' }} className="bi bi-trash2"></i></button>) : (<button className='Btn1440' onClick={() => onRemove(Item)}>-</button>)}

                    <div className='Btn11440' style={{ color: 'white', fontWeight: 'bold' }}>{Item.qty}</div>

                    {Item.qty < 10 ? <div ><button className='Btn21440' onClick={() => Add(Item)}>+</button></div> : <div  ><button className='btn21440' onClick={() => Add(Item)}>+</button></div>}

                  </div>

                </div>
              })


            )

              :

              isOntz ? (


                Num.map((Item) => {
                  return <div className='sbItem1920' key={Item.id}>

                    <img style={{ width: '100px', height: '100%', marginTop: '-5%', marginLeft: '-1%' }} src={Item.image} alt={Item.name} />

                    <div style={{ fontSize: '28px', color: 'white', fontWeight: 'bold', marginTop: '7px', marginLeft: '8%' }}>{Item.name}</div>

                    <div style={{ fontSize: '28px', color: 'white', fontWeight: 'bold', position: 'absolute', left: '70%', marginTop: '13%' }}>Rs {Item.qty * Item.price}</div>


                    <div style={{ display: 'flex' }}>

                      {Item.qty < 2 ? (<button style={{ backgroundColor: 'transparent', color: '#E4002B', marginTop: '12%', position: 'absolute', left: '33.5%', border: 'none' }} onClick={() => onRemove(Item)}><i style={{ fontSize: '30px' }} className="bi bi-trash2"></i></button>) : (<button className='Btn1920' onClick={() => onRemove(Item)}>-</button>)}

                      <div className='Btn11920' style={{ color: 'white', fontWeight: 'bold' }}>{Item.qty}</div>

                      {Item.qty < 10 ? <div ><button className='Btn21920' onClick={() => Add(Item)}>+</button></div> : <div  ><button className='btn21920' onClick={() => Add(Item)}>+</button></div>}

                    </div>

                  </div>
                })


              )


                :

                (


                  Num.map((Item) => {
                    return <div className='sbItem' key={Item.id}>

                      <img style={{ maxWidth: '5rem', height: '70px' }} src={Item.image} alt={Item.name} />

                      <h6 style={{ color: 'white', fontWeight: 'bold', marginTop: '7px', marginLeft: '8px' }}>{Item.name}</h6>

                      <div style={{ color: 'white', fontWeight: 'bold', position: 'absolute', right: '10px', marginTop: '7px' }}>Rs {Item.qty * Item.price}</div>

                      <div style={{ display: 'flex' }}>

                        {Item.qty < 2 ? (<button style={{ marginBottom: '10px', backgroundColor: 'transparent', color: '#E4002B', marginTop: '45px', position: 'absolute', right: '266px', border: 'none' }} onClick={() => onRemove(Item)}><i style={{ fontSize: 'medium' }} className="bi bi-trash2"></i></button>) : (<button className='Btn' onClick={() => onRemove(Item)}>-</button>)}

                        <div className='Btn1' style={{ color: 'white', fontWeight: 'bold' }}>{Item.qty}</div>

                        {Item.qty < 10 ? <div ><button className='Btn2' onClick={() => Add(Item)}>+</button></div> : <div  ><button className='btn2' onClick={() => Add(Item)}>+</button></div>}

                      </div>

                    </div>
                  })

                )
        }




      </div>
    </div>
  )
}
