import React, { useEffect, useState } from "react";
import windowSize from 'react-window-size';
import {FaHamburger} from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import left from "../../Assets/images/4.jpg";
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
    <li>
                                        <table class="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <td class="text-center" style={{width:'70px',}} >
                                                        <a href="product.html">
                                                            <img src={left} style={{width:'70px',}}  alt="Yutculpa ullamcon" title="Yutculpa ullamco" class="preview"/>
                                                        </a>
                                                    </td>
                                                    <td class="text-left"> <a class="cart_product_name" href="product.html">Yutculpa<br /> ullamco</a> 
                                                    </td>
                                                    <td class="text-center">x1</td>
                                                    <td class="text-center">$80.00</td>
                                                    <td class="text-right">
                                                        <a href="product.html" class="fa fa-edit"></a>
                                                    </td>
                                                    <td class="text-right">
                                                        <a onclick="cart.remove('2');" class="fa fa-times fa-delete"></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center" style={{width:'70px',}} >
                                                        <a href="product.html">
                                                            <img src={left} style={{width:'70px',}} alt="Xancetta bresao" title="Xancetta bresao" class="preview" />
                                                        </a>
                                                    </td>
                                                    <td class="text-left"> <a class="cart_product_name" href="product.html">Xancetta bresao</a> 
                                                    </td>
                                                    <td class="text-center">x1</td>
                                                    <td class="text-center">$60.00</td>
                                                    <td class="text-right">
                                                        <a href="product.html" class="fa fa-edit"></a>
                                                    </td>
                                                    <td class="text-right">
                                                        <a onclick="cart.remove('1');" class="fa fa-times fa-delete"></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
    </Menu.Item>
    <Menu.Item>
    <li>
                                        <div>
                                            <table class="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td class="text-left"><strong>Sub-Total</strong>
                                                        </td>
                                                        <td class="text-right">$140.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left"><strong>Eco Tax (-2.00)</strong>
                                                        </td>
                                                        <td class="text-right">$2.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left"><strong>VAT (20%)</strong>
                                                        </td>
                                                        <td class="text-right">$20.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left"><strong>Total</strong>
                                                        </td>
                                                        <td class="text-right">$162.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p class="text-right"> <a class="btn view-cart" href="cart.html"><i class="fa fa-shopping-cart"></i>View Cart</a>&nbsp;&nbsp;&nbsp; <a class="btn btn-mega checkout-cart" href="checkout.html"><i class="fa fa-share"></i>Checkout</a> 
                                            </p>
                                        </div>
                                    </li>
    </Menu.Item>
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