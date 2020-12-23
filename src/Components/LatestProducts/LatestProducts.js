import React from 'react';
import './LatestProducts.css';
import Carousel from "react-elastic-carousel";
import product1 from "../../Assets/images/chair.jpg";
import deco from "../../Assets/images/left-deco.jpg"
import banner7 from "../../Assets/images/banner7.jpg";
import { FaFileInvoice } from "react-icons/fa";
import TrendingItems from '../TrendingItems/TrendingItems';
import ShoppingGrid from '../ShoppingGrid/ShoppingGrid';
import AwardSlider from '../AwardSlider/AwardSlider';
import NewItems from '../NewItems/NewItems';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 }
  ];




function LatestProducts() {
    return (
        <div className="container-fluid">
          <div className="row mt-4 mx-2">
                <div className="col-md-2">
                <h5 class="modtitle"><span className="latest-products">Latest Products</span></h5>

                <Carousel style={{paddingTop: '10px', position: 'relative',}} breakPoints={breakPoints}>
                        <div className="row outline">
                            <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>



                        {/* second item */}
                        <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>




                            {/* third item */}
                            <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>




                            {/* fourth item */}
                            <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>
                        </div>

                        <div className="row outline">
                        <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>



                        {/* second item */}
                            <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>


                            {/* third item */}
                            <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>




                            {/* Fourth item */}
                            <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>
                        </div>
                </Carousel>



                <div class="module">
                    <ul class="block-infos">
                        <li class="info1">
                            <div class="inner">
                                <div class="info-cont">
                                <FaFileInvoice /><a href="#">free delivery</a>
                                    <p className="mb-4">On order over $49.86</p>
                                </div>
                            </div>
                        </li>
                        <li class="info2">
                            <div class="inner">
                                <div class="info-cont">
                                <FaFileInvoice /><a href="#">order protecttion</a>
                                    <p>secured information</p>
                                </div>
                            </div>
                        </li>
                        <li class="info3">
                            <div class="inner">
                                <div class="info-cont">
                                <FaFileInvoice /><a href="#">promotion gift</a>
                                    <p>special offers!</p>
                                </div>
                            </div>
                        </li>
                        <li class="info4">
                            <div class="inner">
                                <div class="info-cont">
                                <FaFileInvoice /><a href="#">money back</a>
                                    <p>return over 30 days</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>



                <h5 class="modtitle"><span className="latest-products">Latest Bolgs</span></h5>
                <Carousel style={{paddingTop: '10px', position: 'relative',}} breakPoints={breakPoints}>
                        <div className="row outline no-gutters">
                            <div className="item-left">
                                <img className="mb-3" alt="example" src={deco} />

                                <div className="deco-descriptions">
                                    <small>Duis autem vel eum irure sed diam nonumy</small>
                                    <b> December 4th, 2017</b><br />
                                    <b> 0 comment</b>
                                </div>
                            </div>
                        </div>

                        <div className="row outline no-gutters">
                            <div className="item-left">
                                <img className="mb-3" alt="example" src={deco} />

                                <div className="deco-descriptions">
                                    <small>Duis autem vel eum irure sed diam nonumy</small>
                                    <b> December 4th, 2017</b><br />
                                    <b> 0 comment</b>
                                </div>
                            </div>
                        </div>

                        <div className="row outline no-gutters">
                            <div className="item-left">
                                <img className="mb-3" alt="example" src={deco} />

                                <div className="deco-descriptions">
                                    <small>Duis autem vel eum irure sed diam nonumy</small>
                                    <b> December 4th, 2017</b><br />
                                    <b> 0 comment</b>
                                </div>
                            </div>
                        </div>

                        <div className="row outline no-gutters">
                            <div className="item-left">
                                <img className="mb-3" alt="example" src={deco} />

                                <div className="deco-descriptions">
                                    <small>Duis autem vel eum irure sed diam nonumy</small>
                                    <b> December 4th, 2017</b><br />
                                    <b> 0 comment</b>
                                </div>
                            </div>
                        </div>
                </Carousel>





                {/* top rated */}
                <h5 class="modtitle"><span className="latest-products">TOP RATED</span></h5>

                <Carousel style={{paddingTop: '10px', position: 'relative',}} breakPoints={breakPoints}>
                        <div className="row outline">
                            <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>



                        {/* second item */}
                        <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>




                            {/* third item */}
                            <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>




                            {/* fourth item */}
                            <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>
                        </div>

                        <div className="row outline">
                        <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>



                        {/* second item */}
                            <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>


                            {/* third item */}
                            <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>




                            {/* Fourth item */}
                            <div className="item-left-img col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="item-right col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div class="item-info mb-4">
                                <div class="item-title">
                                    <a href="#" target="_self" title="Mandouille short">Mandouille short </a>
                                </div>
                                
                                                <div class="content_price price">
                                                    <span class="price-new product-price">$55.00 </span>&nbsp;&nbsp;

                                                    <span class="overline">$76.00 </span>&nbsp;

                                                </div>
                                            </div>
                            </div>
                        </div>
                </Carousel>
                </div>

                <div className="col-md-10">
                    <div className="discount-image">
                        <img src={banner7} alt="" />
                    </div>

                    <TrendingItems />
                    <ShoppingGrid />
                    <NewItems />
                </div>
                <AwardSlider />
          </div>
        </div>
      
    )
}



export default LatestProducts