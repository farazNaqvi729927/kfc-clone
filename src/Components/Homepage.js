import React from 'react'
import Slider from './Slider'
import { Link } from 'react-router-dom';
import Kfc from './logo.png'
import SpicePage from './SpicePage';
import KBPage from './KBPage';
import BonelessPage from './BonelessPage';
import CrispyDuoPage from './CrispyDuoPage';
import everyday from './EverydayValueH.png';
import alaCarte from './AlaCarteComboH.png';
import sharing from './SharingH.png';
import Bev from './SnackNBevragesH.png';


export default function Homepage(props) {
  const { items6, items7, items10, items11 } = props;


  return (
    <>
      <div style={{ height: '1000px' }}>
        <Slider />
        <div>
          <div className='h'>
            <p>Browse Categories </p>
            <div style={{ backgroundColor: '#3F3F3F', width: '850px', marginTop: '-5px', height: '2px' }} />
          </div>

          <div className='t'>

            <div className='yq'>

              <Link className="nav-link active" aria-current="page" to="/a1">

                <img style={{ height: '5%', width: '70%', marginLeft: '30px' }} src={everyday} alt="" />
                <h5 style={{ marginLeft: '45px' }}>Every Day Value</h5>
                <div style={{ marginLeft: '60px', borderRadius: '3px', backgroundColor: '#E4002B', width: '100px', marginTop: '10px', height: '3.5px' }} />
              </Link>

            </div>

            <div className='yq'>

              <Link className="nav-link active" aria-current="page" to="/b1">
                <img style={{ height: '5%', width: '70%', marginLeft: '30px' }} src={alaCarte} alt="" />
                <h5 style={{ marginLeft: '45px' }}>Ala Carte Combo</h5>
                <div style={{ marginLeft: '60px', borderRadius: '3px', backgroundColor: '#E4002B', width: '100px', marginTop: '10px', height: '3.5px' }} />
              </Link>

            </div>

            <div className='yq'>

              <Link className="nav-link active" aria-current="page" to="/d1">
                <img style={{ height: '5%', width: '70%', marginLeft: '30px' }} src={sharing} alt="" />
                <h5 style={{ marginLeft: '80px' }}>Sharing</h5>
                <div style={{ marginLeft: '60px', borderRadius: '3px', backgroundColor: '#E4002B', width: '100px', marginTop: '10px', height: '3.5px' }} />
              </Link>

            </div>

            <div className='yq'>

              <Link className="nav-link active" aria-current="page" to="/e1">

                <img style={{ height: '5%', width: '70%', marginLeft: '30px' }} src={Bev} alt="" />
                <h5 style={{ marginLeft: '25px' }}>Snacks and Beverages</h5>
                <div style={{ marginLeft: '60px', borderRadius: '3px', backgroundColor: '#E4002B', width: '100px', marginTop: '10px', height: '3.5px' }} />

              </Link>

            </div>

          </div>

        </div>


        <div className='v'>
          <div className='h'>
            <p>Top Selling</p>
            <div style={{ backgroundColor: '#3F3F3F', width: '950px', marginTop: '-5px', height: '2px' }} />
          </div>

          <div className='x'>

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
        </div>

        <div className='o'>
          <div className='p'>
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


      </div>
    </>
  )
}
