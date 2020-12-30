import React from 'react';
import './AboutUs.css';
import { RiHome4Line, RiArrowDropRightLine } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import About from "../../Assets/images/about-us.jpg";


function AboutUs() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <ul className="breadcrumb">
                    <li><a href="#"><RiHome4Line /><RiArrowDropRightLine style={{fontSize: '27px',}} />Page</a></li>
                    <RiArrowDropRightLine style={{fontSize: '27px',}} /><li><a href="#">About Us</a></li>
                </ul>


                <div className="row">
                    <div className="col-md-9">
                        <div className="title-about-us">
                            <h2>Welcome To Shop</h2>
                        </div>
                        <div className="content-about-us">
                            <div className="image-about-us">
                                <img src={About} alt="Image Client" />
                            </div>
                            <div className="des-about-us">Nulla auctor mauris ut dui luctus semper. In hac habitasse platea dictumst. Duis pellentesque ligula a risus suscipit dignissim. Nunc non nisl lacus. Integer pharetra lacinia dapibus. Donec eu dolor dui, vel posuere mauris.
                                <br />
                                <br />Pellentesque semper congue sodales. In consequat, metus eget con sequat ornare, augue dolor blandit purus, vitae lacinia nisi tellus in erat. Nulla ac justo eget massa aliquet sodales. Maecenas mattis male suada sem, in fringilla massa dapibus quis. Suspendisse aliquam leo id neque auctor molestie. Etiam at nulla tellus.
                                <br />
                                <br />Nulla auctor mauris ut dui luctus semper. In hac habitasse platea dictumst. Duis pellentesque ligula a risus suscipit dignissim.</div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="title-about-us">
                            <h2>Why Choose Us</h2>
                        </div>
                        <div class="content-why">
                            <ul class="why-list">
                                <li><BsCheck /><a className="right-line" title="Shipping &amp; Returns" href="#">Shipping &amp; Returns</a>
                                </li>
                                <li><BsCheck /><a className="right-line" title="Secure Shopping" href="#">Secure Shopping</a>
                                </li>
                                <li><BsCheck /><a className="right-line" title="International Shipping" href="#">International Shipping</a>
                                </li>
                                <li><BsCheck /><a className="right-line" title="Affiliates" href="#">Affiliates</a>
                                </li>
                                <li><BsCheck /><a className="right-line" title="Group Sales" href="#">Group Sales</a>
                                </li>
                            </ul>
                        </div>
                    </div>








                    <div class="col-md-12 our-member">
                        <div class="title-about-us">
                            <h2>Our Member</h2>
                        </div>
                        <div class="short-des">Consectetur adipiscing elit. Donec pellentesque venenatis elit, quis aliquet mauris malesuada vel. Donec vitae libero dolor, eget dapibus justo.
                            <br />Aenean facilisis aliquet feugiat. Suspendisse lacinia congue est ac semper. Nulla ut elit magna, vitae volutpat magna.</div>
                        <div class="overflow-owl-slider1">
                            <div class="wrapper-owl-slider1">
                                <div class="row slider-ourmember">
                                    <div class="item-about col-lg-6 col-md-6 col-sm-6">
                                        <div class="item respl-item">
                                            <div class="item-inner">
                                                <div class="w-image-box">
                                                    <div class="item-image">
                                                        <a title="Jennifer lawrence" href="#">
                                                            <img src="image/catalog/about/cl-image-1.jpg" alt="Image Client"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="info-member">
                                                    <h2 class="cl-name"><a title="Jennifer lawrence" href="#">Jennifer lawrence</a></h2>
                                                    <p class="cl-job">Art Director</p>
                                                    <p class="cl-des">Donec dignissim, enim ac semper tempus, ligula neque pulvinar mi, sed facilisis arcu placerat consequat</p>
                                                    <ul>
                                                        <li>
                                                            <a class="fa fa-f" title="Facebook" href="#"></a>
                                                        </li>
                                                        <li>
                                                            <a class="fa fa-t" title="Twitter" href="#"></a>
                                                        </li>
                                                        <li>
                                                            <a class="fa fa-g" title="google" href="#"></a>
                                                        </li>
                                                        <li>
                                                            <a class="fa fa-s" title="skyper" href="#"></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item-about col-lg-6 col-md-6 col-sm-6">
                                        <div class="item respl-item">
                                            <div class="item-inner">
                                                <div class="w-image-box">
                                                    <div class="item-image">
                                                        <a title="Jennifer lawrence" href="#">
                                                            <img src="image/catalog/about/cl-image-2.jpg" alt="Image Client"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="info-member">
                                                    <h2 class="cl-name"><a title="Jennifer lawrence" href="#">Jennifer lawrence</a></h2>
                                                    <p class="cl-job">Design Leader</p>
                                                    <p class="cl-des">Donec dignissim, enim ac semper tempus, ligula neque pulvinar mi, sed facilisis arcu placerat consequat</p>
                                                    <ul>
                                                        <li>
                                                            <a class="fa fa-f" title="Facebook" href="#"></a>
                                                        </li>
                                                        <li>
                                                            <a class="fa fa-t" title="Twitter" href="#"></a>
                                                        </li>
                                                        <li>
                                                            <a class="fa fa-g" title="google" href="#"></a>
                                                        </li>
                                                        <li>
                                                            <a class="fa fa-s" title="skyper" href="#"></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item-about col-lg-6 col-md-6 col-sm-6">
                                        <div class="item respl-item">
                                            <div class="item-inner">
                                                <div class="w-image-box">
                                                    <div class="item-image">
                                                        <a title="Jennifer lawrence" href="#">
                                                            <img src="image/catalog/about/cl-image-3.jpg" alt="Image Client"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="info-member">
                                                    <h2 class="cl-name"><a title="Jennifer lawrence" href="#">Jennifer lawrence</a></h2>
                                                    <p class="cl-job">Tech Leader</p>
                                                    <p class="cl-des">Donec dignissim, enim ac semper tempus, ligula neque pulvinar mi, sed facilisis arcu placerat consequat</p>
                                                    <ul>
                                                        <li>
                                                            <a class="fa fa-f" title="Facebook" href="#"></a>
                                                        </li>
                                                        <li>
                                                            <a class="fa fa-t" title="Twitter" href="#"></a>
                                                        </li>
                                                        <li>
                                                            <a class="fa fa-g" title="google" href="#"></a>
                                                        </li>
                                                        <li>
                                                            <a class="fa fa-s" title="skyper" href="#"></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item-about col-lg-6 col-md-6 col-sm-6">
                                        <div class="item respl-item">
                                            <div class="item-inner">
                                                <div class="w-image-box">
                                                    <div class="item-image">
                                                        <a title="Jennifer lawrence" href="#">
                                                            <img src="image/catalog/about/cl-image-4.jpg" alt="Image Client"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="info-member">
                                                    <h2 class="cl-name"><a title="Jennifer lawrence" href="#">Jennifer lawrence</a></h2>
                                                    <p class="cl-job">Manager</p>
                                                    <p class="cl-des">Donec dignissim, enim ac semper tempus, ligula neque pulvinar mi, sed facilisis arcu placerat consequat</p>
                                                    <ul>
                                                        <li>
                                                            <a class="fa fa-f" title="Facebook" href="#"></a>
                                                        </li>
                                                        <li>
                                                            <a class="fa fa-t" title="Twitter" href="#"></a>
                                                        </li>
                                                        <li>
                                                            <a class="fa fa-g" title="google" href="#"></a>
                                                        </li>
                                                        <li>
                                                            <a class="fa fa-s" title="skyper" href="#"></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </React.Fragment>
    )
}





export default AboutUs;