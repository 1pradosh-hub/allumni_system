import React from 'react'
import './footer.css'
import FooterLinks from './FooterLinks'


export default function Footer(props) {

    const quickLinks = [
        { label: 'Career', href: 'webiners.html' },
        { label: 'Legal Information', href: 'privacy.html' },
        { label: 'Credits', href: 'events-committee.html' },
        { label: 'Speakers', href: 'speakers.html' },
        { label: 'Events', href: 'events.html' },
      ];
      const otherPages = [
        { label: 'Courses', href: 'courses.html' },
        { label: 'Log In', href: 'login.html' },
        { label: 'Committee', href: 'events-committee.html' },
        { label: 'Testimonials', href: 'testimonial.html' },
        { label: 'Contact Us', href: 'contact.html' },
      ];

  return (
    <div>
      <div className="footer-group footer-group-1">
            <div className="footer-content ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3  col-md-6 col-sm-6 col-12">
                            <div className="footer-logo-area">
                                <a href="index.html"><img src={props.img} alt="" />{props.title}</a>
                                <p>On the other hand, we denounce whteous indignation and dislike men wh beguiled and demoralized er hand, we denounce indignation and dislike.</p>
                                <div className="footer-social-icons">
                                    <ul>
                                        <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="https://www.pinterest.com/" target="_blank"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3  col-md-6 col-sm-6 col-12">
                            <FooterLinks title="Quick Links" links={quickLinks} />
                        </div>
                        <div className="col-lg-3  col-md-6 col-sm-6 col-12">
                            <FooterLinks title="Other Pages" links={otherPages} />
                        </div>
                        
                        <div className="col-lg-3  col-md-6 col-sm-6 col-12">

                            <div className="footer-links flp footer-contact">
                                <h3>Get In Touch</h3>
                                <div className="footer-contact-card">
                                <i class="fa-solid fa-phone-volume fa"></i>
                                    <p><a href="tel:8002162020">(800) 216 2020</a></p>
                                </div>
                                <div className="footer-contact-card">
                                    <i class="fa-regular fa-envelope fa"></i>
                                    <p><a href="mailto:info@alun.com">pradoshmihir@gmail.com</a></p>
                                </div>
                                <div className="footer-contact-card">
                                <i class="fa-solid fa-location-dot fa"></i>
                                    <p><a href="#" target="_blank">No. 12, Ribon Building, Walse street, Australia</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright bg-F4F9FD">
                <div className="container">
                    <p>© Alumnet is Proudly Owned by <a href="@" target="_blank">PradoshMihirDash</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}
