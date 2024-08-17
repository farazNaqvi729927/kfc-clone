import React, { useEffect } from 'react';
import slide1 from '../Components/SLIDER/Slide1.webp';
import slide2 from '../Components/SLIDER/Slide2.jpg';
import slide3 from '../Components/SLIDER/Slide3.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Slider() {
    const style = {
        borderRadius: '5px',
        height: '780px',
        marginTop: '20px',
    };

    useEffect(() => {
        AOS.init();
        // Reinitialize carousel to ensure it works after navigation
        const carousel = document.querySelector('.carousel');
        if (carousel) {
            new window.bootstrap.Carousel(carousel);
        }
    }, []);

    return (
        <div className='g'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={style} src={slide1} className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img style={style} src={slide2} className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img style={style} src={slide3} className="d-block w-100" alt="Slide 3" />
                    </div>
                </div>
            </div>
        </div>
    );
}
