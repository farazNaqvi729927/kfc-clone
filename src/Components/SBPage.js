import React from 'react'
import { Link } from 'react-router-dom';
export default function SBPage(props) {
  const s = {
    fontSize: '1.3rem',
    fontFamily: 'National2CondensedBold',
    fontWeight: 300,
    lineHeight: 1.167,
    color: 'white',
    marginTop: '8px'
  }

  return (
    <div className='y'>
      <Link className="nav-link active" aria-current="page" to={props.item.link}>
        <img style={{ height: '10%', width: '100%' }} src={props.item.image} alt="" />
        <div>
          <h6 style={s}>{props.item.name}</h6>
          <p style={{ overflow: 'hidden', color: 'white', fontSize: '0.9rem', paddingTop: '8px', marginBottom: '32px', textOverflow: 'ellipsis' }}>
            {props.item.descp}
          </p>
          <div style={{ display: 'flex' }}>
            <div style={{ color: 'white', fontSize: '25px', fontWeight: '400px' }}>
              Rs {props.item.price}
            </div>

          </div>
        </div>
      </Link>
      <button onClick={() => props.Add(props.item)} id='four'>Add to bucket</button>
    </div>
  )
}