import React, { useEffect, useState } from "react";
import windowSize from 'react-window-size';
import {FaHamburger} from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import "./category.css";
import {HiOutlineShoppingCart} from "react-icons/hi";
import Slider from "../Slider/Slider";
import CategoryDraw from "../CategorySidedraw/CategorySideDraw";
import {FiRefreshCcw} from "react-icons/fi"
import {HiShoppingCart} from "react-icons/hi";
import {ImHeart} from "react-icons/im";
import {FiChevronDown,FiChevronUp} from "react-icons/fi";
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Option } = Select;

const { Search } = Input;



const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);




function Category(props){
let chevup=<FiChevronUp className="showchevron"/>;
let chevdown=<FiChevronDown className="showchevron"/>;
const[chevron,setChevron]=useState(false);
const[show,setShow]=useState('show');
  const handleCategory=()=>{
    setChevron(!chevron);
    if(chevron){
      setShow("show")
    }
    else{
      setShow("hide")
    }
}
const [windows,setWindow]=useState(props.windowWidth);

     useEffect(()=>{
  setWindow(props.windowWidth);
console.log("windows",windows);

     },[windows,props.windowWidth])
            const onSearch=()=>{

            }

            const handleCategoryChange=()=>{

            }
return(
<>

<div className="makeflex">
   <div>{ windows>850?  <><div className="categories text-center" onClick={handleCategory}><span className="category-position"> <HiShoppingCart className="cate-icons" />Categories {chevron ? chevup : chevdown}</span></div>

      <ul className={`menu ${show}`}>
        <li className="vertical first"><a  className="vertical-menu-item" href="#"><FaHamburger className="menu-icon"/>  BURGERS</a>

          <div className="megadrop">

            <div className="col">
              <h3 className="title">Title</h3>
              <ul>
                <li><a href="#">Sub-menu 1</a>
                </li>
                <li><a href="#">Sub-menu 2</a>
                </li>
                <li><a href="#">Sub-menu 3</a>
            </li>
       </ul>
        </div>
        <div className="col">
          <h3  className="title">Title</h3>
          <ul>
            <li><a href="#">Sub-menu 1</a>
            </li>
            <li><a href="#">Sub-menu 2</a>
            </li>
            <li><a href="#">Sub-menu 3</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3  className="title">Title</h3>
          <ul>
            <li><a href="#">Sub-menu 1</a>
            </li>
            <li><a href="#">Sub-menu 2</a>
            </li>
            <li><a href="#">Sub-menu 3</a>
            </li>
          </ul>
        </div>

      </div>

    </li>
        <li className="vertical "> <a  className="vertical-menu-item" href="#"><FaHamburger className="menu-icon" />  BURGERS</a>

      <div className="megadrop">

      </div>

    </li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#"><FaHamburger className="menu-icon" />  BURGERS</a>

      <div className="megadrop">

      </div>

    </li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#"><FaHamburger className="menu-icon" />  BURGERS</a>

      <div className="megadrop">

      </div>

    </li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#"><FaHamburger className="menu-icon" />  BURGERS</a>

<div className="megadrop">

</div>

</li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#"><FaHamburger className="menu-icon" />  BURGERS</a>

<div className="megadrop">

</div>

</li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#"><FaHamburger className="menu-icon" />  BURGERS</a>

<div className="megadrop">

</div>

</li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#"><FaHamburger className="menu-icon" />  BURGERS</a>

<div className="megadrop">

</div>

</li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#"><FaHamburger className="menu-icon" />  BURGERS</a>

<div className="megadrop">

</div>

</li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#"><FaHamburger className="menu-icon" />  BURGERS</a>

      <div className="megadrop">

      </div>

    </li>

      </ul>
      </>:  <CategoryDraw />}
  </div>

<div className="category-flex">
{windows>850?  <div> <Select
    labelInValue
    defaultValue={{ value: 'Categories' }}
    style={{ width: 120 }}
    onChange={handleCategoryChange}
  >
    <Option value="jack">Jack (100)</Option>
    <Option value="lucy">Lucy (101)</Option>
  </Select></div>:""}
  <div>
<form className="search-form">
 {windows>850? 
 <> <input id="search" type="search" className="search-input" placeholder="Enter search terms..." />
  <button className="search-button">Search</button></>
  :""}
</form>
</div>
    </div>
    <div className="make-flex">
<div className={windows>850 ? "flex-refresh":"hide"}><FiRefreshCcw className="icon-refresh" /></div>
<div className={windows>850 ? "flex-refresh-heart":"hide"}><ImHeart className="icon-refresh" /></div>
<div className="shopping">
  <Dropdown overlay={menu} placement="bottomCenter">
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    <HiOutlineShoppingCart  className="shop-icon"/>
    </a>
  </Dropdown> {windows>850 ? <>My Cart <span>-$192.0</span></>:""}</div>

</div>



</div>
<div  >
 {/* <Slider /> */}
 </div>
</>
);
}

export default windowSize(Category);