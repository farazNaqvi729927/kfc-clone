import React from 'react'

export default function item(props) {
  const s = {
    backgroundColor: '#1C1816', 
    borderRadius: '7px',
    marginTop:'8px',
    width:'380px',
    height:'100px',
    padding:'15px',
    display:'flex'
  }
  return (
    <>
        <div style={s}>
          <img className='small' src={props.item.image} alt={props.item.title} />
          <h6 style={{ color: 'white', fontWeight: 'bold',marginTop:'7px',marginLeft:'8px' }}>{props.item.title}</h6>
          <div style={{ color: 'white', fontWeight: 'bold',position:'absolute',right:'10px',marginTop:'7px' }}>{props.item.price}</div>
          
        </div>
    </>
  )
}
