import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import kfc from './logo.png';

export default function Footer() {
    return (

        <Box sx={{ backgroundColor: '#1C1816', color: 'white', padding: '2em 0', marginTop: '10em',height:'100%',position:"sticky" }}>

            <Container>

                <Box sx={{ justifyContent: 'center', alignItems: 'center' }}>

                    <Box sx={{ marginBottom: '1em', display: 'flex', justifyContent: 'center' }}>
                        <img src={kfc} alt="KFC Logo" style={{ width: '100px' }} />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1em' }}>

                        <IconButton href="https://www.facebook.com/KFCPakistan" target="_blank" sx={{ color: 'white' }}>
                            <FacebookIcon />
                        </IconButton>

                        <IconButton href="https://twitter.com/KFCPakistan" target="_blank" sx={{ color: 'white' }}>
                            <TwitterIcon />
                        </IconButton>

                        <IconButton href="https://www.instagram.com/kfcpakistanofficial/?hl=en" target="_blank" sx={{ color: 'white' }}>
                            <InstagramIcon />
                        </IconButton>

                        <IconButton href="https://www.youtube.com/@kfcpakistan6047" target="_blank" sx={{ color: 'white' }}>
                            <YouTubeIcon />
                        </IconButton>

                    </Box>

                </Box>




                <Box sx={{ textAlign: 'center', marginTop: '2em', fontSize: { xs: '0.8rem', md: '1rem' } }}>

                    <Typography variant="body2">
                        © {new Date().getFullYear()} KFC Pakistan. All Rights Reserved.
                    </Typography>

                </Box>

            </Container>

        </Box>
    );
}
