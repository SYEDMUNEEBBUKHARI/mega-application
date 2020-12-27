import React,{useEffect,useState} from "react";
import windowSize from 'react-window-size';
import NavDraw from "../NavsideDraw/NavDraw";
import {NavLink}  from "react-router-dom"
import "./topheader.css";
import {AiOutlineLock} from "react-icons/ai";
import GeneralCategory from "../generalCategory/General";
import {FaPhoneSquareAlt} from "react-icons/fa";
import { Layout, Menu, Breadcrumb } from 'antd';
import Logo from "../../Assets/images/megalogo.jpg";
const { Header, Content, Footer } = Layout;
function Topheader(props){
//858
const [windows,setWindow]=useState(props.windowWidth);
console.log("windows",windows);

     useEffect(()=>{
  setWindow(props.windowWidth)
     },[windows,props.windowWidth])
    return(
      <>
      <div className="login-title">
           <div className="adjust-top container-fluid">
           <div className="site-brand">
              <a href="">  <img src={Logo} className="logo" /> </a>
            </div>
            <div className="register makeflex">
               <div><AiOutlineLock /> Login or Register
                </div>
               <div >|</div>
               <div><FaPhoneSquareAlt /> Hotline (+123)4 567 890 </div>
               </div>
          </div>

          </div>
      </>
    );
}
 
export default windowSize(Topheader);