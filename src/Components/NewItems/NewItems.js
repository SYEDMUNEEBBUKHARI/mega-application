import React from 'react';
import pastrami from "../../Assets/images/1.jpg";
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
    { width: 1200, itemsToShow: 4 }
  ];

function NewItems() {
    return (
        <React.Fragment>
        <h3 class="modtitle"><span className="daily-deals">NEW ITEMS</span></h3>
                    <Tabs defaultActiveKey="1" centered onChange={callback}>
                    <TabPane tab="Bedroom" key="1">
                    <Carousel style={{paddingTop: '10px', position: 'relative',}} breakPoints={breakPointsTabs}>
                    <div className="row outline ml-3">
                    <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                    
                        
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                    
                        
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                    
                        
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>
                        
                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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
                            cover={ <img src={pastrami} alt=""/>}
                        >
                        <Meta title="Europe Street beat" description="$42.00"
                         />

                    </Card>,
                        </div>

                        <div className="item-left">
                        <Card
                            hoverable
                            style={{ width: '205px',backgroundColor: '#f7f7f7', }}
                            cover={ <img src={pastrami} alt=""/>}
                        >
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




export default NewItems;
