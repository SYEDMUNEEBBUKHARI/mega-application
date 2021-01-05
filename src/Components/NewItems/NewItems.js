import React from 'react';
import './NewItems.css';
import pastrami from "../../Assets/images/1.jpg";
import Carousel from "react-elastic-carousel";
import towel from "../../Assets/images/towel.jpg";
import { Tabs, Card } from 'antd';
import { BiShoppingBag, BiHeart } from "react-icons/bi";
import {FiRefreshCcw} from "react-icons/fi"
import { BsEye } from "react-icons/bs";
import big from "../../Assets/images/left-big.jpg";


const { TabPane } = Tabs;
const { Meta } = Card;

function callback(key) {
  console.log(key);
}


function NewItems() {
    return (
        <React.Fragment>
        <h3 class="new-title"><span className="new-items">NEW ITEMS</span></h3>
                    <Tabs defaultActiveKey="1" centered onChange={callback}>
                    <TabPane tab="Bedroom" key="1">
                    <div className="row outline">
                        <div className="col-md-5">
                            <div className="item-left left-full">
                                <Card
                                hoverable
                                style={{ width: '100%', height: '605px', backgroundColor: '#f7f7f7', }}
                                cover={ <img style={{height: '400px',}} className="image" src={big} alt=""/>}
                            >
                                <div className="hoverable-draw">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img style={{height: '496px',}} className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                

                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />


                            </Card>,
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="row no-gutters">
                                <div className="item-left mr-3">
                                <Card
                                    hoverable
                                    style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                    cover={ <img className="image" src={pastrami} alt=""/>}
                                >

                                    <div className="hoverable-draw right-new-items">
                                        <div className="overlay">
                                            <div className="profile">
                                                <div class="img-box">
                                                    <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                    <ul class="text-center">
                                                    <a href="#"><li><BiShoppingBag /></li></a>
                                                    <a href="#"><li><BiHeart /></li></a>
                                                    <a href="#"><li><FiRefreshCcw /></li></a>
                                                    <a href="#"><li><BsEye /></li></a>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <div className="rating-upper" style={{width: '0%',}}>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                        </div>
                                        <div className="rating-lower">
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                        </div>
                                    </div>
                                <Meta title="Europe Street beat" description="$42.00"
                                />

                            </Card>,
                            
                                </div>
                                <div className="item-left mr-3">
                            <Card
                                hoverable
                                style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                cover={ <img className="image" src={pastrami} alt=""/>}
                            >

                                <div className="hoverable-draw right-new-items">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />

                        </Card>,
                        
                            </div>
                                <div className="item-left mr-3">
                            <Card
                                hoverable
                                style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                cover={ <img className="image" src={pastrami} alt=""/>}
                            >
                                <div className="hoverable-draw right-new-items">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />

                        </Card>,
                            </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="item-left mr-3">
                            <Card
                                hoverable
                                style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                cover={ <img className="image" src={pastrami} alt=""/>}
                            >
                                <div className="hoverable-draw right-new-items">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />

                        </Card>,
                            </div>
                                <div className="item-left mr-3">
                            <Card
                                hoverable
                                style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                cover={ <img className="image" src={pastrami} alt=""/>}
                            >
                                <div className="hoverable-draw right-new-items">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />

                        </Card>,
                            </div>
                                <div className="item-left mr-3">
                            <Card
                                hoverable
                                style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                cover={ <img className="image" src={pastrami} alt=""/>}
                            >
                                <div className="hoverable-draw right-new-items">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />

                        </Card>,
                            </div>
                            </div>
                        </div>
                    </div>

                    </TabPane>
                    <TabPane tab="Decor" key="2">
                    <div className="row outline">
                        <div className="col-md-5">
                            <div className="item-left left-full">
                                <Card
                                hoverable
                                style={{ width: '100%', height: '605px', backgroundColor: '#f7f7f7', }}
                                cover={ <img style={{height: '400px',}} className="image" src={big} alt=""/>}
                            >
                                <div className="hoverable-draw">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img style={{height: '496px',}} className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                

                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />


                            </Card>,
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="row no-gutters">
                                <div className="item-left mr-3">
                                <Card
                                    hoverable
                                    style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                    cover={ <img className="image" src={pastrami} alt=""/>}
                                >

                                    <div className="hoverable-draw right-new-items">
                                        <div className="overlay">
                                            <div className="profile">
                                                <div class="img-box">
                                                    <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                    <ul class="text-center">
                                                    <a href="#"><li><BiShoppingBag /></li></a>
                                                    <a href="#"><li><BiHeart /></li></a>
                                                    <a href="#"><li><FiRefreshCcw /></li></a>
                                                    <a href="#"><li><BsEye /></li></a>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <div className="rating-upper" style={{width: '0%',}}>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                        </div>
                                        <div className="rating-lower">
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                        </div>
                                    </div>
                                <Meta title="Europe Street beat" description="$42.00"
                                />

                            </Card>,
                            
                                </div>
                                <div className="item-left mr-3">
                            <Card
                                hoverable
                                style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                cover={ <img className="image" src={pastrami} alt=""/>}
                            >

                                <div className="hoverable-draw right-new-items">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />

                        </Card>,
                        
                            </div>
                                <div className="item-left mr-3">
                            <Card
                                hoverable
                                style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                cover={ <img className="image" src={pastrami} alt=""/>}
                            >
                                <div className="hoverable-draw right-new-items">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />

                        </Card>,
                            </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="item-left mr-3">
                            <Card
                                hoverable
                                style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                cover={ <img className="image" src={pastrami} alt=""/>}
                            >
                                <div className="hoverable-draw right-new-items">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />

                        </Card>,
                            </div>
                                <div className="item-left mr-3">
                            <Card
                                hoverable
                                style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                cover={ <img className="image" src={pastrami} alt=""/>}
                            >
                                <div className="hoverable-draw right-new-items">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />

                        </Card>,
                            </div>
                                <div className="item-left mr-3">
                            <Card
                                hoverable
                                style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                cover={ <img className="image" src={pastrami} alt=""/>}
                            >
                                <div className="hoverable-draw right-new-items">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />

                        </Card>,
                            </div>
                            </div>
                        </div>
                    </div>
                    </TabPane>
                    <TabPane tab="Furniture" key="3">
                    <div className="row outline">
                        <div className="col-md-5">
                            <div className="item-left left-full">
                                <Card
                                hoverable
                                style={{ width: '100%', height: '605px', backgroundColor: '#f7f7f7', }}
                                cover={ <img style={{height: '400px',}} className="image" src={big} alt=""/>}
                            >
                                <div className="hoverable-draw">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img style={{height: '496px',}} className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                

                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />


                            </Card>,
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="row no-gutters">
                                <div className="item-left mr-3">
                                <Card
                                    hoverable
                                    style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                    cover={ <img className="image" src={pastrami} alt=""/>}
                                >

                                    <div className="hoverable-draw right-new-items">
                                        <div className="overlay">
                                            <div className="profile">
                                                <div class="img-box">
                                                    <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                    <ul class="text-center">
                                                    <a href="#"><li><BiShoppingBag /></li></a>
                                                    <a href="#"><li><BiHeart /></li></a>
                                                    <a href="#"><li><FiRefreshCcw /></li></a>
                                                    <a href="#"><li><BsEye /></li></a>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <div className="rating-upper" style={{width: '0%',}}>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                        </div>
                                        <div className="rating-lower">
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                        </div>
                                    </div>
                                <Meta title="Europe Street beat" description="$42.00"
                                />

                            </Card>,
                            
                                </div>
                                <div className="item-left mr-3">
                            <Card
                                hoverable
                                style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                cover={ <img className="image" src={pastrami} alt=""/>}
                            >

                                <div className="hoverable-draw right-new-items">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />

                        </Card>,
                        
                            </div>
                                <div className="item-left mr-3">
                            <Card
                                hoverable
                                style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                cover={ <img className="image" src={pastrami} alt=""/>}
                            >
                                <div className="hoverable-draw right-new-items">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />

                        </Card>,
                            </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="item-left mr-3">
                            <Card
                                hoverable
                                style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                cover={ <img className="image" src={pastrami} alt=""/>}
                            >
                                <div className="hoverable-draw right-new-items">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />

                        </Card>,
                            </div>
                                <div className="item-left mr-3">
                            <Card
                                hoverable
                                style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                cover={ <img className="image" src={pastrami} alt=""/>}
                            >
                                <div className="hoverable-draw right-new-items">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />

                        </Card>,
                            </div>
                                <div className="item-left mr-3">
                            <Card
                                hoverable
                                style={{ width: '185px',backgroundColor: '#f7f7f7', }}
                                cover={ <img className="image" src={pastrami} alt=""/>}
                            >
                                <div className="hoverable-draw right-new-items">
                                    <div className="overlay">
                                        <div className="profile">
                                            <div class="img-box">
                                                <img className="trend-hover-image" src={towel} alt=""/>                                  
                                                <ul class="text-center">
                                                <a href="#"><li><BiShoppingBag /></li></a>
                                                <a href="#"><li><BiHeart /></li></a>
                                                <a href="#"><li><FiRefreshCcw /></li></a>
                                                <a href="#"><li><BsEye /></li></a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rating">
                                    <div className="rating-upper" style={{width: '0%',}}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                    <div className="rating-lower">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            <Meta title="Europe Street beat" description="$42.00"
                            />

                        </Card>,
                            </div>
                            </div>
                        </div>
                    </div>
                    </TabPane>
                </Tabs>
        </React.Fragment>
    )
}




export default NewItems;
