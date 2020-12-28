import React from 'react';
import Slider from "../../Components/Slider/Slider";
import './DailyDeals.css';
import Carousel from "react-elastic-carousel";
import banner4 from "../../Assets/images/banner4.jpg";
import product1 from "../../Assets/images/chair.jpg";
import prdouct2 from "../../Assets/images/2.jpg";
import product3 from "../../Assets/images/3.jpg";
import product4 from "../../Assets/images/4.jpg";
import { GrCart } from "react-icons/gr";
import { GoHeart } from "react-icons/go";
import { RiRefreshLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";




const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 }
  ];
  
 function DailyDeals() {
    return (
        <>
        <Slider />
        <div className="container-fluid">
            <div className="row mt-5 mx-2">
                <div className="col-md-2">
                    <div className="card mt-5">
                        <img className="left-draw-image" src={banner4} alt="Card image cap" />
                    </div>
                </div>
                <div className="col-md-10">
                <h3 class="modtitle"><span style={{color: 'white',}} className="daily-deals">Daily Deals</span></h3>
                <Carousel className="daily-deals-slider" style={{paddingTop: '10px', position: 'relative',}} breakPoints={breakPoints}>
                    <div className="row outline">
                        <div className="item-left col-lg-6 col-md-5 col-sm-5 col-xs-12">
                        <div className="side-menu" id="sidenav">
                            <a href="#" id="about">Add to Cart    <GrCart className="cart" /></a>
                            <a href="#" id="blog">Add to Wish List <GoHeart className="heart" /></a>
                            <a href="#" id="projects">Projects <RiRefreshLine className="refresh"/></a>
                            <a href="#" id="contact">Contact<RiEyeLine className="eye"/></a>
                        </div>
                            <img src={product1} alt=""/>
                        </div>
                        <div className="item-right col-lg-6 col-md-7 col-sm-7 col-xs-12">
                            <div className="inner-cart">
                                <a href="#" target="_self" title="Xancetta bresao">Xancetta bresao</a>
                                <p className="price">   
                                    <span className="price-new">$80.00</span>
                                    <span className="price-old ml-1">$89.00</span>
                                </p>
                                <div className="item-available">
                               <div className="row no-gutters mr-3">
                                   <p className="col-md-6 col-xs-6 a1">Available: <b className="avail-price">555</b> 
                                        </p>
                                      <p className="col-md-6 col-xs-6 sold">Sold: <b>0</b> 
                                     </p>
                                  </div>
                                    <div className="available"> 
                                        <span className="color_width" data-title="0%" data-toggle="tooltip" title="" style={{width: '0%',}} data-original-title="75%"></span>
                                     </div>
                                     <div class="item-time">
                                         <div class="item-timer">
                                              <div class="defaultCountdown-30">
                                                  <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Day </div>
                                                   </div>
                                                   <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Hour </div>
                                                   </div>
                                                   <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Min </div>
                                                   </div>
                                                   <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Sec </div>
                                                   </div>
                                     
                                            </div>
                                         </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row outline">
                        <div className="item-left col-lg-6 col-md-5 col-sm-5 col-xs-12">
                        <div className="side-menu" id="sidenav">
                            <a href="#" id="about">Add to Cart    <GrCart className="cart" /></a>
                            <a href="#" id="blog">Add to Wish List <GoHeart className="heart" /></a>
                            <a href="#" id="projects">Projects <RiRefreshLine className="refresh"/></a>
                            <a href="#" id="contact">Contact<RiEyeLine className="eye"/></a>
                        </div>
                            <img src={prdouct2} alt=""/>
                        </div>
                        <div className="item-right col-lg-6 col-md-7 col-sm-7 col-xs-12">
                        <div className="inner-cart">
                                <a href="#" target="_self" title="Xancetta bresao">Xancetta bresao</a>
                                <p className="price">   
                                    <span className="price-new">$80.00</span>
                                    <span className="price-old ml-1">$89.00</span>
                                </p>
                                <div className="item-available">
                               <div className="row no-gutters mr-3">
                                   <p className="col-md-6 col-xs-6 a1">Available: <b className="avail-price">555</b> 
                                        </p>
                                      <p className="col-md-6 col-xs-6 sold">Sold: <b>0</b> 
                                     </p>
                                  </div>
                                    <div className="available"> 
                                        <span className="color_width" data-title="0%" data-toggle="tooltip" title="" style={{width: '0%',}} data-original-title="75%"></span>
                                     </div>
                                     <div class="item-time">
                                         <div class="item-timer">
                                              <div class="defaultCountdown-30">
                                                  <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Day </div>
                                                   </div>
                                                   <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Hour </div>
                                                   </div>
                                                   <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Min </div>
                                                   </div>
                                                   <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Sec </div>
                                                   </div>
                                     
                                            </div>
                                         </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row outline">
                        <div className="item-left col-lg-6 col-md-5 col-sm-5 col-xs-12">
                        <div className="side-menu" id="sidenav">
                            <a href="#" id="about">Add to Cart    <GrCart className="cart" /></a>
                            <a href="#" id="blog">Add to Wish List <GoHeart className="heart" /></a>
                            <a href="#" id="projects">Projects <RiRefreshLine className="refresh"/></a>
                            <a href="#" id="contact">Contact<RiEyeLine className="eye"/></a>
                        </div>
                            <img src={product3} alt=""/>
                        </div>
                        <div className="item-right col-lg-6 col-md-7 col-sm-7 col-xs-12">
                        <div className="inner-cart">
                                <a href="#" target="_self" title="Xancetta bresao">Xancetta bresao</a>
                                <p className="price">   
                                    <span className="price-new">$80.00</span>
                                    <span className="price-old ml-1">$89.00</span>
                                </p>
                                <div className="item-available">
                               <div className="row no-gutters mr-3">
                                   <p className="col-md-6 col-xs-6 a1">Available: <b className="avail-price">555</b> 
                                        </p>
                                      <p className="col-md-6 col-xs-6 sold">Sold: <b>0</b> 
                                     </p>
                                  </div>
                                    <div className="available"> 
                                        <span className="color_width" data-title="0%" data-toggle="tooltip" title="" style={{width: '0%',}} data-original-title="75%"></span>
                                     </div>
                                     <div class="item-time">
                                         <div class="item-timer">
                                              <div class="defaultCountdown-30">
                                                  <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Day </div>
                                                   </div>
                                                   <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Hour </div>
                                                   </div>
                                                   <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Min </div>
                                                   </div>
                                                   <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Sec </div>
                                                   </div>
                                     
                                            </div>
                                         </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row outline">
                        <div className="item-left col-lg-6 col-md-5 col-sm-5 col-xs-12">
                        <div className="side-menu" id="sidenav">
                            <a href="#" id="about">Add to Cart    <GrCart className="cart" /></a>
                            <a href="#" id="blog">Add to Wish List <GoHeart className="heart" /></a>
                            <a href="#" id="projects">Projects <RiRefreshLine className="refresh"/></a>
                            <a href="#" id="contact">Contact<RiEyeLine className="eye"/></a>
                        </div>
                            <img src={product4} alt=""/>
                        </div>
                        <div className="item-right col-lg-6 col-md-7 col-sm-7 col-xs-12">
                        <div className="inner-cart">
                                <a href="#" target="_self" title="Xancetta bresao">Xancetta bresao</a>
                                <p className="price">   
                                    <span className="price-new">$80.00</span>
                                    <span className="price-old ml-1">$89.00</span>
                                </p>
                                <div className="item-available">
                               <div className="row no-gutters mr-3">
                                   <p className="col-md-6 col-xs-6 a1">Available: <b className="avail-price">555</b> 
                                        </p>
                                      <p className="col-md-6 col-xs-6 sold">Sold: <b>0</b> 
                                     </p>
                                  </div>
                                    <div className="available"> 
                                        <span className="color_width" data-title="0%" data-toggle="tooltip" title="" style={{width: '0%',}} data-original-title="75%"></span>
                                     </div>
                                     <div class="item-time">
                                         <div class="item-timer">
                                              <div class="defaultCountdown-30">
                                                  <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Day </div>
                                                   </div>
                                                   <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Hour </div>
                                                   </div>
                                                   <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Min </div>
                                                   </div>
                                                   <div class="time-item time-hour">
                                                          <div class="num-time">00</div>
                                                          <div class="name-time">Sec </div>
                                                   </div>
                                            </div>
                                         </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
                </div>
            </div>
        </div>
        </>)
}


export default DailyDeals;