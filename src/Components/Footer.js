import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import kfc from './logo.png';

export default function Footer() {
    return (

        <Box sx={{ backgroundColor: '#1C1816', color: 'white', padding: '2em 0', marginTop: '10em', height: '100%', position: "sticky" }}>

            <Container>

                <Box sx={{ justifyContent: 'center', alignItems: 'center' }}>

                    <Box sx={{ marginBottom: '1em', display: 'flex', justifyContent: 'center' }}>
                    <Box component="img" src={kfc} alt="KFC Logo" sx={{ maxWidth: { xs: '85px', sm: '85px', md: '85px', lg: '85px', xl: '110px' }, height: 'auto' }} />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1em' }}>
                        <IconButton href="https://www.facebook.com/KFCPakistan" target="_blank" sx={{ color: 'white' }}>
                            <FacebookIcon sx={{ fontSize: 'clamp(2rem, 1.8rem + 1vw, 2.5rem)' }} /> {/* Increase icon size */}
                        </IconButton>

                        <IconButton href="https://twitter.com/KFCPakistan" target="_blank" sx={{ color: 'white' }}>
                            <TwitterIcon sx={{ fontSize: 'clamp(2rem, 1.8rem + 1vw, 2.5rem)' }} /> {/* Increase icon size */}
                        </IconButton>

                        <IconButton href="https://www.instagram.com/kfcpakistanofficial/?hl=en" target="_blank" sx={{ color: 'white' }}>
                            <InstagramIcon sx={{ fontSize: 'clamp(2rem, 1.8rem + 1vw, 2.5rem)' }} /> {/* Increase icon size */}
                        </IconButton>

                        <IconButton href="https://www.youtube.com/@kfcpakistan6047" target="_blank" sx={{ color: 'white' }}>
                            <YouTubeIcon sx={{ fontSize: 'clamp(2rem, 1.8rem + 1vw, 2.5rem)' }} /> {/* Increase icon size */}
                        </IconButton>
                    </Box>


                </Box>




                <Box >

                    <Typography variant="body2" sx={{ textAlign: 'center', marginTop: '1em', fontSize: 'clamp(1rem, 0.19999999999999996rem + 1.2vw, 2rem)' }}>
                        © {new Date().getFullYear()} KFC Pakistan. All Rights Reserved.
                    </Typography>

                </Box>

            </Container>

        </Box>
    );
}
