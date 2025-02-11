import React from 'react'
import EventCard from '../Events/EventCard'

export default function Blog() {
    return (
        <div className='"blog shape-background-1 ptb-100'>
            <div className="container">
                <div className="default-section-title default-section-title-middle color-title">
                    <span>Our Blog</span>
                    <h3 id='blg'>Latest News &amp; Blogs</h3>
                </div>

                <div className="section-content">
                    <div className="row justify-content-center">
                    <EventCard image={require('../../images/blog4.jpg')} date="January 20, 2023" title="Objectives Should Be Stated Clearly" locat='25 Street, Brunswick, 3056' />
                    <EventCard image={require('../../images/blog5.jpg')} date="January 20, 2023" title="Learning To Take Your Life Into Your Own" locat='25 Street, Brunswick, 3056' />
                    <EventCard image={require('../../images/blog6.jpg')} date="January 20, 2023" title="Lenrned To Treat People Not Patients" locat='25 Street, Brunswick, 3056' />
                    </div>
                </div>

            </div>
        </div>
    )
}
