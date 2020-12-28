import React from 'react';
import './TrendingItems.css';
import pastrami from "../../Assets/images/1.jpg";
import towel from "../../Assets/images/towel.jpg";
import Carousel from "react-elastic-carousel";
import { Tabs, Card } from 'antd';


const { TabPane } = Tabs;
const { Meta } = Card;

function callback(key) {
  console.log(key);
}

const breakPointsTabs = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4, }
  ];

function TrendingItems() {
    return (
        <React.Fragment>
        <h3 class="trend-title"><span style={{color: 'white',}}  className="trending-items">Trending Items</span></h3>
                    <Tabs defaultActiveKey="1" centered onChange={callback}>
                    <TabPane tab="Bedroom" key="1">
                    <Carousel className="trending-slider" style={{paddingTop: '10px', position: 'relative',}} breakPoints={breakPointsTabs}>
                    <div className="row outline ml-3">
                    <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                    <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                            
                            
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                        </Card>,
                    </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>

                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >

                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>

                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                    </div>

                
                </Carousel>
                    </TabPane>
                    <TabPane tab="Decor" key="2">
                    <Carousel style={{paddingTop: '10px', position: 'relative',}} breakPoints={breakPointsTabs}>
                    <div className="row outline ml-3">
                    <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                    
                        
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                    </div>

                
                </Carousel>
                    </TabPane>
                    <TabPane tab="Furniture" key="3">
                    <Carousel style={{paddingTop: '10px', position: 'relative',}} breakPoints={breakPointsTabs}>
                    <div className="row outline ml-3">
                    <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                    
                        
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                    </div>

                    <div className="row outline ml-3">
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img className="image" src={pastrami} alt=""/>}
                        >
                            <div className="hoverable-draw">
                                <div className="overlay">
                                    <a href="#" className="icon" title="User Profile">
                                       
                                        <img className="hover-image" src={towel} alt=""/>
                                    </a>
                                </div>
                            </div>
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                    </div>

                
                </Carousel>
                    </TabPane>
                </Tabs>
        </React.Fragment>
    )
}



export default TrendingItems;