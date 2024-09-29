import React, { useState } from "react";
import { AppBar, Box, Toolbar, styled, IconButton, Menu, MenuItem, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import kfc from './logo.png';
import { Link, NavLink } from "react-router-dom";
import SideBar from './SideBar';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: '0.5em'
}));



const MenuBox = styled(Box)(({ theme }) => ({
  display: 'flex', flexWrap: 'nowrap', alignItems: 'center',
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

    <Box sx={{ width: { xs: '350px', sm: '400px', md: '400px', lg: '400px', xl: '500px' }, height: '100%', padding: '1rem' }} role="presentation">

      <Box className='e1'>

        <Box sx={{ fontSize: 'calc(1rem + 0.5vw)', fontWeight: 'bold' }}>{props.num}</Box>
        <Box sx={{ fontSize: 'calc(1rem + 0.5vw)', fontWeight: 'bold' }}>Your Bucket</Box>
        {num >= 1 ? <Box sx={{ fontSize: 'calc(1rem + 0.5vw)', fontWeight: 'bold' }} className='SBC'>Rs {itemPrice}</Box> : ''}

      </Box>


      <SideBar incre={incre} decre={decre} remove={remove} Num={Num} onRemove={onRemove} Add={Add} />

      {num >= 1 ? <div className='viewB'><Link className='zxc' to='/Bucket'>Checkout</Link></div> : ''}

    </Box>

  );




  const navStyle = {
    textAlign: 'center',
    borderRadius: '0.4rem',
    color: 'white',
    textDecoration: 'none',
    alignItems: 'center',
    marginRight: '1.5em',
    justifyContent: 'center',
  };



  const activeStyle = {
    textAlign: 'center',
    borderRadius: '0.4rem',
    color: 'white',
    textDecoration: 'none',
    alignItems: 'center',
    marginRight: '1.5em',
    justifyContent: 'center',
    backgroundColor: '#E4002B',
    padding: '0.3em',

  };





  return (

    <AppBar sx={{ backgroundColor: 'black' }} position="sticky">



      <StyledToolbar>

        <Link to='/'>
          <Box component="img" src={kfc} alt="KFC Logo" sx={{ maxWidth: { xs: '85px', sm: '85px', md: '90px', lg: '90px', xl: '140px' }, height: 'auto' }} />
        </Link>


        <MenuBox>

          <NavLink className='nbLink' to="/" style={({ isActive }) => (isActive ? activeStyle : navStyle)}>Home</NavLink>

          <NavLink className='nbLink' to="/h" style={({ isActive }) => (isActive ? activeStyle : navStyle)}>Login</NavLink>

          <NavLink className='nbLink' to="/a1" style={({ isActive }) => (isActive ? activeStyle : navStyle)}>Everyday Value</NavLink>

          <NavLink className='nbLink' to="/b1" style={({ isActive }) => (isActive ? activeStyle : navStyle)}>Ala Carte</NavLink>

          <NavLink className='nbLink' to="/d1" style={({ isActive }) => (isActive ? activeStyle : navStyle)}>Sharing</NavLink>

          <NavLink className='nbLink' to="/e1" style={({ isActive }) => (isActive ? activeStyle : navStyle)}>Snacks</NavLink>

        </MenuBox>




        <Box sx={{ display: 'flex' }}>

          <Box>

            <div style={{ position: 'relative', cursor: 'pointer' }} onClick={toggleDrawer(true)}>

            <Box component="img" src="https://www.kfcpakistan.com/static/media/bucket-filled.d2ad11819eca0f28a8ac.svg" alt="KFC Logo" sx={{ width: '100%', maxWidth: { xs: '55px', sm: '55px', md: '55px', lg: '70px', xl: '100px' }, height: 'auto' }} />

              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1rem', lg: '1.5rem', xl: '2rem' }, fontWeight: 'bold', color: 'black', }} >
                {num}
              </Box>

            </div>

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


          <MenuItem onClick={handleMenuClose}>
            <Link to="/a1" style={{ textDecoration: 'none', color: 'white' }}>Everyday Value</Link>
          </MenuItem>


          <MenuItem onClick={handleMenuClose}>
            <Link to="/b1" style={{ textDecoration: 'none', color: 'white' }}>Ala Carte Combo</Link>
          </MenuItem>


          <MenuItem onClick={handleMenuClose}>
            <Link to="/d1" style={{ textDecoration: 'none', color: 'white' }}>Sharing</Link>
          </MenuItem>


          <MenuItem onClick={handleMenuClose}>
            <Link to="/e1" style={{ textDecoration: 'none', color: 'white' }}>Snacks</Link>
          </MenuItem>


          <MenuItem onClick={handleMenuClose}>
            <Link to="/h" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
          </MenuItem>

        </Menu>



      </StyledToolbar>




      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} PaperProps={{ sx: { backgroundColor: 'black', color: 'white', } }}>
        {drawerList}
      </Drawer>

    </AppBar>
  );
};

export default Navbar;