import React from "react";

import "./so_megamenu.css";
import "./so_searchpro.css";
import "./so-categories.css";
import "./so-listing-tabs.css";
import "./so-newletter-popup.css";
import "./home2.css";
 import "./home3.css";
import "./home4.css";
import "./responsive.css";
import "./theme.css";
import "./header1.css";





function Navbar(){
    return(
        <>
         
<div className="common-home res layout-1">
    
    <div id="wrapper" className="wrapper-fluid banners-effect-5">
    
        <header id="header" className=" typeheader-1">
        <div className="header-middle">
            <div className="container">
                <div className="row">
                    <div className="navbar-logo col-lg-2 col-md-2 col-sm-12 col-xs-12">
                        <div className="logo"><a href="index.html"><img src="image/catalog/logo.png" title="Your Store" alt="Your Store" /></a></div>
                    </div>

                    <div className="main-menu col-lg-6 col-md-7 ">
                        <div className="responsive so-megamenu megamenu-style-dev">
                            <nav className="navbar-default">
                                <div className=" container-megamenu  horizontal open ">
                                    <div className="navbar-header">
                                        <button type="button" id="show-megamenu" data-toggle="collapse" className="navbar-toggle">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    
                                    <div className="megamenu-wrapper">
                                        <span id="remove-megamenu" className="fa fa-times"></span>
                                        <div className="megamenu-pattern">
                                            <div className="container-mega">
                                                <ul className="megamenu" data-transition="slide" data-animationtime="250">
                                                    <li className="home hover">
                                                        <a href="index.html">Home <b className="caret"></b></a>
                                                        <div className="sub-menu" style={{width:'100%'}} >
                                                            <div className="content" >
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                        <a href="index.html" className="image-link"> 
                                                                            <span className="thumbnail">
                                                                                <img className="img-responsive img-border" src="image/catalog/menu/home-1.jpg" alt=""/>
                                                                                
                                                                            </span> 
                                                                            <h3 className="figcaption">Home page - (Default)</h3> 
                                                                        </a> 
                                                                        
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <a href="home2.html" className="image-link"> 
                                                                            <span className="thumbnail">
                                                                                <img className="img-responsive img-border" src="image/catalog/menu/home-2.jpg" alt=""/>
                                                                               
                                                                            </span> 
                                                                            <h3 className="figcaption">Home page - Layout 2</h3> 
                                                                        </a> 
                                                                        
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <a href="home3.html" className="image-link"> 
                                                                            <span className="thumbnail">
                                                                                <img className="img-responsive img-border" src="image/catalog/menu/home-3.jpg" alt=""/>
                                                                               
                                                                            </span> 
                                                                            <h3 className="figcaption">Home page - Layout 3</h3> 
                                                                        </a> 
                                                                        
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <a href="home4.html" className="image-link"> 
                                                                            <span className="thumbnail">
                                                                                <img className="img-responsive img-border" src="image/catalog/menu/home-4.jpg" alt=""/>
                                                                                
                                                                            </span> 
                                                                            <h3 className="figcaption">Home page - Layout 4</h3> 
                                                                        </a> 
                                                                        
                                                                    </div>
                                                                    
                                                                   
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="with-sub-menu hover">
                                                        <p className="close-menu"></p>
                                                        <a href="#" className="clearfix">
                                                            <strong>Features</strong>
                                                            <img className="label-hot" src="image/catalog/menu/new-icon.png" alt="icon items"/>
                                                            <b className="caret"></b>
                                                        </a>
                                                        <div className="sub-menu" style={{width: '100%',right: 'auto'}}>
                                                            <div className="content" >
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                        <div className="column">
                                                                            <a href="#" className="title-submenu">Listing pages</a>
                                                                            <div>
                                                                                <ul className="row-list">
                                                                                    <li><a href="category.html">Category Page 1 </a></li>
                                                                                    <li><a href="category-v2.html">Category Page 2</a></li>
                                                                                    <li><a href="category-v3.html">Category Page 3</a></li>
                                                                                </ul>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="column">
                                                                            <a href="#" className="title-submenu">Product pages</a>
                                                                            <div>
                                                                                <ul className="row-list">
                                                                                    <li><a href="product.html">Product page 1</a></li>
                                                                                    <li><a href="product-v2.html">Product page 2</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="column">
                                                                            <a href="#" className="title-submenu">Shopping pages</a>
                                                                            <div>
                                                                                <ul className="row-list">
                                                                                    <li><a href="cart.html">Shopping Cart Page</a></li>
                                                                                    <li><a href="checkout.html">Checkout Page</a></li>
                                                                                    <li><a href="compare.html">Compare Page</a></li>
                                                                                    <li><a href="wishlist.html">Wishlist Page</a></li>
                                                                                
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <div className="column">
                                                                            <a href="#" className="title-submenu">My Account pages</a>
                                                                            <div>
                                                                                <ul className="row-list">
                                                                                    <li><a href="login.html">Login Page</a></li>
                                                                                    <li><a href="register.html">Register Page</a></li>
                                                                                    <li><a href="my-account.html">My Account</a></li>
                                                                                    <li><a href="order-history.html">Order History</a></li>
                                                                                    <li><a href="order-information.html">Order Information</a></li>
                                                                                    <li><a href="return.html">Product Returns</a></li>
                                                                                    <li><a href="gift-voucher.html">Gift Voucher</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="with-sub-menu hover">
                                                        <p className="close-menu"></p>
                                                        <a href="#" className="clearfix">
                                                            <strong>Pages</strong>
                                                            <b className="caret"></b>
                                                        </a>
                                                        <div className="sub-menu" style={{width: '40%' }}>
                                                            <div className="content" >
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <ul className="row-list">
                                                                            <li><a className="subcategory_item" href="faq.html">FAQ</a></li>
                                                                            
                                                                            <li><a className="subcategory_item" href="sitemap.html">Site Map</a></li>
                                                                            <li><a className="subcategory_item" href="contact.html">Contact us</a></li>
                                                                            <li><a className="subcategory_item" href="banner-effect.html">Banner Effect</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <ul className="row-list">
                                                                            <li><a className="subcategory_item" href="about-us.html">About Us 1</a></li>
                                                                            <li><a className="subcategory_item" href="about-us-2.html">About Us 2</a></li>
                                                                            <li><a className="subcategory_item" href="about-us-3.html">About Us 3</a></li>
                                                                            <li><a className="subcategory_item" href="about-us-4.html">About Us 4</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="with-sub-menu hover">
                                                        <p className="close-menu"></p>
                                                        <a href="#" className="clearfix">
                                                            <strong>Categories</strong>
                                                            <img className="label-hot" src="image/catalog/menu/hot-icon.png" alt="icon items" />
                                                  
                                                            <b className="caret"></b>
                                                        </a>
                                                        <div className="sub-menu" style={{width: '100%' ,display: 'none'}}>
                                                            <div className="content">
                                                                <div className="row">
                                                                    <div className="col-sm-12">
                                                                        <div className="row">
                                                                            <div className="col-md-3 img img1">
                                                                                <a href="#"><img src="image/catalog/menu/megabanner/image-1.jpg" alt="banner1" /></a>
                                                                            </div>
                                                                            <div className="col-md-3 img img2">
                                                                                <a href="#"><img src="image/catalog/menu/megabanner/image-2.jpg" alt="banner2" /></a>
                                                                            </div>
                                                                            <div className="col-md-3 img img3">
                                                                                <a href="#"><img src="image/catalog/menu/megabanner/image-3.jpg" alt="banner3" /></a>
                                                                            </div>
                                                                            <div className="col-md-3 img img4">
                                                                                <a href="#"><img src="image/catalog/menu/megabanner/image-4.jpg" alt="banner4" /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                        <a href="#" className="title-submenu">Automotive</a>
                                                                        <div className="row">
                                                                            <div className="col-md-12 hover-menu">
                                                                                <div className="menu">
                                                                                    <ul>
                                                                                        <li><a href="#"  className="main-menu">Car Alarms and Security</a></li>
                                                                                        <li><a href="#"  className="main-menu">Car Audio &amp; Speakers</a></li>
                                                                                        <li><a href="#"  className="main-menu">Gadgets &amp; Auto Parts</a></li>
                                                                                        <li><a href="#"  className="main-menu">More Car Accessories</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <a href="#" className="title-submenu">Funitures</a>
                                                                        <div className="row">
                                                                            <div className="col-md-12 hover-menu">
                                                                                <div className="menu">
                                                                                    <ul>
                                                                                        <li><a href="#"  className="main-menu">Bathroom</a></li>
                                                                                        <li><a href="#"  className="main-menu">Bedroom</a></li>
                                                                                        <li><a href="#"  className="main-menu">Decor</a></li>
                                                                                        <li><a href="#"  className="main-menu">Living room</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <a href="#" className="title-submenu">Jewelry &amp; Watches</a>
                                                                        <div className="row">
                                                                            <div className="col-md-12 hover-menu">
                                                                                <div className="menu">
                                                                                    <ul>
                                                                                        <li><a href="#"  className="main-menu">Earings</a></li>
                                                                                        <li><a href="#"  className="main-menu">Wedding Rings</a></li>
                                                                                        <li><a href="#"  className="main-menu">Men Watches</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <a href="#" className="title-submenu">Electronics</a>
                                                                        <div className="row">
                                                                            <div className="col-md-12 hover-menu">
                                                                                <div className="menu">
                                                                                    <ul>
                                                                                        <li><a href="#"  className="main-menu">Computer</a></li>
                                                                                        <li><a href="#"  className="main-menu">Smartphone</a></li>
                                                                                        <li><a href="#"  className="main-menu">Tablets</a></li>
                                                                                        <li><a href="#"  className="main-menu">Monitors</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    
                                                    <li className="">
                                                        <p className="close-menu"></p>
                                                        <a href="#" className="clearfix">
                                                            <strong>Accessories</strong>
                                         
                                                        </a>
                                            
                                                    </li>
                                                    <li className="">
                                                        <p className="close-menu"></p>
                                                        <a href="blog-page.html" className="clearfix">
                                                            <strong>Blog</strong>
                                                            <span className="label"></span>
                                                        </a>
                                                    </li>
                                                    
                                                    
                                                </ul>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="middle-right col-lg-4 col-md-3 col-sm-6 col-xs-8">                  
                        <div className="signin-w  hidden-sm hidden-xs">
                            <ul className="signin-link blank">                            
                                <li className="log login"><i className="fa fa-lock"></i> <a className="link-lg" href="login.html">Login </a> or <a href="register.html">Register</a></li>                                
                            </ul>                       
                        </div>
                        <div className="telephone hidden-xs hidden-sm hidden-md">
                            <ul className="blank"> <li><a href="#"><i className="fa fa-truck"></i>track your order</a></li> <li><a href="#"><i className="fa fa-phone-square"></i>Hotline (+123)4 567 890</a></li> </ul>
                        </div>
                                            
                        
                    </div>
                    
                </div>

            </div>
        </div>

        <div className="header-bottom hidden-compact">
            <div className="container">
                <div className="row">
                    
                    <div className="bottom1 menu-vertical col-lg-2 col-md-3 col-sm-3">
                        <div className="responsive so-megamenu megamenu-style-dev ">
                            <div className="so-vertical-menu ">
                                <nav className="navbar-default">    
                                    
                                    <div className="container-megamenu vertical">
                                        <div id="menuHeading">
                                            <div className="megamenuToogle-wrapper">
                                                <div className="megamenuToogle-pattern">
                                                    <div className="container">
                                                        <div>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                        </div>
                                                        All Categories                          
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     
                                        <div className="navbar-header">
                                            <button type="button" id="show-verticalmenu" data-toggle="collapse" className="navbar-toggle">      
                                                <i className="fa fa-bars"></i>
                                                <span>  All Categories     </span>
                                            </button>
                                        </div>
                                        <div className="vertical-wrapper" >
                                            <span id="remove-verticalmenu" className="fa fa-times"></span>
                                            <div className="megamenu-pattern">
                                                <div className="container-mega">
                                                    <ul className="megamenu">
                                                        <li className="item-vertical  with-sub-menu hover">
                                                            <p className="close-menu"></p>
                                                            <a href="#" className="clearfix">
                                                                <img src="image/catalog/menu/icons/ico10.png" alt="icon"/>
                                                                <span>Gifts & Toys</span>
                                                                <b className="caret"></b>
                                                            </a>
                                                            <div className="sub-menu" data-subwidth="60"  >
                                                                <div className="content" >
                                                                    <div className="row">
                                                                        <div className="col-sm-12">
                                                                            <div className="row">
                                                                                <div className="col-md-4 static-menu">
                                                                                    <div className="menu">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <a href="#"  className="main-menu">Apparel</a>
                                                                                                <ul>
                                                                                                    <li><a href="#" >Accessories for Tablet PC</a></li>
                                                                                                    <li><a href="#" >Accessories for i Pad</a></li>
                                                                                                    <li><a  href="#" >Accessories for iPhone</a></li>
                                                                                                    <li><a href="#" >Bags, Holiday Supplies</a></li>
                                                                                                    <li><a href="#" >Car Alarms and Security</a></li>
                                                                                                    <li><a href="#" >Car Audio &amp; Speakers</a></li>
                                                                                                </ul>
                                                                                            </li>
                                                                                            <li>
                                                                                                <a href="#"  className="main-menu">Cables &amp; Connectors</a>
                                                                                                <ul>
                                                                                                    <li><a href="#" >Cameras &amp; Photo</a></li>
                                                                                                    <li><a href="#" >Electronics</a></li>
                                                                                                    <li><a href="#" >Outdoor &amp; Traveling</a></li>
                                                                                                </ul>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-4 static-menu">
                                                                                    <div className="menu">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <a href="#"  className="main-menu">Camping &amp; Hiking</a>
                                                                                                <ul>
                                                                                                    <li><a href="#" >Earings</a></li>
                                                                                                    <li><a href="#" >Shaving &amp; Hair Removal</a></li>
                                                                                                    <li><a href="#" >Salon &amp; Spa Equipment</a></li>
                                                                                                </ul>
                                                                                            </li>
                                                                                            <li>
                                                                                                <a href="#" className="main-menu">Smartphone &amp; Tablets</a>
                                                                                                <ul>
                                                                                                    <li><a href="#" >Sports &amp; Outdoors</a></li>
                                                                                                    <li><a href="#" >Bath &amp; Body</a></li>
                                                                                                    <li><a href="#" >Gadgets &amp; Auto Parts</a></li>
                                                                                                </ul>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-4 static-menu">
                                                                                    <div className="menu">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <a href="#"  className="main-menu">Bags, Holiday Supplies</a>
                                                                                                <ul>
                                                                                                    <li><a href="#">Battereries &amp; Chargers</a></li>
                                                                                                    <li><a href="#" >Bath &amp; Body</a></li>
                                                                                                    <li><a href="#">Headphones, Headsets</a></li>
                                                                                                    <li><a href="#">Home Audio</a></li>
                                                                                                </ul>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="item-vertical">
                                                            <p className="close-menu"></p>
                                                            <a href="#" className="clearfix">
                                                                <img src="image/catalog/menu/icons/ico1.png" alt="icon"/>
                                                                <span>Fashion & Accessories</span>
                                                                
                                                            </a>
                                                        </li>
                                                        <li className="item-vertical  style1 with-sub-menu hover">
                                                            <p className="close-menu"></p>
                                                            <a href="#" className="clearfix">
                                                                <span className="label"></span>
                                                                <img src="image/catalog/menu/icons/ico9.png" alt="icon"/>
                                                                <span>Electronic</span>
                                                                 
                                                                <b className="caret"></b>
                                                            </a>
                                                            <div className="sub-menu" data-subwidth="40" >
                                                                <div className="content">
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="row">
                                                                                <div className="col-md-12 static-menu">
                                                                                    <div className="menu">
                                                                                        <ul>
                                                                                            <li><a href="#" className="main-menu">Smartphone</a>
                                                                                                <ul>
                                                                                                    <li><a href="#">Esdipiscing</a>
                                                                                                    </li>
                                                                                                    <li><a href="#">Scanners</a>
                                                                                                    </li>
                                                                                                    <li><a href="#">Apple</a>
                                                                                                    </li>
                                                                                                    <li><a href="#">Dell</a>
                                                                                                    </li>
                                                                                                    <li><a href="#">Scanners</a>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </li>
                                                                                            <li><a href="#" className="main-menu">Electronics</a>
                                                                                                <ul>
                                                                                                    <li><a href="#">Asdipiscing</a>
                                                                                                    </li>
                                                                                                    <li><a href="#">Diam sit</a>
                                                                                                    </li>
                                                                                                    <li><a href="#">Labore et</a>
                                                                                                    </li>
                                                                                                    <li><a href="#">Monitors</a>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="row banner">
                                                                                <a href="#">
                                                                                    <img src="image/catalog/menu/megabanner/vbanner1.jpg" alt="banner1"/>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="item-vertical with-sub-menu hover">
                                                                <p className="close-menu"></p>
                                                                <a href="#" className="clearfix">
                                                                     <img src="image/catalog/menu/icons/ico7.png" alt="icon"/>
                                                                    <span>Health &amp; Beauty</span>
                                                                    <b className="caret"></b>
                                                                </a>
                                                                <div className="sub-menu" data-subwidth="60" >
                                                                    <div className="content" >
                                                                        <div className="row">
                                                                            <div className="col-md-12">
                                                                                <div className="row">
                                                                                    <div className="col-md-4 static-menu">
                                                                                        <div className="menu">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <a href="#" className="main-menu">Car Alarms and Security</a>
                                                                                                    <ul>
                                                                                                        <li><a href="#" >Car Audio &amp; Speakers</a></li>
                                                                                                        <li><a href="#" >Gadgets &amp; Auto Parts</a></li>
                                                                                                        <li><a href="#" >Gadgets &amp; Auto Parts</a></li>
                                                                                                        <li><a href="#" >Headphones, Headsets</a></li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="24.html" onclick="window.location = '24.html';" className="main-menu">Health &amp; Beauty</a>
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            <a href="#" >Home Audio</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#" >Helicopters &amp; Parts</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#" >Outdoor &amp; Traveling</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#">Toys &amp; Hobbies</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-4 static-menu">
                                                                                        <div className="menu">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <a href="#"  className="main-menu">Electronics</a>
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            <a href="#">Earings</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#" >Salon &amp; Spa Equipment</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#" >Shaving &amp; Hair Removal</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#">Smartphone &amp; Tablets</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="#"  className="main-menu">Sports &amp; Outdoors</a>
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            <a href="#" >Flashlights &amp; Lamps</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#" >Fragrances</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#" >Fishing</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#" >FPV System &amp; Parts</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-4 static-menu">
                                                                                        <div className="menu">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <a href="#" className="main-menu">More Car Accessories</a>
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            <a href="#" >Lighter &amp; Cigar Supplies</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#" >Mp3 Players &amp; Accessories</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#" >Men Watches</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#" >Mobile Accessories</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="#" className="main-menu">Gadgets &amp; Auto Parts</a>
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            <a href="#" >Gift &amp; Lifestyle Gadgets</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#" >Gift for Man</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#" >Gift for Woman</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#" >Gift for Woman</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="item-vertical css-menu with-sub-menu hover">
                                                                <p className="close-menu"></p>
                                                                <a href="#" className="clearfix">
                                                                    
                                                                     <img src="image/catalog/menu/icons/ico6.png" alt="icon"/>
                                                                    <span>Smartphone &amp; Tablets</span>
                                                                    <b className="caret"></b>
                                                                </a>
                                                                <div className="sub-menu" data-subwidth="20">
                                                                    <div className="content" >
                                                                        <div className="row">
                                                                            <div className="col-sm-12">
                                                                                <div className="row">
                                                                                    <div className="col-sm-12 hover-menu">
                                                                                        <div className="menu">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <a href="#" className="main-menu">Headphones, Headsets</a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="#" className="main-menu">Home Audio</a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="#" className="main-menu">Health &amp; Beauty</a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="#" className="main-menu">Helicopters &amp; Parts</a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="#" className="main-menu">Helicopters &amp; Parts</a>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="item-vertical">
                                                                <p className="close-menu"></p>
                                                                <a href="#" className="clearfix">
                                                                     <img src="image/catalog/menu/icons/ico5.png" alt="icon"/>
                                                                    <span>Health & Beauty</span>
                                                                    
                                                                </a>
                                                            </li>
                                                            <li className="item-vertical">
                                                                <p className="close-menu"></p>
                                                                <a href="#" className="clearfix">
                                                                     <img src="image/catalog/menu/icons/ico4.png" alt="icon"/>
                                                                    <span>Bathroom</span>
                                                                </a>
                                                            </li>
                                                            <li className="item-vertical">
                                                                <p className="close-menu"></p>
                                                                <a href="#" className="clearfix">
                                                                     <img src="image/catalog/menu/icons/ico3.png" alt="icon"/>
                                                                    <span>Metallurgy</span>
                                                                </a>
                                                            </li>
                                                            <li className="item-vertical" >
                                                                <p className="close-menu"></p>
                                                                <a href="#" className="clearfix">
                                                                    <img src="image/catalog/menu/icons/ico2.png" alt="icon"/>
                                                                    <span>Bedroom</span>
                                                                </a>
                                                            </li>
                                                            <li className="item-vertical" >
                                                                <p className="close-menu"></p>
                                                                
                                                                <a href="#" className="clearfix">
                                                                     <img src="image/catalog/menu/icons/ico1.png" alt="icon"/>
                                                                    <span>Health &amp; Beauty</span>
                                                                </a>
                                                            </li>
                                                            <li className="item-vertical" style={{display: 'none'}}>
                                                                <p className="close-menu"></p>
                                                                <a href="#" className="clearfix">
                                                                     <img src="image/catalog/menu/icons/ico11.png" alt="icon"/>
                                                                    <span>Toys &amp; Hobbies </span>
                                                                </a>
                                                            </li>
                                                            <li className="item-vertical" style={{display: 'none'}}>
                                                                <p className="close-menu"></p>
                                                                <a href="#" className="clearfix">
                                                                     <img src="image/catalog/menu/icons/ico12.png" alt="icon"/>
                                                                    <span>Jewelry &amp; Watches</span>
                                                                </a>
                                                            </li>
                                                            <li className="item-vertical" style={{display: 'none'}}>
                                                                <p className="close-menu"></p>
                                                                <a href="#" className="clearfix">
                                                                     <img src="image/catalog/menu/icons/ico9.png" alt="icon"/>
                                                                    <span>Home &amp; Lights</span>
                                                                </a>
                                                            </li>
                                                            <li className="item-vertical" style={{display: 'none'}}>
                                                                <p className="close-menu"></p>
                                                                <a href="#" className="clearfix">
                                                                     <img src="image/catalog/menu/icons/ico6.png" alt="icon"/>
                                                                    <span>Metallurgy</span>
                                                                </a>
                                                            </li>
                                                           
                                                            <li className="loadmore">
                                                                <i className="fa fa-plus-square-o"></i>
                                                                <span className="more-view">More Categories</span>
                                                            </li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                            </div>
                        </div>

                    </div>
                    
                    <div className="bottom2 col-lg-7 col-md-6 col-sm-6">
                        <div className="search-header-w">
                            <div className="icon-search hidden-lg hidden-md hidden-sm"><i className="fa fa-search"></i></div>                                
                              
                            <div id="sosearchpro" className="sosearchpro-wrapper so-search ">
                                <form method="GET" action="https://demo.smartaddons.com/templates/html/emarket/index.html">
                                    <div id="search0" className="search input-group form-group">
                                        <div className="select_category filter_type  icon-select hidden-sm hidden-xs">
                                            <select className="no-border" name="category_id">
                                                <option value="0">All Categories</option>
                                                <option value="78">Apparel</option>
                                                <option value="77">Cables &amp; Connectors</option>
                                                <option value="82">Cameras &amp; Photo</option>
                                                <option value="80">Flashlights &amp; Lamps</option>
                                                <option value="81">Mobile Accessories</option>
                                                <option value="79">Video Games</option>
                                                <option value="20">Jewelry &amp; Watches</option>
                                                <option value="76">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Earings</option>
                                                <option value="26">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wedding Rings</option>
                                                <option value="27">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Men Watches</option>
                                            </select>
                                        </div>

                                        <input className="autosearch-input form-control" type="text" value="" size="50" autocomplete="off" placeholder="Keyword here..." name="search" />
                                        <span className="input-group-btn">
                                        <button type="submit" className="button-search btn btn-primary" name="submit_search"><i className="fa fa-search"></i></button>
                                        </span>
                                    </div>
                                    <input type="hidden" name="route" value="product/search" />
                                </form>
                            </div>
                        </div>  
                    </div>
                    
                    <div className="bottom3 col-lg-3 col-md-3 col-sm-3">
                        

                        <div className="shopping_cart">
                            <div id="cart" className="btn-shopping-cart">

                                <a data-loading-text="Loading... " className="btn-group top_cart dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                    <div className="shopcart">
                                        <span className="icon-c">
                                <i className="fa fa-shopping-bag"></i>
                              </span>
                                        <div className="shopcart-inner">
                                            <p className="text-shopping-cart">

                                                My cart
                                            </p>

                                            <span className="total-shopping-cart cart-total-full">
                                   <span className="items_cart">02</span><span className="items_cart2"> item(s)</span><span className="items_carts"> - $162.00 </span>
                                            </span>
                                        </div>
                                    </div>
                                </a>

                                <ul className="dropdown-menu pull-right shoppingcart-box" role="menu">
                                    <li>
                                        <table className="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <td className="text-center" style={{width:'70px'}}>
                                                        <a href="product.html">
                                                            <img src="image/catalog/demo/product/80/1.jpg" style={{width:'70px'}} alt="Yutculpa ullamcon" title="Yutculpa ullamco" className="preview"/>
                                                        </a>
                                                    </td>
                                                    <td className="text-left"> <a className="cart_product_name" href="product.html">Yutculpa ullamco</a> 
                                                    </td>
                                                    <td className="text-center">x1</td>
                                                    <td className="text-center">$80.00</td>
                                                    <td className="text-right">
                                                        <a href="product.html" className="fa fa-edit"></a>
                                                    </td>
                                                    <td className="text-right">
                                                        <a onclick="cart.remove('2');" className="fa fa-times fa-delete"></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center"  style={{width:'70px'}}>
                                                        <a href="product.html">
                                                            <img src="image/catalog/demo/product/80/2.jpg"  style={{width:'70px'}} alt="Xancetta bresao" title="Xancetta bresao" className="preview"/>
                                                        </a>
                                                    </td>
                                                    <td className="text-left"> <a className="cart_product_name" href="product.html">Xancetta bresao</a> 
                                                    </td>
                                                    <td className="text-center">x1</td>
                                                    <td className="text-center">$60.00</td>
                                                    <td className="text-right">
                                                        <a href="product.html" className="fa fa-edit"></a>
                                                    </td>
                                                    <td className="text-right">
                                                        <a onclick="cart.remove('1');" className="fa fa-times fa-delete"></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                    <li>
                                        <div>
                                            <table className="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td className="text-left"><strong>Sub-Total</strong>
                                                        </td>
                                                        <td className="text-right">$140.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left"><strong>Eco Tax (-2.00)</strong>
                                                        </td>
                                                        <td className="text-right">$2.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left"><strong>VAT (20%)</strong>
                                                        </td>
                                                        <td className="text-right">$20.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left"><strong>Total</strong>
                                                        </td>
                                                        <td className="text-right">$162.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p className="text-right"> <a className="btn view-cart" href="cart.html"><i className="fa fa-shopping-cart"></i>View Cart</a>&nbsp;&nbsp;&nbsp; <a className="btn btn-mega checkout-cart" href="checkout.html"><i className="fa fa-share"></i>Checkout</a> 
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <ul className="wishlist-comp hidden-md hidden-sm hidden-xs">
                            <li className="compare hidden-xs"><a href="#" className="top-link-compare" title="Compare "><i className="fa fa-refresh"></i></a>
                            </li>
                            <li className="wishlist hidden-xs"><a href="#" id="wishlist-total" className="top-link-wishlist" title="Wish List (0) "><i className="fa fa-heart"></i></a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>

        </div>
    </header>
    
   
<div className="main-container container">
    <div id="content">
        <div className="box-top hidden-lg hidden-md hidden-sm ">
            <div className="module sohomepage-slider ">
                <div className="yt-content-slider"  data-rtl="yes" data-autoplay="no" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column0="1" data-items_column1="1" data-items_column2="1"  data-items_column3="1" data-items_column4="1" data-arrows="no" data-pagination="yes" data-lazyload="yes" data-loop="no" data-hoverpause="yes">
                    <div className="yt-content-slide">
                        <a href="#"><img src="image/catalog/slideshow/home1/slider-1.jpg" alt="slider1" className="img-responsive"/></a>
                    </div>
                    <div className="yt-content-slide">
                        <a href="#"><img src="image/catalog/slideshow/home1/slider-2.jpg" alt="slider2" className="img-responsive"/></a>
                    </div>
                    <div className="yt-content-slide">
                        <a href="#"><img src="image/catalog/slideshow/home1/slider-3.jpg" alt="slider3" className="img-responsive"/></a>
                    </div>
                </div>
                
                <div className="loadeding"></div>
            </div>                                             
        </div>
        <div className="row">
            
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 main-left sidebar-offcanvas">
                <div className="module col1 hidden-sm hidden-xs"></div>
                <div className="module">
                    <div className="banners banners2">
                        <div className="banner">
                            <a href="#"><img src="image/catalog/banners/banner4.jpg" alt="image"/></a>
                        </div>
                    </div>
                </div>

                <div className="module product-simple">
                    <h3 className="modtitle">
                        <span>Latest products</span>
                    </h3>
                    <div className="modcontent">
                        <div id="so_extra_slider_1" className="extraslider" >
                            <div className="yt-content-slider extraslider-inner" data-rtl="yes" data-pagination="yes" data-autoplay="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column0="1" data-items_column1="1" data-items_column2="1" data-items_column3="1" data-items_column4="1" data-arrows="no" data-lazyload="yes" data-loop="no" data-buttonpage="top">
                                <div className="item ">
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Mandouille short ">
                                                    <img src="image/catalog/demo/product/80/1.jpg" alt="Mandouille short" />
                                                    </a>
                                            </div>
                                            
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                            </div>
                                            <div className="rating">
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>
                                            </div>
                                            <div className="content_price price">
                                                <span className="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                <span className="price-old">$76.00 </span>&nbsp;

                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Xancetta bresao ">
                                                        <img src="image/catalog/demo/product/80/2.jpg" alt="Xancetta bresao"/>
                                                        </a>
                                            </div>
                                            
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Xancetta bresao">
                                                            Xancetta bresao 
                                                        </a>
                                            </div>
                                            <div className="rating">
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                            </div>
                                            <div className="content_price price">
                                                <span className="price-new product-price">$80.00 </span>&nbsp;&nbsp;

                                                <span className="price-old">$89.00 </span>&nbsp;



                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Sausage cowbee ">
                                                            <img src="image/catalog/demo/product/80/3.jpg" alt="Sausage cowbee"/>
                                                            </a>
                                            </div>
                                           
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Sausage cowbee">
                                                            Sausage cowbee 
                                                        </a>
                                            </div>
                                            <div className="rating">
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>
                                            </div>
                                           
                                            <div className="content_price price">
                                                <span className="price product-price">
                                                                $66.00 
                                                            </span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Chicken swinesha ">
                                                                <img src="image/catalog/demo/product/80/4.jpg" alt="Chicken swinesha"/>
                                                                </a>
                                            </div>
                                           
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Chicken swinesha">
                                                            Chicken swinesha 
                                                        </a>
                                            </div>
                                            <div className="rating">
                                                <span className="fa fa-stack">
                                                                    <i className="fa fa-star fa-stack-2x"></i>
                                                                </span>
                                                <span className="fa fa-stack">
                                                                    <i className="fa fa-star fa-stack-2x"></i>
                                                                </span>
                                                <span className="fa fa-stack">
                                                                    <i className="fa fa-star fa-stack-2x"></i>
                                                                </span>
                                                <span className="fa fa-stack">
                                                                    <i className="fa fa-star fa-stack-2x"></i>
                                                                </span>
                                                <span className="fa fa-stack">
                                                                    <i className="fa fa-star fa-stack-2x"></i>
                                                                </span>
                                            </div>
                                            <div className="content_price price">
                                                <span className="price-new product-price">$45.00 </span>&nbsp;&nbsp;

                                                <span className="price-old">$56.00 </span>&nbsp;



                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="item ">
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Qeserunt shortloin ">
                                                <img src="image/catalog/demo/product/80/5.jpg" alt="Qeserunt shortloin"/>
                                                </a>
                                            </div>
                                           
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Qeserunt shortloin">
                                        Qeserunt shortloin 
                                    </a>
                                            </div>
                                            <div className="rating">
                                                <span className="fa fa-stack">
                                        <i className="fa fa-star fa-stack-2x"></i>
                                    </span>
                                                <span className="fa fa-stack">
                                        <i className="fa fa-star fa-stack-2x"></i>
                                    </span>
                                                <span className="fa fa-stack">
                                        <i className="fa fa-star fa-stack-2x"></i>
                                    </span>
                                                <span className="fa fa-stack">
                                        <i className="fa fa-star fa-stack-2x"></i>
                                    </span>
                                                <span className="fa fa-stack">
                                        <i className="fa fa-star fa-stack-2x"></i>
                                    </span>
                                            </div>
                                            <div className="content_price price">
                                                <span className="price product-price">
                                            $88.00 
                                        </span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Consecte quichuck ">
                                                <img src="image/catalog/demo/product/80/6.jpg" alt="Consecte quichuck"/>
                                                </a>
                                            </div>
                                            
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Consecte quichuck">
                                        Consecte quichuck 
                                    </a>
                                            </div>
                                            <div className="rating">
                                                <span className="fa fa-stack">
                                            <i className="fa fa-star fa-stack-2x"></i>
                                        </span>
                                                <span className="fa fa-stack">
                                            <i className="fa fa-star fa-stack-2x"></i>
                                        </span>
                                                <span className="fa fa-stack">
                                            <i className="fa fa-star fa-stack-2x"></i>
                                        </span>
                                                <span className="fa fa-stack">
                                            <i className="fa fa-star fa-stack-2x"></i>
                                        </span>
                                                <span className="fa fa-stack">
                                            <i className="fa fa-star fa-stack-2x"></i>
                                        </span>
                                            </div>
                                            <div className="content_price price">
                                                <span className="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                <span className="price-old">$61.00 </span>&nbsp;



                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Neatball bresaola ">
                                            <img src="image/catalog/demo/product/80/7.jpg" alt="Neatball bresaola"/>
                                            </a>
                                            </div>
                                            
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Neatball bresaola">
                                        Neatball bresaola 
                                    </a>
                                            </div>
                                            <div className="rating">
                                                <span className="fa fa-stack">
                                                <i className="fa fa-star fa-stack-2x"></i>
                                            </span>
                                                <span className="fa fa-stack">
                                                <i className="fa fa-star fa-stack-2x"></i>
                                            </span>
                                                <span className="fa fa-stack">
                                                <i className="fa fa-star fa-stack-2x"></i>
                                            </span>
                                                <span className="fa fa-stack">
                                                <i className="fa fa-star fa-stack-2x"></i>
                                            </span>
                                                <span className="fa fa-stack">
                                                <i className="fa fa-star fa-stack-2x"></i>
                                            </span>
                                            </div>
                                            <div className="content_price price">
                                                <span className="price-new product-price">$65.00 </span>&nbsp;&nbsp;

                                                <span className="price-old">$71.00 </span>&nbsp;



                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Yutculpa ullamco ">
                                                <img src="image/catalog/demo/product/80/8.jpg" alt="Yutculpa ullamco"/>
                                                </a>
                                            </div>
                                            
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Yutculpa ullamco">
                                                    Yutculpa ullamco 
                                                </a>
                                            </div>
                                            <div className="rating">
                                                <span className="fa fa-stack">
                                                    <i className="fa fa-star fa-stack-2x"></i>
                                                </span>
                                                <span className="fa fa-stack">
                                                    <i className="fa fa-star fa-stack-2x"></i>
                                                </span>
                                                <span className="fa fa-stack">
                                                    <i className="fa fa-star fa-stack-2x"></i>
                                                </span>
                                                <span className="fa fa-stack">
                                                    <i className="fa fa-star fa-stack-2x"></i>
                                                </span>
                                                <span className="fa fa-stack">
                                                    <i className="fa fa-star fa-stack-2x"></i>
                                                </span>
                                            </div>
                                            <div className="content_price price">
                                                <span className="price-new product-price">$60.00 </span>&nbsp;&nbsp;

                                                <span className="price-old">$77.00 </span>&nbsp;



                                            </div>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="module">
                    <ul className="block-infos">
                        <li className="info1">
                            <div className="inner">
                                <i className="fa fa-file-text-o"></i>
                                <div className="info-cont">
                                    <a href="#">free delivery</a>
                                    <p>On order over $49.86</p>
                                </div>
                            </div>
                        </li>
                        <li className="info2">
                            <div className="inner">
                                <i className="fa fa-shield"></i>
                                <div className="info-cont">
                                    <a href="#">order protecttion</a>
                                    <p>secured information</p>
                                </div>
                            </div>
                        </li>
                        <li className="info3">
                            <div className="inner">
                                <i className="fa fa-gift"></i>
                                <div className="info-cont">
                                    <a href="#">promotion gift</a>
                                    <p>special offers!</p>
                                </div>
                            </div>
                        </li>
                        <li className="info4">
                            <div className="inner">
                                <i className="fa fa-money"></i>
                                <div className="info-cont">
                                    <a href="#">money back</a>
                                    <p>return over 30 days</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="module">
                    <div className="banners banners4">
                        <div className="banner">
                            <a href="#"><img src="image/catalog/banners/banner5.jpg" alt="image"/></a>
                        </div>
                    </div>
                </div>


                <div className="module blog-sidebar">
                    <h3 className="modtitle"><span>Latest Blogs</span></h3>
                    <div className="modcontent clearfix">

                        <div id="so_latest_blog_103_1728994661514993652" className="so-blog-external buttom-type1 button-type1">
                         
                            <div className="yt-content-slider blog-external" data-autoplay="no" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column0="1" data-items_column1="1" data-items_column2="1" data-items_column3="1" data-items_column4="1" data-arrows="no"
                            data-pagination="yes" data-lazyload="yes" data-loop="yes" data-buttonpage="top">
                                <div className="media" > 
                                    <div className="item head-button">
                                            <div className="media-left so-block">
                                                <a href="#" target="_self">
                                                    <img src="image/catalog/blog/2.jpg" alt="Duis autem vel eum irure sed diam nonumy"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <div className="media-content so-block">

                                                    <h4 className="media-heading font-title head-item">
                                                        <a href="#" title="Duis autem vel eum irure sed diam nonumy" target="_self">Duis autem vel eum irure sed diam nonumy</a>
                                                    </h4>

                                                    <div className="media-date-added">
                                                        <i className="fa fa-calendar"></i><span className="media-date-added"> December 4th, 2017</span>
                                                    </div>

                                                    <div className="media-subcontent">
                                                        <span className="media-comment"><i className="fa fa-comments"></i> 0  Comment</span>
                                                    </div>


                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="media" > 
                                    <div className="item head-button">
                                            <div className="media-left so-block">
                                                <a href="#" target="_self">
                                                    <img src="image/catalog/blog/4.jpg" alt="Duis autem vel eum irure sed diam nonumy"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <div className="media-content so-block">

                                                    <h4 className="media-heading font-title head-item">
                                                        <a href="#" title="Biten demons lector in henderit in vulp" target="_self">Biten demons lector in henderit in vulp</a>
                                                    </h4>

                                                    <div className="media-date-added">
                                                        <i className="fa fa-calendar"></i><span className="media-date-added"> December 4th, 2017</span>
                                                    </div>

                                                    <div className="media-subcontent">
                                                        <span className="media-comment"><i className="fa fa-comments"></i> 0  Comment</span>
                                                    </div>


                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="media" > 
                                    <div className="item head-button">
                                            <div className="media-left so-block">
                                                <a href="#" target="_self">
                                                    <img src="image/catalog/blog/1.jpg" alt="Duis autem vel eum irure sed diam nonumy"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <div className="media-content so-block">

                                                    <h4 className="media-heading font-title head-item">
                                                        <a href="#" title="Commodo laoreet semper tincidun  sit" target="_self">Commodo laoreet semper tincidun  sit</a>
                                                    </h4>

                                                    <div className="media-date-added">
                                                        <i className="fa fa-calendar"></i><span className="media-date-added"> December 4th, 2017</span>
                                                    </div>

                                                    <div className="media-subcontent">
                                                        <span className="media-comment"><i className="fa fa-comments"></i> 0  Comment</span>
                                                    </div>


                                                </div>
                                            </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                       
                    </div>
                </div>
                
                 <div className="module product-simple">
                    <h3 className="modtitle">
                        <span>Top Rated</span>
                    </h3>
                    <div className="modcontent">
                        <div id="so_extra_slider_2" className="extraslider" >
                            <div className="yt-content-slider extraslider-inner" data-rtl="yes" data-pagination="yes" data-autoplay="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column0="1" data-items_column1="1" data-items_column2="1" data-items_column3="1" data-items_column4="1" data-arrows="no"
                            data-lazyload="yes" data-loop="no" data-buttonpage="top">
                                <div className="item ">
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Mandouille short ">
                                                    <img src="image/catalog/demo/product/80/8.jpg" alt="Mandouille short"/>
                                                    </a>
                                            </div>
                                            
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                            </div>
                                            <div className="rating">
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                            </div>
                                            <div className="content_price price">
                                                <span className="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                <span className="price-old">$76.00 </span>&nbsp;

                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Xancetta bresao ">
                                                        <img src="image/catalog/demo/product/80/7.jpg" alt="Xancetta bresao"/>
                                                        </a>
                                            </div>
                                            
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Xancetta bresao">
                                                            Xancetta bresao 
                                                        </a>
                                            </div>
                                            <div className="rating">
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                            </div>
                                            <div className="content_price price">
                                                <span className="price-new product-price">$80.00 </span>&nbsp;&nbsp;

                                                <span className="price-old">$89.00 </span>&nbsp;



                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Sausage cowbee ">
                                                            <img src="image/catalog/demo/product/80/6.jpg" alt="Sausage cowbee"/>
                                                            </a>
                                            </div>
                                           
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Sausage cowbee">
                                                            Sausage cowbee 
                                                        </a>
                                            </div>
                                            <div className="rating">
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                            </div>
                                           
                                            <div className="content_price price">
                                                <span className="price product-price">
                                                                $66.00 
                                                            </span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Chicken swinesha ">
                                                <img src="image/catalog/demo/product/80/5.jpg" alt="Chicken swinesha" />
                                                </a>
                                            </div>
                                           
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Chicken swinesha">
                                                            Chicken swinesha 
                                                        </a>
                                            </div>
                                             <div className="rating">
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                            </div>
                                            <div className="content_price price">
                                                <span className="price-new product-price">$45.00 </span>&nbsp;&nbsp;

                                                <span className="price-old">$56.00 </span>&nbsp;



                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="item ">
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Qeserunt shortloin ">
                                                <img src="image/catalog/demo/product/80/4.jpg" alt="Qeserunt shortloin"/>
                                                </a>
                                            </div>
                                           
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Qeserunt shortloin">
                                        Qeserunt shortloin 
                                    </a>
                                            </div>
                                            <div className="rating">
                                                <span className="fa fa-stack">
                                        <i className="fa fa-star fa-stack-2x"></i>
                                    </span>
                                                <span className="fa fa-stack">
                                        <i className="fa fa-star fa-stack-2x"></i>
                                    </span>
                                                <span className="fa fa-stack">
                                        <i className="fa fa-star fa-stack-2x"></i>
                                    </span>
                                                <span className="fa fa-stack">
                                        <i className="fa fa-star fa-stack-2x"></i>
                                    </span>
                                                <span className="fa fa-stack">
                                        <i className="fa fa-star fa-stack-2x"></i>
                                    </span>
                                            </div>
                                            <div className="content_price price">
                                                <span className="price product-price">
                                            $88.00 
                                        </span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Consecte quichuck ">
                                                <img src="image/catalog/demo/product/80/3.jpg" alt="Consecte quichuck"/>
                                                </a>
                                            </div>
                                            
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Consecte quichuck">
                                        Consecte quichuck 
                                    </a>
                                            </div>
                                            <div className="rating">
                                                <span className="fa fa-stack">
                                            <i className="fa fa-star fa-stack-2x"></i>
                                        </span>
                                                <span className="fa fa-stack">
                                            <i className="fa fa-star fa-stack-2x"></i>
                                        </span>
                                                <span className="fa fa-stack">
                                            <i className="fa fa-star fa-stack-2x"></i>
                                        </span>
                                                <span className="fa fa-stack">
                                            <i className="fa fa-star fa-stack-2x"></i>
                                        </span>
                                                <span className="fa fa-stack">
                                            <i className="fa fa-star fa-stack-2x"></i>
                                        </span>
                                            </div>
                                            <div className="content_price price">
                                                <span className="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                <span className="price-old">$61.00 </span>&nbsp;



                                            </div>
                                        </div>
                                      
                                    </div>
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Neatball bresaola ">
                                            <img src="image/catalog/demo/product/80/2.jpg" alt="Neatball bresaola"/>
                                            </a>
                                            </div>
                                            
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Neatball bresaola">
                                        Neatball bresaola 
                                    </a>
                                            </div>
                                            <div className="rating">
                                                <span className="fa fa-stack">
                                                <i className="fa fa-star fa-stack-2x"></i>
                                            </span>
                                                <span className="fa fa-stack">
                                                <i className="fa fa-star fa-stack-2x"></i>
                                            </span>
                                                <span className="fa fa-stack">
                                                <i className="fa fa-star fa-stack-2x"></i>
                                            </span>
                                                <span className="fa fa-stack">
                                                <i className="fa fa-star fa-stack-2x"></i>
                                            </span>
                                                <span className="fa fa-stack">
                                                <i className="fa fa-star fa-stack-2x"></i>
                                            </span>
                                            </div>
                                            <div className="content_price price">
                                                <span className="price-new product-price">$65.00 </span>&nbsp;&nbsp;

                                                <span className="price-old">$71.00 </span>&nbsp;



                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="product-layout item-inner style1 ">
                                        <div className="item-image">
                                            <div className="item-img-info">
                                                <a href="#" target="_self" title="Yutculpa ullamco ">
                                                <img src="image/catalog/demo/product/80/1.jpg" alt="Yutculpa ullamco" />
                                                </a>
                                            </div>
                                            
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">
                                                <a href="#" target="_self" title="Yutculpa ullamco">
                                                    Yutculpa ullamco 
                                                </a>
                                            </div>
                                            <div className="rating">
                                                <span className="fa fa-stack">
                                                    <i className="fa fa-star fa-stack-2x"></i>
                                                </span>
                                                <span className="fa fa-stack">
                                                    <i className="fa fa-star fa-stack-2x"></i>
                                                </span>
                                                <span className="fa fa-stack">
                                                    <i className="fa fa-star fa-stack-2x"></i>
                                                </span>
                                                <span className="fa fa-stack">
                                                    <i className="fa fa-star fa-stack-2x"></i>
                                                </span>
                                                <span className="fa fa-stack">
                                                    <i className="fa fa-star fa-stack-2x"></i>
                                                </span>
                                            </div>
                                            <div className="content_price price">
                                                <span className="price-new product-price">$60.00 </span>&nbsp;&nbsp;

                                                <span className="price-old">$77.00 </span>&nbsp;



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="module">
                    <div className="banners banners5">
                        <div className="banner">
                            <a href="#"><img src="image/catalog/banners/banner6.jpg" alt="image" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-10 col-md-9 col-sm-8 col-xs-12 main-right">
                <div className="slider-container row"> 
                                
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12 col2">
                        <div className="module sohomepage-slider ">
                            <div className="yt-content-slider"  data-rtl="yes" data-autoplay="no" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column0="1" data-items_column1="1" data-items_column2="1"  data-items_column3="1" data-items_column4="1" data-arrows="no" data-pagination="yes" data-lazyload="yes" data-loop="no" data-hoverpause="yes">
                                <div className="yt-content-slide">
                                    <a href="#"><img src="image/catalog/slideshow/home1/slider-1.jpg" alt="slider1" className="img-responsive" /></a>
                                </div>
                                <div className="yt-content-slide">
                                    <a href="#"><img src="image/catalog/slideshow/home1/slider-2.jpg" alt="slider2" className="img-responsive" /></a>
                                </div>
                                <div className="yt-content-slide">
                                    <a href="#"><img src="image/catalog/slideshow/home1/slider-3.jpg" alt="slider3" className="img-responsive" /></a>
                                </div>
                            </div>
                            
                            <div className="loadeding"></div>
                        </div>
                        
                    </div>

                    
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 col3">
                        <div className="modcontent clearfix">
                            <div className="banners banners1"> 
                                <div className="b-img">
                                        <a href="#"><img src="image/catalog/banners/banner1.jpg" alt="banner1" /></a>
                                </div>
                                <div className="b-img2">
                                        <a href="#"><img src="image/catalog/banners/banner2.jpg" alt="banner2" /></a>
                                </div>    
                                   
                                
                            </div>
                        </div>
                    </div>                
                </div>

                <div className="banners banners3">
                    <div className="banner">
                        <a href="#">
                            <img src="image/catalog/banners/banner3.jpg" alt="image" />
                        </a>
                    </div>
                </div>

                <div className="module deals-layout1">
                    <h3 className="modtitle"><span>Daily Deals</span></h3>
                    <div className="modcontent">
                        <div id="so_deal_1" className="so-deal style2">
                            <div className="extraslider-inner products-list yt-content-slider" data-rtl="yes" data-autoplay="no" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="30" data-items_column0="2" data-items_column1="1" data-items_column2="1"  data-items_column3="1" data-items_column4="1" data-arrows="yes" data-pagination="yes" data-lazyload="yes" data-loop="no" data-hoverpause="yes">
                                <div className="item">
                                    <div className="product-thumb">
                                        <div className="row">
                                            <div className="inner">
                                                <div className="item-left col-lg-6 col-md-5 col-sm-5 col-xs-12">
                                                    <div className="image"> 
                                                        <span className="label-product label-product-sale">
                                                            -22%
                                                        </span>
                                                        <a href="#" target="_self" title="product">
                                                            <img src="image/catalog/demo/product/320/1.jpg" alt="Yutculpa ullamco" className="img-responsive"/>
                                                        </a>
                                                        <div className="button-group so-quickview">
                                                            <button className="btn-button addToCart" title="Add to Cart" type="button" ><i className="fa fa-shopping-basket"></i>  <span>Add to Cart</span>
                                                            </button>                                                        
                                                            <button className="btn-button wishlist" type="button" title="Add to Wish List" ><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button className="btn-button compare" type="button" title="Compare this Product" ><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>                                                    
                                                                                                                  
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-right col-lg-6 col-md-7 col-sm-7 col-xs-12">
                                                    <div className="caption">
                                                        <h4><a href="#" target="_self" title="Yutculpa ullamco">Yutculpa ullamco</a></h4>
                                                        <p className="price">   <span className="price-new">$60.00</span>
                                                            <span className="price-old">$77.00</span>
                                                        </p>
                                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore..</p>
                                                        <div className="item-available">
                                                            <div className="row">
                                                                <p className="col-xs-6 a1">Available: <b>98</b> 
                                                                </p>
                                                                <p className="col-xs-6 a2">Sold: <b>32</b> 
                                                                </p>
                                                            </div>
                                                            <div className="available"> <span className="color_width" data-title="75%" data-toggle="tooltip" title="75%" style={{width:'70%'}}></span>
                                                            </div>
                                                        </div>
                                                        <div className="item-time-w">
                                                            <div className="time-title"><span>Hurry Up!</span> Offer ends in:</div>
                                                                <div className="item-time">
                                                                    <div className="item-timer">
                                                                        <div className="defaultCountdown-30"></div>
                                                                    </div>
                                                                </div>                                                                                                                                                                
                                                        </div>                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-thumb ">
                                        <div className="row">
                                            <div className="inner">
                                                <div className="item-left col-lg-6 col-md-5 col-sm-5 col-xs-12">
                                                    <div className="image"> 
                                                        <span className="label-product label-product-sale">
                                                            -10%
                                                        </span>
                                                        <a href="#" target="_self" title="Xancetta bresao">
                                                            <img src="image/catalog/demo/product/320/2.jpg" alt="Xancetta bresao" className="img-responsive"/>
                                                        </a>
                                                        <div className="button-group so-quickview">
                                                            <button className="btn-button addToCart" title="Add to Cart" type="button" onclick="cart.add('75');"><i className="fa fa-shopping-basket"></i>  <span>Add to Cart</span>
                                                            </button>
                                                            <button className="btn-button wishlist" type="button" title="Add to Wish List" onclick="wishlist.add('75');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button className="btn-button compare" type="button" title="Compare this Product" onclick="compare.add('75');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                                                                                  
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-right col-lg-6 col-md-7 col-sm-7 col-xs-12">
                                                    <div className="caption">
                                                        <h4><a href="#" target="_self" title="Xancetta bresao">Xancetta bresao</a></h4>
                                                        <p className="price">   <span className="price-new">$80.00</span>
                                                            <span className="price-old">$89.00</span>
                                                        </p>
                                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore..</p>
                                                        <div className="item-available">
                                                            <div className="row">
                                                                <p className="col-xs-6 a1">Available: <b>555</b> 
                                                                </p>
                                                                <p className="col-xs-6 a2">Sold: <b>0</b> 
                                                                </p>
                                                            </div>
                                                            <div className="available"> <span className="color_width" data-title="0%" data-toggle="tooltip" title="75%"   style={{width:'0px'}}></span>
                                                            </div>
                                                        </div>
                                                        <div className="item-time-w">
                                                            <div className="time-title"><span>Hurry Up!</span> Offer ends in:</div>
                                                            <div className="item-time">
                                                                <div className="item-timer">
                                                                    <div className="defaultCountdown-30"></div>
                                                                </div>
                                                            </div>
                                                                                                                                                                
                                                        </div>                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-thumb transition ">
                                        <div className="row">
                                            <div className="inner">
                                                <div className="item-left col-lg-6 col-md-5 col-sm-5 col-xs-12">
                                                    <div className="image">
                                                        <span className="label-product label-product-sale">-17%</span>
                                                        <a href="#" target="_self" title="Wamboudin ribeye">
                                                            <img src="image/catalog/demo/product/320/3.jpg" alt="Wamboudin ribeye" className="img-responsive"/>
                                                        </a>
                                                        <div className="button-group so-quickview">
                                                            <button className="btn-button addToCart" title="Add to Cart" type="button" onclick="cart.add('79');"><i className="fa fa-shopping-basket"></i>  <span>Add to Cart</span>
                                                            </button>
                                                            <button className="btn-button wishlist" type="button" title="Add to Wish List" onclick="wishlist.add('79');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button className="btn-button compare" type="button" title="Compare this Product" onclick="compare.add('79');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                                                                                  
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-right col-lg-6 col-md-7 col-sm-7 col-xs-12">
                                                    <div className="caption">
                                                        <h4><a href="#" target="_self" title="Wamboudin ribeye">Wamboudin ribeye</a></h4>
                                                        <p className="price">   <span className="price-new">$70.00</span>
                                                            <span className="price-old">$84.00</span>
                                                        </p>
                                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore..</p>
                                                        <div className="item-available">
                                                            <div className="row">
                                                                <p className="col-xs-6 a1">Available: <b>100</b> 
                                                                </p>
                                                                <p className="col-xs-6 a2">Sold: <b>60</b> 
                                                                </p>
                                                            </div>
                                                            <div className="available"> <span className="color_width" data-title="63%" data-toggle="tooltip" title="63%" style={{width:'63px'}}></span>
                                                            </div>
                                                        </div>
                                                        <div className="item-time-w">
                                                            <div className="time-title"><span>Hurry Up!</span> Offer ends in:</div>
                                                            <div className="item-time">
                                                                <div className="item-timer">
                                                                    <div className="defaultCountdown-30"></div>
                                                                </div>
                                                            </div>
                                                                                                                                                                
                                                        </div>                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="product-thumb transition ">
                                        <div className="row">
                                            <div className="inner">
                                                <div className="item-left col-lg-6 col-md-5 col-sm-5 col-xs-12">
                                                    <div className="image">
                                                        <span className="label-product label-product-sale">-16%</span>
                                                        <a href="#" target="_self" title="Proident leerkas">
                                                            <img src="image/catalog/demo/product/320/4.jpg" alt="Proident leerkas" className="img-responsive"/>
                                                        </a>
                                                        <div className="button-group so-quickview">
                                                            <button className="btn-button addToCart" title="Add to Cart" type="button" onclick="cart.add('55');"><i className="fa fa-shopping-basket"></i>  <span>Add to Cart</span>
                                                            </button>
                                                            <button className="btn-button wishlist" type="button" title="Add to Wish List" onclick="wishlist.add('55');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button className="btn-button compare" type="button" title="Compare this Product" onclick="compare.add('55');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                                                                                  
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-right col-lg-6 col-md-7 col-sm-7 col-xs-12">
                                                    <div className="caption">
                                                        <h4><a href="#" target="_self" title="Wamboudin ribeye">Proident leerkas</a></h4>
                                                        <p className="price">   <span className="price-new">$46.00</span>
                                                            <span className="price-old">$55.00</span>
                                                        </p>
                                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore..</p>
                                                        <div className="item-available">
                                                            <div className="row">
                                                                <p className="col-xs-6 a1">Available: <b>310</b> 
                                                                </p>
                                                                <p className="col-xs-6 a2">Sold: <b>2</b> 
                                                                </p>
                                                            </div>
                                                            <div className="available"> <span className="color_width" data-title="99%" data-toggle="tooltip" title="99%" style={{width:'99%'}}></span>
                                                            </div>
                                                        </div>
                                                        <div className="item-time-w">
                                                            <div className="time-title"><span>Hurry Up!</span> Offer ends in:</div>
                                                            <div className="item-time">
                                                                <div className="item-timer">
                                                                    <div className="defaultCountdown-30"></div>
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
                        </div>
                    </div>
                </div>
                

                <div className="banners banners6">
                    <div className="banner">
                        <a href="#">
                            <img src="image/catalog/banners/banner7.jpg" alt="image" />
                        </a>
                    </div>
                </div>

                
                <div className="module listingtab-layout1">
                    <h3 className="modtitle"><span>Trending items</span></h3>
                    <div id="so_listing_tabs_1" className="so-listing-tabs first-load">
                        <div className="loadeding"></div>
                        <div className="ltabs-wrap">
                            <div className="ltabs-tabs-container" data-delay="300" data-duration="600" data-effect="starwars" data-ajaxurl="" data-type_source="0" data-lg="5" data-md="3" data-sm="2" data-xs="1" data-margin="30">
                                
                                <div className="ltabs-tabs-wrap"> 
                                <span className="ltabs-tab-selected">Bathroom</span> <span className="ltabs-tab-arrow">▼</span>
                                    <div className="item-sub-cat">
                                        <ul className="ltabs-tabs cf">
                                            <li className="ltabs-tab tab-sel" data-category-id="20" data-active-content=".items-category-20"> <span className="ltabs-tab-label">Bedroom</span> </li>
                                            <li className="ltabs-tab " data-category-id="18" data-active-content=".items-category-18"> <span className="ltabs-tab-label">Decor</span> </li>
                                            <li className="ltabs-tab " data-category-id="25" data-active-content=".items-category-25"> <span className="ltabs-tab-label">Furniture</span> </li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        
                            <div className="ltabs-items-container products-list grid">
                                
                                <div className="ltabs-items ltabs-items-selected items-category-20" data-total="16">
                                    <div className="ltabs-items-inner ltabs-slider">
                                        <div className="ltabs-item">
                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Pastrami bacon">
                                                                <img src="image/catalog/demo/product/270/1.jpg" className="img-1 img-responsive" alt="Pastrami bacon"/>
                                                                <img src="image/catalog/demo/product/270/12.jpg" className="img-2 img-responsive" alt="Pastrami bacon"/>
                                                            </a>
                                                        </div>
                                                        
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                                                                                  
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="rating">    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Pastrami bacon" target="_self">Pastrami bacon</a></h4>
                                                            <div className="price">$42.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Chicken swinesha">
                                                                <img src="image/catalog/demo/product/270/2.jpg" className="img-1 img-responsive" alt="image"/>
                                                                <img src="image/catalog/demo/product/270/11.jpg" className="img-2 img-responsive" alt="image"/>
                                                            </a>
                                                        </div>
                                                        <div className="box-label"> <span className="label-product label-sale"> -16% </span></div>
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                                                                                  
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="rating">    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                            <div className="price"> <span className="price-new">$46.00</span>
                                                                <span className="price-old">$55.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="ltabs-item">
                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Kielbasa hamburg">
                                                                <img src="image/catalog/demo/product/270/3.jpg" className="img-1 img-responsive" alt="Pastrami bacon"/>
                                                                <img src="image/catalog/demo/product/270/10.jpg" className="img-2 img-responsive" alt="Pastrami bacon"/>
                                                            </a>
                                                        </div>
                                                        <div className="box-label"> <span className="label-product label-new"> New </span></div>
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                                                                                  
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="rating">    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Kielbasa hamburg" target="_self">Kielbasa hamburg</a></h4>
                                                            <div className="price">$55.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Sausage cowbee">
                                                                <img src="image/catalog/demo/product/270/4.jpg" className="img-1 img-responsive" alt="image"/>
                                                                <img src="image/catalog/demo/product/270/9.jpg" className="img-2 img-responsive" alt="image"/>
                                                            </a>
                                                        </div>
                                                        
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                                                                                  
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="rating">    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Sausage cowbeea" target="_self">Sausage cowbee</a></h4>
                                                            <div className="price">$60.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="ltabs-item">
                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Kielbasa hamburg">
                                                                <img src="image/catalog/demo/product/270/5.jpg" className="img-1 img-responsive" alt="Pastrami bacon"/>
                                                                <img src="image/catalog/demo/product/270/8.jpg" className="img-2 img-responsive" alt="Pastrami bacon"/>
                                                            </a>
                                                        </div>
                                                        
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                                                                                  
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="rating">    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Drumstick tempor" target="_self">Drumstick tempor</a></h4>
                                                            <div className="price">$75.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Balltip nullaelit">
                                                                <img src="image/catalog/demo/product/270/6.jpg" className="img-1 img-responsive" alt="image"/>
                                                                <img src="image/catalog/demo/product/270/7.jpg" className="img-2 img-responsive" alt="image"/>
                                                            </a>
                                                        </div>
                                                        <div className="box-label"> <span className="label-product label-new"> New </span></div>
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                                                                                  
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="rating">    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Balltip nullaelit" target="_self">Balltip nullaelit</a></h4>
                                                            <div className="price">$80.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="ltabs-item">
                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Ribeye hamhock">
                                                                <img src="image/catalog/demo/product/270/7.jpg" className="img-1 img-responsive" alt="image"/>
                                                                <img src="image/catalog/demo/product/270/6.jpg" className="img-2 img-responsive" alt="image"/>
                                                            </a>
                                                        </div>
                                                        <div className="box-label"> <span className="label-product label-sale"> -7% </span></div>
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                                                                                  
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                           
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="rating">    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Ribeye hamhock" target="_self">Ribeye hamhock</a></h4>
                                                            <div className="price"> <span className="price-new">$65.00</span>
                                                                <span className="price-old">$70.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Wamboudin ribeye">
                                                                <img src="image/catalog/demo/product/270/8.jpg" className="img-1 img-responsive" alt="image"/>
                                                                <img src="image/catalog/demo/product/270/5.jpg" className="img-2 img-responsive" alt="image"/>
                                                            </a>
                                                        </div>
                                                        
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="rating">    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Wamboudin ribeye" target="_self">Wamboudin ribeye</a></h4>
                                                            <div className="price">$63.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="ltabs-item">
                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Lamboudin ribeye">
                                                                <img src="image/catalog/demo/product/270/9.jpg" className="img-1 img-responsive" alt="image"/>
                                                                <img src="image/catalog/demo/product/270/4.jpg" className="img-2 img-responsive" alt="image"/>
                                                            </a>
                                                        </div>
                                                        
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="rating">    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Lamboudin ribeye" target="_self">Lamboudin ribeye</a></h4>
                                                            <div className="price">$63.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Ribeye hamhock">
                                                                <img src="image/catalog/demo/product/270/10.jpg" className="img-1 img-responsive" alt="image"/>
                                                                <img src="image/catalog/demo/product/270/3.jpg" className="img-2 img-responsive" alt="image"/>
                                                            </a>
                                                        </div>
                                                        <div className="box-label"> <span className="label-product label-sale"> -7% </span></div>
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="rating">    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Ribeye hamhock" target="_self">Ribeye hamhock</a></h4>
                                                            <div className="price"> <span className="price-new">$65.00</span>
                                                                <span className="price-old">$70.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                                    
                                        </div>
                                        <div className="ltabs-item">
                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Kielbasa hamburg">
                                                                <img src="image/catalog/demo/product/270/11.jpg" className="img-1 img-responsive" alt="Pastrami bacon"/>
                                                                <img src="image/catalog/demo/product/270/2.jpg" className="img-2 img-responsive" alt="Pastrami bacon"/>
                                                            </a>
                                                        </div>
                                                        
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="rating">    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Drumstick tempor" target="_self">Drumstick tempor</a></h4>
                                                            <div className="price">$75.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Balltip nullaelit">
                                                                <img src="image/catalog/demo/product/270/12.jpg" className="img-1 img-responsive" alt="image"/>
                                                                <img src="image/catalog/demo/product/270/1.jpg" className="img-2 img-responsive" alt="image"/>
                                                            </a>
                                                        </div>
                                                        <div className="box-label"> <span className="label-product label-new"> New </span></div>
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="rating">    <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                                <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <h4><a href="product.html" title="Balltip nullaelit" target="_self">Balltip nullaelit</a></h4>
                                                            <div className="price">$80.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="ltabs-items items-category-18 grid" data-total="16">
                                    <div className="ltabs-loading"></div>
                                    
                                </div>
                                <div className="ltabs-items  items-category-25 grid" data-total="16">
                                    <div className="ltabs-loading"></div>
                                </div>
                            </div>
                            
                        </div>   
                    </div>
                </div>
                
                <div className="banners banners7">
                    <div className="row">
                        <div className="banner1 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div className="b1">
                                <a href="#">
                                    <img src="image/catalog/banners/banner8.jpg" alt="image"/>
                                </a>
                            </div>
                            <div className="b2">
                                <a href="#">
                                    <img src="image/catalog/banners/banner9.jpg" alt="image"/>
                                </a>
                            </div>
                        </div>
                        <div className="banner2 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <a href="#">
                                <img src="image/catalog/banners/banner10.jpg" alt="image"/>
                            </a>
                        </div>
                        <div className="banner3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div className="b1">
                                <a href="#">
                                    <img src="image/catalog/banners/banner11.jpg" alt="image"/>
                                </a>
                            </div>
                            <div className="b2">
                                <a href="#">
                                    <img src="image/catalog/banners/banner12.jpg" alt="image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="module listingtab1-custom listingtab-layout1">
                    <h3 className="modtitle"><span>New items</span></h3>
                    <div id="so_listing_tabs_2" className="so-listing-tabs first-load">
                        <div className="loadeding"></div>
                        <div className="ltabs-wrap">
                            <div className="ltabs-tabs-container" data-delay="300" data-duration="600" data-effect="starwars" data-ajaxurl="" data-type_source="0" data-lg="1" data-md="1" data-sm="1" data-xs="1" data-margin="0">
                                <div className="ltabs-tabs-wrap">   
                                    <span className='ltabs-tab-selected'></span>
                                    <span className="ltabs-tab-arrow">▼</span>
                                    <ul className="ltabs-tabs cf list-sub-cat font-title">                                  
                                        <li className="ltabs-tab tab-sel" data-category-id="51" data-active-content=".items-category-51"><span className="ltabs-tab-label">Bathroom</span></li>
                                        <li className="ltabs-tab  " data-category-id="52" data-active-content=".items-category-52">   <span className="ltabs-tab-label">Bedroom</span></li>
                                        <li className="ltabs-tab  " data-category-id="53" data-active-content=".items-category-53">   <span className="ltabs-tab-label">Decor</span></li>                                                
                                    </ul>
                                </div>
                            </div>
                            <div className="ltabs-items-container products-list grid">
                                <div className="ltabs-items ltabs-items-selected items-category-51" data-total="14">
                                    <div className="ltabs-items-inner ltabs-slider">
                                        <div className="ltabs-item">
                                            <div className="item-inner product-layout transition product-grid first-item">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Pastrami bacon">
                                                                <img src="image/catalog/demo/product/funiture/10.jpg" className="img-1 img-responsive" alt="Pastrami bacon"/>
                                                                <img src="image/catalog/demo/product/funiture/9.jpg" className="img-2 img-responsive" alt="Pastrami bacon"/>
                                                            </a>
                                                        </div>
                                                        
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="price">$42.00</div>
                                                            <h4><a href="product.html" title="Pastrami bacon" target="_self">Pastrami bacon</a></h4>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Chicken swinesha">
                                                                <img src="image/catalog/demo/product/270/15.jpg" className="img-1 img-responsive" alt="image"/>
                                                                <img src="image/catalog/demo/product/270/2.jpg" className="img-2 img-responsive" alt="image"/>
                                                            </a>
                                                        </div>
                                                        <div className="box-label"> <span className="label-product label-sale"> -16% </span></div>
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="price"> <span className="price-new">$46.00</span>
                                                                <span className="price-old">$55.00</span>
                                                            </div>
                                                            <h4><a href="product.html" title="Chicken swinesha" target="_self">Chicken swinesha</a></h4>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Kielbasa hamburg">
                                                                <img src="image/catalog/demo/product/270/14.jpg" className="img-1 img-responsive" alt="Pastrami bacon"/>
                                                                <img src="image/catalog/demo/product/270/3.jpg" className="img-2 img-responsive" alt="Pastrami bacon"/>
                                                            </a>
                                                        </div>
                                                        <div className="box-label"> <span className="label-product label-new"> New </span></div>
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="price">$55.00</div>
                                                            <h4><a href="product.html" title="Kielbasa hamburg" target="_self">Kielbasa hamburg</a></h4>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Sausage cowbee">
                                                                <img src="image/catalog/demo/product/270/13.jpg" className="img-1 img-responsive" alt="image"/>
                                                                <img src="image/catalog/demo/product/270/4.jpg" className="img-2 img-responsive" alt="image"/>
                                                            </a>
                                                        </div>
                                                        
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="price">$60.00</div>
                                                            <h4><a href="product.html" title="Sausage cowbeea" target="_self">Sausage cowbee</a></h4>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                      
                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Kielbasa hamburg">
                                                                <img src="image/catalog/demo/product/270/12.jpg" className="img-1 img-responsive" alt="Pastrami bacon"/>
                                                                <img src="image/catalog/demo/product/270/5.jpg" className="img-2 img-responsive" alt="Pastrami bacon"/>
                                                            </a>
                                                        </div>
                                                        
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="price">$75.00</div>
                                                            <h4><a href="product.html" title="Drumstick tempor" target="_self">Drumstick tempor</a></h4>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Balltip nullaelit">
                                                                <img src="image/catalog/demo/product/270/11.jpg" className="img-1 img-responsive" alt="image"/>
                                                                <img src="image/catalog/demo/product/270/6.jpg" className="img-2 img-responsive" alt="image"/>
                                                            </a>
                                                        </div>
                                                        <div className="box-label"> <span className="label-product label-new"> New </span></div>
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="price">$80.00</div>
                                                            <h4><a href="product.html" title="Balltip nullaelit" target="_self">Balltip nullaelit</a></h4>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item-inner product-layout transition product-grid">
                                                <div className="product-item-container">
                                                    <div className="left-block">
                                                        <div className="product-image-container second_img">
                                                            <a href="product.html" target="_self" title="Lamboudin ribeye">
                                                                <img src="image/catalog/demo/product/270/10.jpg" className="img-1 img-responsive" alt="image" />
                                                                <img src="image/catalog/demo/product/270/7.jpg" className="img-2 img-responsive" alt="image" />
                                                            </a>
                                                        </div>
                                                        
                                                        <div className="button-group so-quickview cartinfo--left">
                                                            <button type="button" className="addToCart btn-button" title="Add to cart" onclick="cart.add('60 ');">  <i className="fa fa-shopping-basket"></i>
                                                                <span>Add to cart </span>   
                                                            </button>
                                                            <button type="button" className="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i className="fa fa-heart"></i><span>Add to Wish List</span>
                                                            </button>
                                                            <button type="button" className="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i className="fa fa-refresh"></i><span>Compare this Product</span>
                                                            </button>
                                                            <a className="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i className="fa fa-eye"></i><span>Quick view</span></a>                                                        
                                                        </div>
                                                    </div>
                                                    <div className="right-block">
                                                        <div className="caption">
                                                            <div className="price">$63.00</div>
                                                            <h4><a href="product.html" title="Lamboudin ribeye" target="_self">Lamboudin ribeye</a></h4>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="ltabs-items items-category-52 grid" data-total="14">
                                    <div className="ltabs-loading"></div>
                                    
                                </div>

                                <div className="ltabs-items  items-category-53 grid" data-total="14">
                                    <div className="ltabs-loading"></div>
                                </div>

                              
                            </div>

                        </div>

                    </div>
                </div>
                            
            </div>
            <div className="slider-brands col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="yt-content-slider contentslider" data-autoplay="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column0="8" data-items_column1="6" data-items_column2="3" data-items_column3="2" data-items_column4="1" data-arrows="yes"
                        data-pagination="no" data-lazyload="yes" data-loop="no">
                    <div className="item">
                        <a href="#">
                            <img src="image/catalog/brands/b1.png" alt="brand" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src="image/catalog/brands/b2.png" alt="brand" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src="image/catalog/brands/b3.png" alt="brand" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src="image/catalog/brands/b4.png" alt="brand" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src="image/catalog/brands/b5.png" alt="brand" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src="image/catalog/brands/b6.png" alt="brand" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src="image/catalog/brands/b4.png" alt="brand" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src="image/catalog/brands/b5.png" alt="brand" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src="image/catalog/brands/b6.png" alt="brand" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
   
   

    <footer className="footer-container typefooter-1">
        <section className="footer-top">
            <div className="container ftop">
                <div className="row">
                    <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12 ">

                        <div className="module newsletter-footer1">
                            <div className="newsletter" style={{width:'100%'   , backgroundColor: '#fff'}}>

                                <div className="title-block">
                                    <div className="page-heading font-title">
                                        Signup for Newsletter
                                    </div>
                                    <div className="promotext">We’ll never share your email address with a third-party. </div>
                                </div>

                                <div className="block_content">
                                    <form method="post" id="signup" name="signup" className="form-group form-inline signup send-mail">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <input type="email" placeholder="Your email address..." value="" className="form-control" id="txtemail" name="txtemail" size="55" />
                                            </div>
                                            <div className="subcribe">
                                                <button className="btn btn-primary btn-default font-title" type="submit" onclick="return subscribe_newsletter();" name="submit">
                                            Subscribe
                                        </button>
                                            </div>
                                        </div>
                                    </form>


                                </div>

                            </div>

                        </div>




                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 ">
                        <ul className="socials">
                            <li className="facebook"><a className="_blank" href="https://www.facebook.com/MagenTech" target="_blank"><i className="fa fa-facebook"></i><span>Facebook</span></a></li>
                            <li className="twitter"><a className="_blank" href="https://twitter.com/smartaddons" target="_blank"><i className="fa fa-twitter"></i><span>Twitter</span></a></li>
                            <li className="google_plus"><a className="_blank" href="https://plus.google.com/u/0/+Smartaddons/posts" target="_blank"><i className="fa fa-google-plus"></i><span>Google Plus</span></a></li>
                            <li className="pinterest"><a className="_blank" href="https://www.pinterest.com/smartaddons/" target="_blank"><i className="fa fa-pinterest"></i><span>Pinterest</span></a></li>
                        </ul>


                    </div>
                </div>
            </div>
        </section>
        
        <div className="footer-middle ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-style">
                        <div className="infos-footer">
                            <a href="#"><img src="image/catalog/logo-footer.png" alt="image"/></a>
                            <ul className="menu">
                                <li className="adres">
                                    San Luis potosí, centro historico, 78000 san luis potosí, SPL, Mexico
                                </li>
                                <li className="phone">
                                    (+0214)0 315 215 - (+0214)0 315 215
                                </li>
                                <li className="mail">
                                    <a href="mailto:contact@opencartworks.com">contact@opencartworks.com</a>
                                </li>
                                <li className="time">
                                    Open time: 8:00AM - 6:00PM
                                </li>
                            </ul>
                        </div>


                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 col-style">
                        <div className="box-information box-footer">
                            <div className="module clearfix">
                                <h3 className="modtitle">Information</h3>
                                <div className="modcontent">
                                    <ul className="menu">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Warranty And Services</a></li>
                                        <li><a href="#">Support 24/7 page</a></li>
                                        <li><a href="#">Product Registration</a></li>
                                        <li><a href="#">Product Support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 col-style">
                        <div className="box-account box-footer">
                            <div className="module clearfix">
                                <h3 className="modtitle">My Account</h3>
                                <div className="modcontent">
                                    <ul className="menu">
                                        <li><a href="#">Brands</a></li>
                                        <li><a href="#">Gift Certificates</a></li>
                                        <li><a href="#">Affiliates</a></li>
                                        <li><a href="#">Specials</a></li>
                                        <li><a href="#">FAQs</a></li>
                                        <li><a href="#">Custom Link</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 col-style">
                        <div className="box-service box-footer">
                            <div className="module clearfix">
                                <h3 className="modtitle">Services</h3>
                                <div className="modcontent">
                                    <ul className="menu">
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Site Map</a></li>
                                        <li><a href="#">Customer Service</a></li>
                                        <li><a href="#">Custom Link</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-style">


                        <div className="module box-footer so-instagram-gallery-ltr">

                            <h4 className="modtitle">Instagram Gallery</h4>


                            <div className="form-group">

                            </div>

                            <div className="modcontent">
                                <div className="so-instagram-gallery button-type2 4" id="instagram17356972741514990310">
                                    <div className="instagram-items-inner instagram00-5 instagram01-4 instagram02-3 instagram03-2 instagram04-1">

                                        <div className="instagram-item 0  first-item ">

                                            <div className="instagram_users">
                                                <div className="img_users">
                                                    <a title="Emarket" data-href="https://www.instagram.com/p/BWcLaN9DQfW/" className="instagram_gallery_image gallery_image_instagram17356972741514990310" href="../../../../scontent.cdninstagram.com/t51.2885-15/s320x320/e35/19985119_1789473437940076_2055170824985378816_nb25f.jpg?taken-by=swhotdeal">
                                                        <img className="image_users" src="../../../../scontent.cdninstagram.com/t51.2885-15/s320x320/e35/19985119_1789473437940076_2055170824985378816_n.jpg" title="Emarket" alt="Emarket"/>
                                                    </a>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="instagram-item 1 ">

                                            <div className="instagram_users">
                                                <div className="img_users">
                                                    <a title="Emarket" data-href="https://www.instagram.com/p/BWcLY9XDLRu/" className="instagram_gallery_image gallery_image_instagram17356972741514990310" href="../../../../scontent.cdninstagram.com/t51.2885-15/s320x320/e35/19955766_152435575317196_2812535432292597760_nb25f.jpg?taken-by=swhotdeal">
                                                        <img className="image_users" src="../../../../scontent.cdninstagram.com/t51.2885-15/s320x320/e35/19955766_152435575317196_2812535432292597760_n.jpg" title="Emarket" alt="Emarket"/>
                                                    </a>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="instagram-item 2 ">

                                            <div className="instagram_users">
                                                <div className="img_users">
                                                    <a title="Emarket" data-href="https://www.instagram.com/p/BWcLT-rD17U/" className="instagram_gallery_image gallery_image_instagram17356972741514990310" href="../../../../scontent.cdninstagram.com/t51.2885-15/s320x320/e35/19933192_2345189812372940_1937990403319922688_nb25f.jpg?taken-by=swhotdeal">
                                                        <img className="image_users" src="../../../../scontent.cdninstagram.com/t51.2885-15/s320x320/e35/19933192_2345189812372940_1937990403319922688_n.jpg" title="Emarket" alt="Emarket"/>
                                                    </a>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="instagram-item 3 ">

                                            <div className="instagram_users">
                                                <div className="img_users">
                                                    <a title="Emarket" data-href="https://www.instagram.com/p/BWcLS_vjGhx/" className="instagram_gallery_image gallery_image_instagram17356972741514990310" href="../../../../scontent.cdninstagram.com/t51.2885-15/s320x320/e35/19984602_1912942795641671_1075249881506906112_nb25f.jpg?taken-by=swhotdeal">
                                                        <img className="image_users" src="../../../../scontent.cdninstagram.com/t51.2885-15/s320x320/e35/19984602_1912942795641671_1075249881506906112_n.jpg" title="Emarket" alt="Emarket"/>
                                                    </a>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="instagram-item 4 ">

                                            <div className="instagram_users">
                                                <div className="img_users">
                                                    <a title="Emarket" data-href="https://www.instagram.com/p/BWcLSNnDpJp/" className="instagram_gallery_image gallery_image_instagram17356972741514990310" href="../../../../scontent.cdninstagram.com/t51.2885-15/s320x320/e35/19985191_1485570878166875_6297995079118225408_nb25f.jpg?taken-by=swhotdeal">
                                                        <img className="image_users" src="../../../../scontent.cdninstagram.com/t51.2885-15/s320x320/e35/19985191_1485570878166875_6297995079118225408_n.jpg" title="Emarket" alt="Emarket"/>
                                                    </a>
                                                </div>
                                            </div>


                                        </div>


                                    </div>

                                </div>
                            </div>

                          
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-style">
                        <ul className="footer-links font-title">
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
                    <div className="col-lg-12 col-xs-12 text-center">
                        <img src="image/catalog/demo/payment/payment.png" alt="imgpayment"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-bottom ">
            <div className="container">
                <div className="copyright">
                    eMarket © 2018 Demo Store. All Rights Reserved. Designed by <a href="http://www.opencartworks.com/" target="_blank">OpenCartWorks.Com</a>
                </div>
            </div>
        </div>
        
        <div className="back-to-top"><i className="fa fa-angle-up"></i></div>
        <div className="back-to-top"><i className="fa fa-angle-up"></i></div>
    </footer>

    </div>
   
        
    </div>
        </>
    );
}

export default Navbar;