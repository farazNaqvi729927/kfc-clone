import React from 'react'
import Gif from '../KfcGif.gif'
export default function SignUpGif() {
    const s = {
        width:'100%',
        
        height:'530px'
    }
  return (
    <div>
      <div className='gif'>
      <img style={s} src={Gif} alt="Loading" />
    </div>
    </div>
  )
}
