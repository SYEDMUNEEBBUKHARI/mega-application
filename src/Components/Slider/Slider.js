import React from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import Slider1 from "../../Assets/images/slider-1.jpg";
import Slider2 from "../../Assets/images/slider-1.jpg";
import Slider3 from "../../Assets/images/slider-1.jpg";

import './slider.css';
const contentStyle = {
    width:'100%',
    height: '460px',
    color: 'white',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'red',
  };
function Slider() {
    
    return (
       <>
       <Row className="handle-row">
         
      <Col span={10} offset={4}>


      <Carousel autoplay >
    <div>
      <img src={Slider1}  style={contentStyle}  alt="not found" />
    </div>
    <div>
    <img src={Slider2}  style={contentStyle} alt="not found" />

    </div>
    <div>
    <img src={Slider3}  style={contentStyle} alt="not found" />

    </div>
    <div>
    <img src={Slider1}  style={contentStyle} alt="not found" />

    </div>
  </Carousel>

      </Col>
      <Col span={6}>
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



export default Slider