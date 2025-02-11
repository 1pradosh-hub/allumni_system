








import React, { useEffect } from 'react'
import './spon.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


export default function Sponsers() {

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
                items: 6, // Display 6 items by default
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                navigation : true,
                singleItem : true,
                transitionStyle : "fade",
                responsive: {
                    0: { items: 1 },     // 1 item for extra-small screens
                    600: { items: 2 },   // 2 items for small screens
                    1000: { items: 3 },  // 3 items for medium screens
                    1200: { items: 4 },  // 4 items for large screens
                    1400: { items: 6 },  // 6 items for extra-large screens
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
                <div className="section-content ">
                    <div className="sponsor-card-slider-area owl-carousel owl-loaded owl-drag owl-theme">
                        <div className="owl-stage-outer">
                            <div className="owl-stage program-placement-logo " style={{ transition: '2s', width: '3949px' }}>
                                {sponsors.map((sponsor, index) => (
                                    <div className="owl-item cloned" key={index} style={{ width: '199.201px', marginRight: '20px' }} >
                                        <div className="sponser-card ">
                                            <img src={sponsor.img} alt="iamge" />
                                            <h4>{sponsor.name}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// style={{transform: 'translate3d(-1670px, 0px, 0px)', transition: '2s', width: '2865px'}}
// style={{width: '171.201px', marginRight: '20px'}}