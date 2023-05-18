import React,{useEffect}  from 'react'
import slide1 from '../Components/SLIDER/Slide1.webp'
import slide2 from '../Components/SLIDER/Slide2.jpg'
import slide3 from '../Components/SLIDER/Slide3.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Slider() {
    const Style = {
        borderRadius: '5px',
        height: '480px',
        marginTop:'20px'
    }

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className ='g' data-aos='fade-left' data-aos-duration="1000" data-aos-easing="ease-out-cubic">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={Style} src={slide1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={Style} src={slide2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={Style} src={slide3} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>   
        </div>
    )
}
