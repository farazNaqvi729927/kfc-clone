import React, { useEffect } from 'react';
import slide1 from '../Components/SLIDER/Slide1.webp';
import slide2 from '../Components/SLIDER/Slide2.jpg';
import slide3 from '../Components/SLIDER/Slide3.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Slider() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Box>
            <Carousel className='g' controls={false} indicators={false} interval={4000} pause={false}>
                <Carousel.Item>
                    <img src={slide1} className="d-block w-100" alt="Slide 1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide2} className="d-block w-100" alt="Slide 2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide3} className="d-block w-100" alt="Slide 3" />
                </Carousel.Item>
            </Carousel>
        </Box>
    );
}