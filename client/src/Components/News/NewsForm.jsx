import React from 'react'
import ReusableInput from '../Form/Input'
import './news.css'
import Button from '../Buttons/Button'

export default function NewsForm() {

    

    return (
        <div className="newsletter shape-background-1 ptb-100">
            <div className="container ">
                <div className="d-flex align-items-center justify-content-center row text-center">
                    <h1>Signup for Newsletter</h1>

                    <div className='col-lg-6 col-md-8 col-sm-12 col-12'>
                        <div class="newsletter-form-area mt-30">    
                        
                        {/* <div className=' input-group mb-3 h-100 d-flex align-items-center justify-content-center'> */}
                        <div className=' input-group mb-3 f-custom'>
                        <ReusableInput className="form-control input-group-custom" placeholder="Enter Your Email" />
                        <Button className="btn btn-primary btn-sm input-group-text default-button " id="basic-addon2">Subscribe</Button>
                        </div>
                    
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
