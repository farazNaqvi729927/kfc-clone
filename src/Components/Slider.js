import React, { useEffect } from 'react';
import slide1 from '../Components/SLIDER/Slide1.webp';
import slide2 from '../Components/SLIDER/Slide2.jpg';
import slide3 from '../Components/SLIDER/Slide3.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box } from '@mui/material';



export default function Slider() {

    useEffect(() => {
        AOS.init();
        // Reinitialize carousel to ensure it works after navigation
        const carousel = document.querySelector('.carousel');
        if (carousel) {
            new window.bootstrap.Carousel(carousel);
        }
    }, []);

    

    return (
        <Box className='g'>
            <Box id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <Box className="carousel-inner">
                    <Box className="carousel-item active">
                        <img src={slide1} className="d-block w-100" alt="Slide 1" />
                    </Box>
                    <Box className="carousel-item">
                        <img src={slide2} className="d-block w-100" alt="Slide 2" />
                    </Box>
                    <Box className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="Slide 3" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
