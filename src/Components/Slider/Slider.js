import React from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import Slider1 from "../../Assets/images/slider-1.jpg";
import Slider2 from "../../Assets/images/slider-1.jpg";
import Slider3 from "../../Assets/images/slider-1.jpg";
import windowSize from 'react-window-size';


import './slider.css';
const contentStyle = {
    width:'100%',
    height: '460px',
    color: 'white',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'red',
  };
function Slider(props) {
    
    return (
       <>
       <Row className="handle-row">
         
      <Col span={props.windowWidth<770 ? 24:11} offset={props.windowWidth<770 ? 0:2}>


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
      <Col span={props.windowWidth>770 && 6} className={props.windowWidth<770 && "hidecol"}>
        <Row gutter={[16, 16,2]}>
          <Col span={8} >   
           <img src={Slider1}  className="slide-image" alt="not found" />
          </Col>
          
       </Row>
       <Row gutter={[16, 16,2]}>
          <Col span={8} >   
           <img src={Slider1}  className="slide-image" alt="not found" />
          </Col>
          
       </Row>
     </Col>
     <col span={4}></col>
  </Row>
       
        </>
    )
}



export default windowSize(Slider);