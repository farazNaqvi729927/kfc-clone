import React from 'react'

export default function SideBar(props) {
  const { Num, onRemove, Add } = props
  const s = {
    backgroundColor: '#1C1816',
    borderRadius: '7px',
    marginTop: '8px',
    width: '380px',
    height: '100px',
    padding: '15px',
    display: 'flex'
  }

  return (
    <div>
      <div style={{ marginTop: '100px', position: 'absolute', left: '10px' }}>
        {
          Num < 1 &&
          <div style={{ color: 'white', width: '370px', marginTop: '180px' }}><img style={{ marginLeft: '40%' }} src="https://www.kfcpakistan.com/assets/images/bucket.png" alt="" /><br />
            <p style={{ textAlign: 'center', fontSize: 'larger' }}>You havent added any items in bucket yet</p> </div>
        }

        {
          Num.map((Item) => {
            return <div style={s} key={Item.id}>
              <img className='small' src={Item.image} alt={Item.name} />
              <h6 style={{ color: 'white', fontWeight: 'bold', marginTop: '7px', marginLeft: '8px' }}>{Item.name}</h6>
              <div style={{ color: 'white', fontWeight: 'bold', position: 'absolute', right: '10px', marginTop: '7px' }}>Rs {Item.qty * Item.price}</div>

              <div style={{ display: 'flex' }}>
                {Item.qty < 2 ? (<button style={{marginBottom: '10px',backgroundColor: 'transparent',color: '#E4002B',marginTop: '45px',zIndex: '1300',position: 'absolute',right: '266px',border: 'none'}} onClick={() => onRemove(Item)}><i style={{ fontSize: 'medium' }} className="bi bi-trash2"></i></button>) : (<button className='Btn' onClick={() => onRemove(Item)}>-</button>)}
                <div className='Btn1' style={{ color: 'white', fontWeight: 'bold' }}>{Item.qty}</div>
                {Item.qty < 10 ? <div ><button className='Btn2' onClick={() => Add(Item)}>+</button></div> : <div  ><button className='btn2' onClick={() => Add(Item)}>+</button></div>}
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
