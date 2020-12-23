import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterest, FaRegDotCircle } from "react-icons/fa";
import logofooter from "../../Assets/images/logo-footer.png";
import payment from "../../Assets/images/payment.png";

function Footer() {
    return (
            <>
                <section className="newsletter_area">
                    <div className="container-fluid">
                        <div className="row mx-3">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="newsletter_inner">
                                    <h5 style={{color: 'white',}}>Subscribe Our Newsletter</h5>
                                    <p style={{background: '#232f3e',color: 'white',}}>We won’t send any kind of spam</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <aside className="newsletter_widget">
                                    <div id="mc_embed_signup">
                                        <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative" novalidate="true">
                                            <div className="input-group d-flex flex-row">
                                                <input name="EMAIL" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'" required="" type="email" />
                                                <div className="subscribe">
                                                    <button className="btn">Subscribe</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <ul class="socials">
                                    <li class="facebook"><a class="_blank" href="" target="_blank"><FaFacebookF /></a></li>
                                    <li class="twitter"><a class="_blank" href="" target="_blank"><FaTwitter /></a></li>
                                    <li class="google_plus"><a class="_blank" href="" target="_blank"><FaGooglePlusG /></a></li>
                                    <li class="pinterest"><a class="_blank" href="" target="_blank"><FaPinterest /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </section>


                    <footer class="footer_area section_gap_top">
		                <div class="container-fluid">
			<div class="row footer_inner mx-3">
				<div class="col-lg-3 col-sm-6">
					<aside class="f_widget ab_widget">
						<a href="#"><img style={{marginBottom: '20px',}} src={logofooter} alt="image" /></a>
						<ul>
                            <li class="adres">
                                    San Luis potosí, centro historico, 78000 san luis potosí, SPL, Mexico
                             </li>
							
                             <li class="phone">
                                    (+0214)0 315 215 - (+0214)0 315 215
                            </li>
							
							<li class="mail">
                                    <a href="mailto:contact@opencartworks.com">contact@opencartworks.com</a>
                            </li>
							<li class="time">
                                    Open time: 8:00AM - 6:00PM
                            </li>
						</ul>
					</aside>
				</div>
				<div class="col-lg-3 col-sm-6">
					<aside class="f_widget ab_widget">
						<div class="f_title">
							<h6>Information</h6>
						</div>
						<ul>
							<li><FaRegDotCircle /><a href="#"></a>Product Tour</li>
                            <li><FaRegDotCircle /><a href="#"></a><a href="#"></a>Pricing</li>
							<li><FaRegDotCircle /><a href="#"></a>Founding Members</li>
							<li><FaRegDotCircle /><a href="#"></a>Case Studies</li>
							<li><FaRegDotCircle /><a href="#"></a>Product Updates</li>
						</ul>
					</aside>
				</div>
				<div class="col-lg-3 col-sm-6">
					<aside class="f_widget ab_widget">
						<div class="f_title">
							<h6>Services</h6>
						</div>
						<ul>
							<li><FaRegDotCircle /><a href="#"></a>Documentation</li>
                            <li><FaRegDotCircle /><a href="#"></a><a href="#"></a>Data Securiry</li>
							<li><FaRegDotCircle /><a href="#"></a>Site Performance</li>
							<li><FaRegDotCircle /><a href="#"></a>Action Plan</li>
							<li><FaRegDotCircle /><a href="#"></a>Resources</li>
						</ul>
					</aside>
				</div>
				<div class="col-lg-3 col-sm-6">
					<aside class="f_widget ab_widget">
						<div class="f_title">
							<h6>Instagram Gallery</h6>
						</div>
						<ul>
							<li><FaRegDotCircle /><a href="#"></a>Terms and conditions</li>
                            <li><FaRegDotCircle /><a href="#"></a><a href="#"></a>Privacy Policy</li>
							<li><FaRegDotCircle /><a href="#"></a>Cookie Information</li>
							<li><FaRegDotCircle /><a href="#"></a>Opt - Out</li>
						</ul>
					</aside>
				</div>

                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-style">
                        <ul class="footer-links font-title">
                            <li><a href="#">Online Shopping</a></li>
                            <li><a href="#">Promotions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Site Map</a></li>
                            <li><a href="#">Orders and Returns</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Most Populars</a></li>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Special Products</a></li>
                            <li><a href="#">Manufacturers</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Payments</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Refunds</a></li>
                            <li><a href="#">Warantee</a></li>
                            <li><a href="#">Promotions</a></li>
                            <li><a href="#">Customer Service</a></li>
                            <li><a href="#">Our Stores</a></li>
                            <li><a href="#">Discount</a></li>
                            <li><a href="#">Checkout</a></li>
                        </ul>
                </div>


                <div class="col-lg-12 col-xs-12 text-center">
                    <div className="payment-method">   
                        <img src={payment} alt="imgpayment" />
                    </div>
                </div>
                
			</div>
			
		</div>

        <div class="footer-bottom ">
            <div class="container">
                <div class="copyright">
                    eMarket © 2020 eMarket Store. All Rights Reserved. Designed by <a href="/" target="_blank">Wasif Qadeer</a>
                </div>
            </div>
        </div>
        
	</footer>
 </>
        
    )
}




export default Footer