import React from 'react';
import './AwardSlider.css';
import Carousel from "react-elastic-carousel";
import b1 from "../../Assets/images/branded/b1.png";
import b2 from "../../Assets/images/branded/b2.png";
import b3 from "../../Assets/images/branded/b3.png";
import b4 from "../../Assets/images/branded/b4.png";
import b5 from "../../Assets/images/branded/b4.png";
import b6 from "../../Assets/images/branded/b4.png";



import { Card } from 'antd';


const { Meta } = Card;
function callback(key) {
    console.log(key);
  }
  
  const breakPointsTabs = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 6 },
      { width: 1200, itemsToShow: 6 }
    ];


function AwardSlider() {
    return (
        <div className="container-fluid mt-4 mb-5">
            <Carousel className="award-slider" style={{paddingTop: '10px', position: 'relative',}} breakPoints={breakPointsTabs}>
                    <div className="row outline">
                        <div className="item-center">
                            <img src={b1} alt=""/>
                        </div>
                    </div>

                    <div className="row outline">
                        <div className="item-center">
                            <img src={b2} alt=""/>
                        </div>
                    </div>

                    <div className="row outline">
                        <div className="item-center">
                            <img src={b3} alt=""/>
                        </div>
                    </div>

                    <div className="row outline">
                        <div className="item-center">
                            <img src={b4} alt=""/>
                        </div>
                    </div>

                    <div className="row outline">
                        <div className="item-center">
                            <img src={b5} alt=""/>
                        </div>
                    </div>

                    <div className="row outline">
                        <div className="item-center">
                            <img src={b6} alt=""/>
                        </div>
                    </div>

                    <div className="row outline">
                        <div className="item-center">
                            <img src={b6} alt=""/>
                        </div>
                    </div>
                    
                    <div className="row outline">
                        <div className="item-center">
                            <img src={b6} alt=""/>
                        </div>
                    </div>
                </Carousel>
        </div>
    )
}



export default AwardSlider
