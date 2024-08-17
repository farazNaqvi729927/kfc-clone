import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';


export default function CrispyBox(props) {


    const isOwof = useMediaQuery({ query: '(max-width: 1024px)' });
    const isOffz = useMediaQuery({ query: '(max-width: 1440px)' });
    const isOntz = useMediaQuery({ query: '(max-width: 1920px)' });


    const { items12, Add } = props

    return (
        <div>
            <nav style={{ zIndex: '1' }} className='navbar navbar-expand-lg fixed-top navbar-dark bg-black'>


                <div className={isOwof ? 'a11024' : isOffz ? 'a11440' : isOntz ? 'a11920' : 'a1'}>
                    <div id='qq'>
                        <Link className={isOwof ? "nav-link  active a21024" : isOffz ? "nav-link  active a21440" : isOntz ? "nav-link  active a21920" : 'nav-link  active a2'} aria-current="page" to="/a1"> Everyday Value</Link>
                    </div>

                    <div id='qq'>
                        <Link className={isOwof ? "nav-link  active a21024" : isOffz ? "nav-link  active a21440" : isOntz ? "nav-link  active a21920" : 'nav-link  active a2'} aria-current="page" to="/b1">Ala Carte & Combos</Link>
                    </div>

                    <div id='qq'>
                        <Link className={isOwof ? "nav-link  active a21024" : isOffz ? "nav-link  active a21440" : isOntz ? "nav-link  active a21920" : 'nav-link  active a2'} aria-current="page" to="/d1">Sharing</Link>
                    </div>

                    <div id='qq'>
                        <Link className={isOwof ? "nav-link  active a21024 a31024" : isOffz ? "nav-link  active a21440 a31440" : isOntz ? "nav-link  active a21920 a31920" : 'nav-link  active a2 a3'} aria-current="page" to="/e1">Snacks & Beverages</Link>
                    </div>
                </div>
            </nav>

            {
                items12.map((x) => {
                    return <div key={x.id}>
                        {
                            isOwof ? (
                                <div className='cb1024'>

                                    <div className='zzz'>

                                        <img src="https://www.kfcpakistan.com/assets/images/bg-ellipse.png" alt="" />
                                        <img style={{ position: 'absolute', top: '28%', left: '18%', height: '40%' }} src={x.image} alt="" />

                                    </div>

                                    <div style={{ marginTop: '20%', marginRight: '14%' }}>

                                        <h3 style={{ fontWeight: 'bold', lineHeight: '1.167' }}>{x.name}</h3>

                                        <h6>Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun</h6>

                                        <h3 style={{ fontWeight: 'bold' }}>Rs {x.price}</h3>

                                        <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>

                                            <button className='qqq1024' onClick={props.decre}>-</button>

                                            <h5 style={{ marginTop: '10px', width: '20px', marginLeft: '5px' }}>{props.count}</h5>

                                            {props.count < 10 ? <button className='qqq1024' onClick={props.incre}>+</button> : <button id='ppp' onClick={props.incre}>+</button>}

                                            <button onClick={() => Add(x)} className='ee1024'>Add to bucket</button>
                                        </div>

                                    </div>

                                </div>
                            )



                                : isOffz ? (
                                    <div className='cb1440'>

                                        <div className='zzz'>

                                            <img src="https://www.kfcpakistan.com/assets/images/bg-ellipse.png" alt="" />
                                            <img style={{ position: 'absolute', top: '28%', left: '18%', height: '40%' }} src={x.image} alt="" />

                                        </div>

                                        <div style={{ marginTop: '25%', marginRight: '14%' }}>

                                            <h1 style={{ fontWeight: 'bold', lineHeight: '1.167' }}>{x.name}</h1>

                                            <h5>Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun</h5>

                                            <h3 style={{ fontWeight: 'bold' }}>Rs {x.price}</h3>

                                            <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>

                                                <button className='qqq1440' onClick={props.decre}>-</button>

                                                <h5 style={{ marginTop: '10px', width: '20px', marginLeft: '5px', fontSize: '30px' }}>{props.count}</h5>

                                                {props.count < 10 ? <button className='qqq1440' onClick={props.incre}>+</button> : <button className='ppp1440' onClick={props.incre}>+</button>}

                                                <button onClick={() => Add(x)} className='ee1440'>Add to bucket</button>
                                            </div>

                                        </div>

                                    </div>
                                )


                                    : isOntz ? (
                                        <div className='cb1920'>

                                            <div className='zzz'>

                                                <img src="https://www.kfcpakistan.com/assets/images/bg-ellipse.png" alt="" />
                                                <img style={{ position: 'absolute', top: '28%', left: '17%', height: '50%' }} src={x.image} alt="" />

                                            </div>

                                            <div style={{ marginTop: '30%', marginRight: '10%' }}>

                                                <div style={{ fontSize: '55px', fontWeight: 'bold', lineHeight: '1.167' }}>{x.name}</div>

                                                <h3>Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun</h3>

                                                <h1 style={{ fontWeight: 'bold' }}>Rs {x.price}</h1>

                                                <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>

                                                    <button className='qqq1920' onClick={props.decre}>-</button>

                                                    <h5 style={{ marginTop: '10px', width: '20px', marginLeft: '5px', fontSize: '35px' }}>{props.count}</h5>

                                                    {props.count < 10 ? <button className='qqq1920' onClick={props.incre}>+</button> : <button className='ppp1920' onClick={props.incre}>+</button>}

                                                    <button onClick={() => Add(x)} className='ee1920'>Add to bucket</button>
                                                </div>

                                            </div>

                                        </div>
                                    )






                                        : (
                                            <div className='cb'>
                                                <div className='zzz'>
                                                    <img alt="" />
                                                    <img style={{ position: 'absolute', top: '150px', left: '250px', height: '390px' }} src={x.image} alt="" />
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

                                        )
                        }
                    </div>
                })

            }
        </div>

    )
}
