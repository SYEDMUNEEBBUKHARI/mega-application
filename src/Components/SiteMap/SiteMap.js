import React from 'react';
import './SiteMap.css';
import { RiHome4Line, RiArrowDropRightLine } from "react-icons/ri";

function SiteMap() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <ul className="breadcrumb">
                    <RiHome4Line /><RiArrowDropRightLine style={{fontSize: '27px',}} /><li><a href="#">Site Map</a></li>
                </ul>

        <div className="row">
			<div id="content" className="col-sm-12">
				<h5 className="title ml-4">Site Map</h5>
				<div className="row">
					<div className="col-md-5 col-sm-6">
						<ul className="simple-list arrow-list bold-list">
                                <li className="top-li"><RiArrowDropRightLine style={{fontSize: '27px',}} /><a className="first-a">Watches</a>
								<ul>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Men's Watches</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Women's Watches</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Kids' Watches</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Accessories</a> </li>
								</ul>
							</li>
						
							<li className="top-li"><RiArrowDropRightLine style={{fontSize: '27px',}} /><a className="first-a">Health &amp; Beauty</a>
								<ul>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a>Perfumes</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Makeup</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Sun Care</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Skin Care</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Eye Care</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Hair Care</a> </li>
								</ul>
							</li>
							<li className="top-li"><RiArrowDropRightLine style={{fontSize: '27px',}} /><a className="first-a">Kids &amp; Babies</a>
								<ul>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Toys</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Games</a>
										<ul>
											<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">test 25</a>
											</li>
										</ul>
									</li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Puzzles</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Hobbies</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Strollers</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Health &amp; Safety</a> </li>
								</ul>
							</li>
							<li className="top-li"><RiArrowDropRightLine style={{fontSize: '27px',}} /><a className="first-a">Sports</a>
								<ul>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Cycling</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Running</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Swimming</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Football</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Golf</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Windsurfing</a> </li>
								</ul>
							</li>
							<li className="top-li"><RiArrowDropRightLine style={{fontSize: '27px',}} /><a className="first-a">Home &amp; Garden</a>
								<ul>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Bedding</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Food</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Furniture</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Kitchen</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Lighting</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Tools</a> </li>
								</ul>
							</li>
							<li className="top-li"><RiArrowDropRightLine style={{fontSize: '27px',}} /><a className="first-a">Wines &amp; Spirits</a>
								<ul>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Wine</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Whiskey</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Vodka</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Liqueurs</a> </li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="category.html">Beer</a> </li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="col-md-4 col-sm-6">
						<ul className="simple-list arrow-list bold-list">
							<li className="top-li"><RiArrowDropRightLine style={{fontSize: '27px',}} /><a className="first-a">Special Offers</a>
							</li>
							<li className="top-li"><RiArrowDropRightLine style={{fontSize: '27px',}} /><a className="first-a">My Account</a>
								<ul>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="order-history.html">Order History</a>
									</li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="order-information.html">Order Information</a>
									</li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="return.html">Return</a>
									</li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="gift-voucher.html">Gift Voucher</a>
									</li>
								</ul>
							</li>
							<li className="top-li"><RiArrowDropRightLine style={{fontSize: '27px',}} /><a className="first-a">Shopping Cart</a>
							</li>
							<li className="top-li"><RiArrowDropRightLine style={{fontSize: '27px',}} /><a className="first-a">Checkout</a>
							</li>
							<li className="top-li"><RiArrowDropRightLine style={{fontSize: '27px',}} /><a className="first-a">Search</a>
							</li>
							<li>
								<ul className="sitemap">
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="about-us.html">About Us</a>
									</li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="email-template" target="_blank">Email Template Page</a>
									</li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="elements.html">Elements</a>
									</li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="elements-forms.html">Forms</a>
									</li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="careers.html">Careers</a>
									</li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="faq.html">Faq</a>
									</li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="404.html">404</a>
									</li>
									<li><RiArrowDropRightLine style={{fontSize: '27px',}} /><a href="contact-us">Contact Us</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			
				
			</div>
		</div>
            </div>
        </React.Fragment>
    )
}


export default SiteMap;
