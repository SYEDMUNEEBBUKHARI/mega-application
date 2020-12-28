import React, { useEffect, useState } from "react";
import windowSize from 'react-window-size';
import {FaHamburger} from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import left from "../../Assets/images/4.jpg";
import "./category.css";
import {HiOutlineShoppingCart} from "react-icons/hi";
import CategoryDraw from "../CategorySidedraw/CategorySideDraw";
import { RiShoppingCart2Line, RiArrowGoForwardLine } from "react-icons/ri";
import {FiRefreshCcw} from "react-icons/fi"
import {ImHeart} from "react-icons/im";
import {FiChevronDown,FiChevronUp} from "react-icons/fi";
import { Input ,Select} from 'antd';

import { Menu, Dropdown } from 'antd';


const menu = (
  <Menu>
    <Menu.Item>
    <li>
   <table className="table table-striped">
       <tbody>
         <tr>
            <td className="text-center" style={{width:'70px',}} >
                      <a href="product.html">
                               <img src={left} style={{width:'70px',}}  alt="Yutculpa ullamcon" title="Yutculpa ullamco" className="preview mr-2"/>
                      </a>
                            </td>
                           <td className="text-left"> <a className="cart_product_name" href="product.html">Yutculpa<br /> ullamco</a> 
                         </td>
                   <td className="text-center">x1</td>
                   <td className="text-center">$80.00</td>
                    <td className="text-right">
                        <a href="product.html" className="fa fa-edit"></a>
                     </td>
                            <td className="text-right">
                            <a onclick="cart.remove('2');" className="fa fa-times fa-delete"></a>
                      </td>
                       </tr>
                          <tr>
                             <td className="text-center" style={{width:'70px',}} >
                                       <a href="product.html">
                                     <img src={left} style={{width:'70px',}} alt="Xancetta bresao" title="Xancetta bresao" className="preview mr-2" />
                                </a>
                              </td>
                         <td className="text-left"> <a className="cart_product_name" href="product.html">Xancetta bresao</a> 
                               </td>
                        <td className="text-center">x1</td>
                              <td className="text-center">$60.00</td>
                               <td className="text-right">
                                    <a href="product.html" className="fa fa-edit"></a>
                                </td>
                          <td className="text-right">
                                 <a onclick="cart.remove('1');" className="fa fa-times fa-delete"></a>
                           </td>
                          </tr>
                      </tbody>
                </table>
         </li>
    </Menu.Item>
    <Menu.Item>
    <li>
         <div>
           <table className="table table-bordered">
                 <tbody>
               <tr>
                    <td className="text-left"><strong>Sub-Total</strong>
                        </td>
                    <td className="text-right">$140.00</td>
                </tr>
                    <tr>
                         <td className="text-left"><strong>Eco Tax (-2.00)</strong>
                               </td>
                            <td className="text-right">$2.00</td>
                            </tr>
                         <tr>
                           <td className="text-left"><strong>VAT (20%)</strong>
                            </td>
                      <td className="text-right">$20.00</td>
                      </tr>
                   <tr>
                        <td className="text-left"><strong>Total</strong>
                         </td>
                     <td className="text-right">$162.00</td>
                           </tr>
              </tbody>
             </table>
                  <div className="text-center">
                       <button class="btn view-cart"  ><RiShoppingCart2Line />View Cart</button>&nbsp;&nbsp;&nbsp; 
                        <button class="btn btn-mega checkout-cart" ><RiArrowGoForwardLine />Checkout</button> 
                     </div>
               
           </div>
      </li>
    </Menu.Item>
  </Menu>
);
function handleChange(value) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}



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
<div className="handlesearch">
<div className="makeflex">
   
<div></div>
<div className="category-flex">
{windows>850?  <div class="input-group mb-3">
 
  <select class="custom-select give-categories" id="inputGroupSelect01">
    <option selected>Category...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
  :""}
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

<div></div>

</div>
<div  >
 {/* <Slider /> */}
 </div>
 </div>
</>
);
}

export default windowSize(Category);