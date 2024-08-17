import React from 'react'
import Slider from './Slider'
import { Link } from 'react-router-dom';
import SpicePage from './SpicePage';
import KBPage from './KBPage';
import BonelessPage from './BonelessPage';
import CrispyDuoPage from './CrispyDuoPage';
import everyday from './EverydayValueH.png';
import alaCarte from './AlaCarteComboH.png';
import sharing from './SharingH.png';
import Bev from './SnackNBevragesH.png';
import { useMediaQuery } from 'react-responsive';



export default function Homepage(props) {
  const { items6, items7, items10, items11 } = props;

  const isOwof = useMediaQuery({ query: '(max-width: 1024px)' });
  const isOffz = useMediaQuery({ query: '(max-width: 1440px)' });
  const isOntz = useMediaQuery({ query: '(max-width: 1920px)' });


  return (

    <>



      <Slider />

      <div className={isOwof ? 'h1024' : isOffz ? 'h1440' : isOntz ? 'h11920' : 'h'}>


        {
          isOwof ? (
            <>

              <p style={{ fontSize: '25px', marginLeft: '2%', marginTop: '30%' }}>Browse Categories</p>
              <div className='brL1024'></div>
            </>

          )

            : isOffz ? (
              <>

                <div style={{ fontSize: '40px',marginLeft: '2%', marginTop: '15%' }}>Browse Categories</div>
                <div className='brL1440' ></div>
              </>

            )


              : isOntz ? (
                <>

                  <div style={{ fontSize: '45px', marginLeft: '2%', marginTop: '5%' }}>Browse Categories</div>
                  <div className='brL1920' ></div>
                </>

              )

                :
                <>

                  <p>Browse Categories</p>
                  <div className='brL'></div>
                </>

        }


      </div>




      <div className={isOwof ? 't1024' : isOffz ? 't1440' : isOntz ? 't1920' : 't'}>


        <div className={isOwof ? 'yq1024' : isOffz ? 'yq1440' : isOntz ? 'yq1920' : 'yq'}>

          <Link className="nav-link active" aria-current="page" to="/a1">

            {
              isOwof ? (
                <>

                  <img style={{ height: '5%', width: '70%', marginLeft: '20px', marginTop: '15%' }} src={everyday} alt="" />
                  <div style={{ marginLeft: '10%', fontSize: '1rem', width: '100%' }}>Every Day Value</div>

                </>

              )


                : isOffz ? (
                  <>

                    <img style={{ height: '5%', width: '70%', marginLeft: '15%', marginTop: '15%' }} src={everyday} alt="" />
                    <div style={{ marginLeft: '20%', fontSize: '1.5rem', width: '100%' }}>Every Day Value</div>

                  </>

                )



                  : isOntz ? (
                    <>

                      <img style={{ height: '5%', width: '70%', marginLeft: '15%', marginTop: '5%' }} src={everyday} alt="" />
                      <div style={{ marginLeft: '20%', fontSize: '2rem', width: '100%' }}>Every Day Value</div>

                    </>

                  )

                    :
                    (
                      <>
                        <img style={{ height: '5%', width: '70%', marginLeft: '30px' }} src={everyday} alt="" />
                        <div style={{ marginLeft: '45px' }}>Every Day Value</div>
                      </>

                    )
            }


          </Link>


        </div>



        <div className={isOwof ? 'yq1024' : isOffz ? 'yq1440' : isOntz ? 'yq1920' : 'yq'}>

          <Link className="nav-link active" aria-current="page" to="/b1">

            {
              isOwof ? (
                <>

                  <img style={{ height: '5%', width: '70%', marginLeft: '20px', marginTop: '15%' }} src={alaCarte} alt="" />
                  <div style={{ marginLeft: '5%', fontSize: '1rem', width: '100%' }}>Ala Carte Combo</div>

                </>

              )


                : isOffz ? (
                  <>

                    <img style={{ height: '5%', width: '70%', marginLeft: '15%', marginTop: '15%' }} src={alaCarte} alt="" />
                    <div style={{ marginLeft: '15%', fontSize: '1.5rem', width: '100%' }}>Ala Carte Combo</div>

                  </>

                )



                  : isOntz ? (
                    <>

                      <img style={{ height: '5%', width: '70%', marginLeft: '15%', marginTop: '5%' }} src={alaCarte} alt="" />
                      <div style={{ marginLeft: '20%', fontSize: '2rem', width: '100%' }}>Ala Carte Combo</div>

                    </>

                  )

                    :
                    (
                      <>
                        <img style={{ height: '5%', width: '70%', marginLeft: '30px' }} src={everyday} alt="" />
                        <div style={{ marginLeft: '45px' }}>Ala Carte Combo</div>
                      </>

                    )
            }


          </Link>

        </div>



        <div className={isOwof ? 'yq1024' : isOffz ? 'yq1440' : isOntz ? 'yq1920' : 'yq'}>

          <Link className="nav-link active" aria-current="page" to="/d1">

            {
              isOwof ? (
                <>

                  <img style={{ height: '5%', width: '70%', marginLeft: '20px', marginTop: '15%' }} src={sharing} alt="" />
                  <div style={{ marginLeft: '30%', fontSize: '1rem', width: '100%' }}>Sharing</div>

                </>

              )


                : isOffz ? (
                  <>

                    <img style={{ height: '5%', width: '70%', marginLeft: '15%', marginTop: '15%' }} src={sharing} alt="" />
                    <div style={{ marginLeft: '35%', fontSize: '1.5rem', width: '100%' }}>Sharing</div>

                  </>

                )



                  : isOntz ? (
                    <>

                      <img style={{ height: '5%', width: '70%', marginLeft: '15%', marginTop: '5%' }} src={sharing} alt="" />
                      <div style={{ marginLeft: '20%', fontSize: '2rem', width: '100%' }}>sharing</div>

                    </>

                  )



                    :
                    (
                      <>
                        <img style={{ height: '5%', width: '70%', marginLeft: '30px' }} src={everyday} alt="" />
                        <div style={{ marginLeft: '45px' }}>Sharing</div>
                      </>

                    )
            }


          </Link>

        </div>



        <div className={isOwof ? 'yq1024' : isOffz ? 'yq1440' : isOntz ? 'yq1920' : 'yq'}>

          <Link className="nav-link active" aria-current="page" to="/e1">

            {
              isOwof ? (
                <>

                  <img style={{ height: '5%', width: '70%', marginLeft: '20px', marginTop: '15%' }} src={Bev} alt="" />
                  <div style={{ marginLeft: '5%', fontSize: '1rem', width: '100%' }}>Snacks & Beverges </div>

                </>

              )


                : isOffz ? (
                  <>

                    <img style={{ height: '5%', width: '70%', marginLeft: '15%', marginTop: '15%' }} src={Bev} alt="" />
                    <div style={{ marginLeft: '12%', fontSize: '1.5rem', width: '100%' }}>Snacks & Beverages</div>

                  </>

                )


                  : isOntz ? (
                    <>

                      <img style={{ height: '5%', width: '70%', marginLeft: '15%', marginTop: '5%' }} src={Bev} alt="" />
                      <div style={{ marginLeft: '20%', fontSize: '2rem', width: '100%' }}>Snacks & Beverages</div>

                    </>

                  )


                    :
                    (
                      <>
                        <img style={{ height: '5%', width: '70%', marginLeft: '30px' }} src={everyday} alt="" />
                        <div style={{ marginLeft: '45px' }}>Snacks & Beverges</div>
                      </>

                    )
            }


          </Link>

        </div>

      </div>




      <div className={isOwof ? 'h1024' : isOffz ? 'h1440' : isOntz ? 'h1920' : 'h'}>


        {
          isOwof ? (
            <>

              <p >Top Selling</p>
              <div className='tsL1024'></div>
            </>

          )

            : isOffz ? (
              <>

                <div style={{ fontSize: '40px', marginBottom: '1%', marginLeft: '1%' }}>Top Selling</div>
                <div className='tsL1440' ></div>
              </>

            )



              : isOntz ? (
                <>

                  <div style={{ fontSize: '45px', marginLeft: '2%' }}>Top Selling</div>
                  <div className='tsL1920' ></div>
                </>

              )


                :
                <>

                  <p>Top Selling</p>
                  <div className='tsL'></div>
                </>

        }


      </div>



      <div className={isOwof ? 'x1024' : isOffz ? 'x1440' : isOntz ? 'x1920' : 'x'}>

        {
          items6.map((item) => {
            return <KBPage key={item.id} item={item} Add={props.Add} />

          })
        }

        {
          items7.map((item) => {
            return <SpicePage key={item.id} item={item} Add={props.Add} />

          })
        }

        {
          items10.map((item) => {
            return <CrispyDuoPage key={item.id} item={item} Add={props.Add} />

          })
        }

        {
          items11.map((item) => {
            return <BonelessPage key={item.id} item={item} Add={props.Add} />

          })
        }
      </div>


    </>
  )


}


