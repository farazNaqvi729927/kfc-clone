import React, { useState } from "react";
import { AppBar, Box, Button, Container, Toolbar, styled, IconButton, Menu, MenuItem, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import kfc from './logo.png';
import { Link } from "react-router-dom";
import SideBar from './SideBar';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: '0.5em'
}));



const MenuBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "50px",
  [theme.breakpoints.down('md')]: {
    display: "none"
  },
}));





const Navbar = (props) => {
  const { remove, num, Num, itemPrice, onRemove, Add, incre, decre } = props;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);


  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
  };



  // Functions to control the side drawer
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };



  // Content of the Drawer
  const drawerList = (

    <Box sx={{ width: { xs: '300px', sm: '400px', md: '400px', lg: '400px', xl: '400px' }, height: '100%', padding: '1rem' }} role="presentation">

      <Box className='e1'>

        <Box sx={{ fontSize: 'calc(1rem + 0.5vw)', fontWeight: 'bold' }}>{props.num}</Box>
        <Box sx={{ fontSize: 'calc(1rem + 0.5vw)', fontWeight: 'bold' }}>Your Bucket</Box>
        {num >= 1 ? <Box sx={{ fontSize: 'calc(1rem + 0.5vw)', fontWeight: 'bold' }} className='SBC'>Rs {itemPrice}</Box> : ''}
        {/* <i className="bi bi-x-lg"></i> */}

      </Box>


      <SideBar incre={incre} decre={decre} remove={remove} Num={Num} onRemove={onRemove} Add={Add} />

      {num >= 1 ? <div className='viewB'><Link className='zxc' to='/Bucket'>Checkout</Link></div> : ''}

    </Box>

  );





  return (

    <AppBar sx={{ backgroundColor: 'black', alignItems: 'center' }} position="sticky">

      <Container>

        <StyledToolbar>

          <Link to='/'><img src={kfc} style={{ maxWidth: '75px' }} alt="KFC Logo" /></Link>


          <MenuBox>

            <Link className='NBhover' style={{ color: 'white', textDecoration: 'none', borderRadius: '0.2rem' }} to="a1" >
              Everyday Value
            </Link>


            <Link className='NBhover' style={{ color: 'white', textDecoration: 'none', borderRadius: '0.2rem' }} to="b1" >
              Ala Carte Combo
            </Link>


            <Link className='NBhover' style={{ color: 'white', textDecoration: 'none', borderRadius: '0.2rem' }} to="d1" >
              Sharing
            </Link>

          </MenuBox>



          <Box sx={{ display: 'flex' }}>

            <Box>

              <div style={{ position: 'relative', cursor: 'pointer' }} onClick={toggleDrawer(true)}>

                <img style={{ height: '60px', width: '60px' }} src="https://www.kfcpakistan.com/static/media/bucket-filled.d2ad11819eca0f28a8ac.svg" alt="View Bucket" />
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 'calc(1rem + 0.5vw)', fontWeight: 'bold', color: 'black', }} >
                  {num}
                </Box>

              </div>

            </Box>



            {/* <Typography sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }} fontWeight='bold' fontSize='calc(1rem + 1vw)'>
              Welcome!
            </Typography> */}

            <Box sx={{ marginTop: '1em', backgroundColor: '#E4002B', borderRadius: '0.2rem', height: '40px', display: { xs: 'none', sm: 'none', md: 'block' } }}>
              <Button sx={{ color: 'white', alignItems: 'center' }} to="h">Login</Button>
            </Box>


          </Box>



          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'block', md: 'none' } }} onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>



          <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            PaperProps={{
              style: {
                backgroundColor: '#2E2925', // Forcing the background color
                color: 'white', // Forcing the text color
              },
            }}
          >

            <MenuItem onClick={handleMenuClose} >
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            </MenuItem>


            <MenuItem onClick={handleMenuClose} sx={{ marginTop: '0.5em' }}>
              <Link to="/a1" style={{ textDecoration: 'none', color: 'white' }}>Everyday Value</Link>
            </MenuItem>


            <MenuItem onClick={handleMenuClose} sx={{ marginTop: '0.5em' }}>
              <Link to="/b1" style={{ textDecoration: 'none', color: 'white' }}>Ala Carte Combo</Link>
            </MenuItem>


            <MenuItem onClick={handleMenuClose} sx={{ marginTop: '0.5em' }}>
              <Link to="/d1" style={{ textDecoration: 'none', color: 'white' }}>Sharing</Link>
            </MenuItem>


            <MenuItem onClick={handleMenuClose} sx={{ marginTop: '0.5em' }}>
              <Link to="/h" style={{ textDecoration: 'none', color: 'white' }}>Sign in</Link>
            </MenuItem>


            <MenuItem onClick={handleMenuClose} sx={{ marginTop: '0.5em' }}>
              <Link to="/Bucket" style={{ textDecoration: 'none', color: 'white' }}>Checkout</Link>
            </MenuItem>

          </Menu>



        </StyledToolbar>

      </Container>



      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} PaperProps={{ sx: { backgroundColor: 'black', color: 'white', } }}>
        {drawerList}
      </Drawer>

    </AppBar>
  );
};

export default Navbar;
