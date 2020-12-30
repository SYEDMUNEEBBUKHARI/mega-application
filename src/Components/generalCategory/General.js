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
     <span className="category-position"> <HiShoppingCart className="cate-icons" />All Categories {chevron ? chevup : chevdown}</span></div>

      <ul className={`menu ${show}`}>
        <li className="vertical first"><a  className="vertical-menu-item" href="#"> Magna Food</a>
          <div className="megadrop">
            {/* Row One */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
            {/* Row Two */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
             {/* Row Three */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
          </div>
    </li>
        <li className="vertical "> <a  className="vertical-menu-item" href="#">  Gifts & Toys</a>

        <div className="megadrop">
            {/* Row One */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
            {/* Row Two */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
             {/* Row Three */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
          </div>

    </li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#">  Fashion & Accessories</a>

        <div className="megadrop">
            {/* Row One */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
            {/* Row Two */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
             {/* Row Three */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
          </div>

    </li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#">  Electronic</a>

        <div className="megadrop">
            {/* Row One */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
            {/* Row Two */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
             {/* Row Three */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
          </div>

    </li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#">  Health & Beauty</a>

        <div className="megadrop">
            {/* Row One */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
            {/* Row Two */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
             {/* Row Three */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
          </div>

</li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#">  Smartphone & Tablets</a>

        <div className="megadrop">
            {/* Row One */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
            {/* Row Two */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
             {/* Row Three */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
          </div>

</li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#">  Health & Beauty</a>

        <div className="megadrop">
            {/* Row One */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
            {/* Row Two */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
             {/* Row Three */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
          </div>

</li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#">  Bedroom</a>

        <div className="megadrop">
            {/* Row One */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
            {/* Row Two */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
             {/* Row Three */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
          </div>

</li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#">  Metallurgy</a>

        <div className="megadrop">
            {/* Row One */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
            {/* Row Two */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
             {/* Row Three */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
          </div>

</li>
        <li className="vertical"> <a  className="vertical-menu-item" href="#">  Health & Beauty</a>

        <div className="megadrop">
            {/* Row One */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
            {/* Row Two */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
             {/* Row Three */}
            <div className="row">
              <div className="col">
                <h3 className="title">Lorem Ipsum One</h3>
                <ul>
                  <li><a href="#">Lorem Ipsum</a>
                  </li>
                  <li><a href="#">is simply dummy</a>
                  </li>
                  <li><a href="#">text of the printing</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3  className="title">Lorem Ipsum Two</h3>
                <ul>
                  <li><a href="#">and typesetting industry</a>
                  </li>
                  <li><a href="#">Lorem Ipsum has</a>
                  </li>
                  <li><a href="#">been the industry's</a>
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3  className="title">Lorem Ipsum Three</h3>
              <ul>
                <li><a href="#">standard dummy</a>
                </li>
                <li><a href="#">text ever since the</a>
                </li>
                <li><a href="#">when an unknown</a>
                </li>
              </ul>
            </div>
            </div>
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