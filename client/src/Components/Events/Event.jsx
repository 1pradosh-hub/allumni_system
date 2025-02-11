import React from 'react'
import './event.css'
import EventCard from './EventCard'
// import event1 from '../../images/event1.jpg'
import Button from '../Buttons/Button'

export default function Event() {

    return (
        <div className="events events-1 ptb-100">
            <div className='container'>
                <div className="default-section-title default-section-title-middle color-title">
                    <span>Alumni Events</span>
                    <h3>Alumnet Events Schedule</h3>
                </div>
                {/* This is photo Section */}
                <div className='section-content'>
                    <div className="row ">
                        <EventCard image={require('../../images/event1.jpg')} date="January 20, 2023" title="West Michigan Chapter Monthly Gathering" locat='25 Street, Brunswick, 3056' />
                        <EventCard image={require('../../images/event2.jpg')} date="January 20, 2023" title="West Michigan Chapter Monthly Gathering" locat='25 Street, Brunswick, 3056' />
                        <EventCard image={require('../../images/event3.jpg')} date="January 20, 2023" title="West Michigan Chapter Monthly Gathering" locat='25 Street, Brunswick, 3056' />
                        <EventCard image={require('../../images/event4.jpg')} date="January 20, 2023" title="West Michigan Chapter Monthly Gathering" locat='25 Street, Brunswick, 3056' />
                    </div>
                </div>
                {/* {card.map((event, index) => (
                    <EventCard key={index} {...event} />
                ))} */}
            </div>
            <Button type="submit" className='default-button default-button-middle mt-30'><span>View All Events</span></Button>
        </div>
    )
}
