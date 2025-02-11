import React from 'react'
import { Link } from 'react-router-dom';
import './event.css'

export default function EventCard(props) {
    return (
        <>
            <div className="col-lg-6 col-md-4 col-sm-12 col-12 ">
                <div className="event-card ">
                    <img src={props.image} alt="" className="e-card " />
                    <div className="event-card-text ">
                        <ul>
                            <li><i className="flaticon-schedule"></i>{props.date}</li>
                            <li><i className="flaticon-pin text-light"></i> <Link href="https://goo.gl/maps/ZwGdWWLH3T85zF4a6" target="_blank">{props.locat}</Link></li>

                            <h4><Link to="@">{props.title}</Link></h4>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
