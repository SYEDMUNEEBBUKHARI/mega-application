import React, { useEffect, useState } from "react";
import windowSize from 'react-window-size';
import {FaHamburger} from "react-icons/fa";
import left from "../../Assets/images/4.jpg";
import "./General.css";
import CategoryDraw from "../CategorySidedraw/CategorySideDraw";
import {HiShoppingCart} from "react-icons/hi";
import {FiChevronDown,FiChevronUp} from "react-icons/fi";

import { DownOutlined } from '@ant-design/icons';

const provinceData = ['Zhejiang', 'Jiangsu'];


function handleChange(value) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}



function General(props){
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
   <div>{ windows>850?  <>
   <div className="categories text-center" onClick={handleCategory}>
     <span className="category-position"> <HiShoppingCart className="cate-icons" />Categories {chevron ? chevup : chevdown}</span></div>

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
</div>
</>
);
}

export default windowSize(General);