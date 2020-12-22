import React from 'react';
import './LatestProducts.css';
import Carousel from "react-elastic-carousel";
import product1 from "../../Assets/images/chair.jpg";
import prdouct2 from "../../Assets/images/2.jpg";
import product3 from "../../Assets/images/3.jpg";
import product4 from "../../Assets/images/4.jpg";
import banner7 from "../../Assets/images/banner7.jpg";
import pastrami from "../../Assets/images/1.jpg"
import { Tabs, Card } from 'antd';

const { TabPane } = Tabs;
const { Meta } = Card;

function callback(key) {
  console.log(key);
}
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 }
  ];


  const breakPointsTabs = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
  ];


function LatestProducts() {
    return (
        <div className="container">
          <div className="row mt-4">
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
                        </div>
                        </Carousel>
                </div>







                <div className="col-md-10">
                    <div className="discount-image">
                        <img src={banner7} alt="" />
                    </div>

                    <h3 class="modtitle"><span className="daily-deals">Trending Items</span></h3>
                    <Tabs defaultActiveKey="1" centered onChange={callback}>
                    <TabPane tab="Bedroom" key="1">
                    <Carousel style={{paddingTop: '10px', position: 'relative',}} breakPoints={breakPointsTabs}>
                    <div className="row outline">
                    <div className="item-left">
                     <Card
                        hoverable
                        style={{ width: '240px',backgroundColor: '#f7f7f7', }}
                        cover={ <img src={pastrami} alt=""/>}
                    >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                    
                        
                        </div>

                        <div className="item-left">
                            <img src={product1} alt=""/>
                        </div>
                        
                    </div>

                    <div className="row outline">
                        <div className="item-left">
                            <img src={product1} alt=""/>
                        </div>

                        <div className="item-left">
                            <img src={product1} alt=""/>
                        </div>
                        
                    </div>

                    <div className="row outline">
                        <div className="item-left">
                            <img src={product1} alt=""/>
                        </div>
                        
                        <div className="item-left">
                            <img src={product1} alt=""/>
                        </div>
                    </div>

                    <div className="row outline">
                        <div className="item-left">
                            <img src={product1} alt=""/>
                        </div>
                        <div className="item-left">
                            <img src={product1} alt=""/>
                        </div>
                        
                    </div>

                    <div className="row outline">
                        <div className="item-left">
                            <img src={product1} alt=""/>
                        </div>
                        
                        <div className="item-left">
                            <img src={product1} alt=""/>
                        </div>
                    </div>

                    <div className="row outline">
                        <div className="item-left">
                            <img src={product1} alt=""/>
                        </div>
                        
                        <div className="item-left">
                            <img src={product1} alt=""/>
                        </div>
                    </div>

                    <div className="row outline">
                        <div className="item-left">
                            <img src={product1} alt=""/>
                        </div>

                        <div className="item-left">
                            <img src={product1} alt=""/>
                        </div>
                        
                    </div>

                
                </Carousel>
                    </TabPane>
                    <TabPane tab="Decor" key="2">
                    Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Furniture" key="3">
                    Content of Tab Pane 3
                    </TabPane>
                </Tabs>
                </div>
          </div>
        </div>
      
    )
}



export default LatestProducts