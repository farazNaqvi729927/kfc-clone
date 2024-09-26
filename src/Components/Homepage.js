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
import { Box } from '@mui/material';

export default function Homepage(props) {
  const { items6, items7, items10, items11 } = props;


  const cate = {
    textDecoration: 'none',
    color: 'white',
    textAlign: 'center'
  }

  return (
    <>

      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
        <Slider />
      </Box>



      <Box sx={{ marginTop: { xs: '1em', sm: '1em', md: '12em', lg: '15em', xl: '15em' } }} className="hh">
        <h1>Browse Categories</h1>
      </Box>



      <div className="t">


        <div className="card yq">

          <Link to="/a1" style={cate}>

            <div className="card-body">
              <img src={everyday} className="card-img-top" alt="..." />
            </div> <h4>Everyday Value</h4>

          </Link>

        </div>




        <div className="card yq">

          <Link to="/b1" style={cate}>
            <div className="card-body">
              <img src={alaCarte} className="card-img-top" alt="..." />
            </div><h4>Ala Carte Combo</h4>
          </Link>

        </div>



        <div className="card yq" >

          <Link to="/d1" style={cate}>

            <div className="card-body">
              <img src={sharing} className="card-img-top" alt="..." />
            </div> <h4>Sharing</h4>

          </Link>

        </div>




        <div className="card yq">

          <Link to="/e1" style={cate}>

            <div className="card-body">
              <img src={Bev} className="card-img-top" alt="..." />
            </div> <h4>Snacks & Beverages</h4>

          </Link>
        </div>


      </div>





      <Box className="h">
        <h1>Top Selling</h1>
      </Box>



      <div className="xx">
        {items6.map((item) => (
          <KBPage key={item.id} item={item} Add={props.Add} />
        ))}

        {items7.map((item) => (
          <SpicePage key={item.id} item={item} Add={props.Add} />
        ))}

        {items10.map((item) => (
          <CrispyDuoPage key={item.id} item={item} Add={props.Add} />
        ))}

        {items11.map((item) => (
          <BonelessPage key={item.id} item={item} Add={props.Add} />
        ))}
      </div>


    </>
  );
}
