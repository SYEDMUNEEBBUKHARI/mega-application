import React from 'react';
import './GridLayout.css';
import pastrami from "../../../Assets/images/1.jpg";
import towel from "../../../Assets/images/towel.jpg";
import { Card } from 'antd';


const { Meta } = Card;

function GridLayout() {
    return (
        <React.Fragment>
            <section className="grid-systems">
            {/* row one */}
                    <div className="row outline mt-5">
                    <div className="item-left mx-3">
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

                        <div className="item-left mx-3">
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

                        <div className="item-left mx-3">
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


                        <div className="item-left mx-3">
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


            {/* row two */}
                    <div className="row outline">
                        <div className="item-left mx-3">
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

                        <div className="item-left mx-3">
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

                        <div className="item-left mx-3">
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


                        <div className="item-left mx-3">
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



            {/* row three */}
                    <div className="row outline">
                        <div className="item-left mx-3">
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
                        
                        <div className="item-left mx-3">
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

                        <div className="item-left mx-3">
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


                        <div className="item-left mx-3">
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

                  
            </section>
        </React.Fragment>
    )
}




export default GridLayout;