import React from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import Slider1 from "../../Assets/images/MainSlider.jpg";
import Slider2 from "../../Assets/images/MainSlider.jpg";
import Slider3 from "../../Assets/images/MainSlider.jpg";
import windowSize from 'react-window-size';


import './slider.css';
const contentStyle = {
    width:'100%',
    height: '460px',
    color: 'white',
    lineHeight: '160px',
    textAlign: 'center',
    // background: 'red',
  };
function Slider(props) {
    
    return (
       <>
       <div className="">
          <Row className="handle-row ">
         
      <Col span={props.windowWidth<770 ? 24:24}>


      <Carousel autoplay >
    <div>
      <img src={Slider1}  style={contentStyle}  className="slide-image-first" alt="not found" />
    </div>
    <div>
    <img src={Slider2}  style={contentStyle} className="slide-image-first" alt="not found" />

    </div>
    <div>
    <img src={Slider3}  style={contentStyle} className="slide-image-first" alt="not found" />

    </div>
    <div>
    <img src={Slider1}  style={contentStyle} className="slide-image-first" alt="not found" />

    </div>
  </Carousel>

      </Col>
      
  </Row>
      </div>
        </>
    )
}



export default windowSize(Slider);