import React from 'react';
import './ContactUs.css';
import { RiHome4Line, RiArrowDropRightLine } from "react-icons/ri";
import { BsHouseDoorFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";


function ContactUs() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <ul className="breadcrumb">
                    <li><a href="#"><RiHome4Line /><RiArrowDropRightLine style={{fontSize: '27px',}} />Page</a></li>
                    <RiArrowDropRightLine style={{fontSize: '27px',}} /><li><a href="#">Contact us</a></li>
                </ul>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title">
                            <h5>Contact Us</h5>
                        </div>
                    
                        <div id="map-container-google-1" className="z-depth-1-half map-container" style={{height: '300px',}}>
                            <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                            style={{border:'0',}} allowfullscreen></iframe>
                        </div>

                <div class="info-contact clearfix">
					<div class="row">
					<div class="col-lg-4 col-sm-4 col-xs-12 info-store">
							<div class="name-store">
								<h5>Your Store</h5>
							</div>
							<address>
								<div class="address clearfix form-group">
									<div class="icon">
										<i class="fa fa-home"></i>
									</div>
									<div class="text"><BsHouseDoorFill className="house-svg mr-3" />My Company, 42 avenue des Champs Elysées 75000 Paris France</div>
								</div>
								<div class="phone form-group">
									<div class="icon">
										<i class="fa fa-phone"></i>
									</div>
									<div class="text"><IoCall className="call-svg mr-3"/>Phone : 0123456789</div>
								</div>
								<div class="comment">             
								Maecenas euismod felis et purus consectetur, quis fermentum velition. Aenean egestas quis turpis vehicula.Maecenas euismod felis et purus consectetur, quis fermentum velition. 
								Aenean egestas quis turpis vehicula.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
								The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
								</div>
							</address>
					</div>

					<div class="col-lg-8 col-sm-8 col-xs-12 contact-form">
						<form action="" method="post" enctype="multipart/form-data" class="form-horizontal">
							<fieldset>
								<h5 className="contact-form-title">Contact Form</h5>
							<div class="form-group required">
                                <label style={{width: '11%', marginLeft: '21px',fontSize: '13px',}}><span className="text-danger">*</span>Your Name</label>
                                <input className="contact-input" type="text" />
							</div>
							<div class="form-group required">
                                <label style={{width: '13%', marginLeft: '5px',fontSize: '13px',}}><span className="text-danger">*</span>Email Address</label>
                                <input className="contact-input" type="text" />
							</div>
							<div class="form-group required" style={{margin: '0 0 -21px 0',}}>
                                <label className="enquiry-label"><span className="text-danger">*</span>Enquiry</label>
                                <textarea name="enquiry" rows="10" id="input-enquiry"></textarea>
							</div>
							</fieldset>
							<div class="contact-form-button mb-5">
								<button class="btn btn-primary buttonGray" type="submit">
									<span>Submit</span>
								</button>
							</div>
						</form>
					</div>
				    </div>
                </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}




export default ContactUs;