import React,{useEffect,useState} from "react";
import windowSize from 'react-window-size';
import NavDraw from "../NavsideDraw/NavDraw";
import {NavLink, useHistory}  from "react-router-dom"
import "./topheader.css";
import {AiOutlineLock} from "react-icons/ai";
import GeneralCategory from "../generalCategory/General";
import {FaPhoneSquareAlt} from "react-icons/fa";
import { Layout, Menu, Breadcrumb } from 'antd';
import Logo from "../../Assets/images/megalogo.jpg";
import { history } from "react-router-dom";




const { Header, Content, Footer } = Layout;

function Topheader(props){

      let history = useHistory();
      const handelLogin=()=>{
       history.push('/userlogin');
    }
   
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
               <div>
                  <span className="login-click" onClick={handelLogin}><AiOutlineLock /> Login</span> or <span className="register-click">Register</span>
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