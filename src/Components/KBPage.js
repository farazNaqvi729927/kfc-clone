import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';



export default function KBPage(props) {

    const isOwof = useMediaQuery({ query: '(max-width: 1024px)' });
    const isOffz = useMediaQuery({ query: '(max-width: 1440px)' });
    const isOntz = useMediaQuery({ query: '(max-width: 1920px)' });




    return (
        <div className={isOwof ? 'y1024' : 'y'}>
            <Link className="nav-link active" aria-current="page" to={props.item.link}>

                {
                    isOwof ? (
                        <img style={{ height: '10%', width: '70%', marginLeft: '15%' }} src={props.item.image} alt="" />
                    )


                        : isOffz ? (
                            <img style={{ width: '70%', marginLeft: '15%', marginTop: '-5%' }} src={props.item.image} alt="" />
                        )



                        : isOntz ? (
                            <img style={{ width: '70%', marginLeft: '15%', marginTop: '-5%' }} src={props.item.image} alt="" />
                        )

                            :

                            <img style={{ height: '10%', width: '100%' }} src={props.item.image} alt="" />


                }

                <div className={isOwof ? 'kbN1024' : isOffz ? 'kbN1440' : isOntz ? 'kbN1920' : 'kbN'}>{props.item.name}</div>

                <p className={isOwof ? 'kbDesc1024' : isOffz ? 'kbDesc1440' : isOntz ? 'kbDesc1920' : 'kbDesc'}>{props.item.descp}</p>

                <div className={isOwof ? 'kbP1024' : isOffz ? 'kbP1440' : isOntz ? 'kbP1920' : 'kbP'}>
                    Rs {props.item.price}
                </div>


            </Link>

            <button onClick={() => props.Add(props.item)} className={isOwof ? 'bucketB1024' : isOffz ? 'bucketB1440' : isOntz ? 'bucketB1920' : 'bucketB'}>Add to bucket</button>
        </div>

    )
}
