import React, { useEffect } from 'react';
import './spon.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

export default function Sponsors() {
    const sponsors = [
        { img: '../../images/br1.png', name: 'Noso' },
        { img: '../../images/br2.png', name: 'Barxa' },
        { img: '../../images/br3.png', name: 'Bimu' },
        { img: '../../images/br4.png', name: 'Oxva' },
        { img: '../../images/br5.png', name: 'Raxa' },
        { img: '../../images/br6.png', name: 'Edot' },
    ];

    useEffect(() => {
        if (window.jQuery) {
            window.jQuery('.owl-carousel').owlCarousel({
                items: 6, 
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    0: { items: 1 },
                    600: { items: 2 },
                    1000: { items: 3 },
                    1200: { items: 4 },
                    1400: { items: 6 },
                },
            });
        }
    }, []);

    return (
        <div className="sponsors ptb-100 shape-background-2">
            <div className="container">
                <div className="default-section-title default-section-title-middle color-title">
                    <span>Our Sponsors</span>
                    <h3>Event Sponsorship</h3>
                </div>
                <div className="section-content">
                    <div className="sponsor-card-slider-area owl-carousel">
                        {sponsors.concat(sponsors).map((sponsor, index) => (
                            <div className="sponser-card" key={index}>
                            <img src={sponsor.img} alt="iamge" />
                                <h4>{sponsor.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}