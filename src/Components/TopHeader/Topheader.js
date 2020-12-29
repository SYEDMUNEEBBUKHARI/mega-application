import React,{useEffect,useState} from "react";
import windowSize from 'react-window-size';
import NavDraw from "../NavsideDraw/NavDraw";
import {NavLink, useHistory}  from "react-router-dom"
import "./topheader.css";
import {AiOutlineLock} from "react-icons/ai";
import GeneralCategory from "../generalCategory/General";
import {FaPhoneSquareAlt} from "react-icons/fa";
import { Layout, Menu, Breadcrumb } from 'antd';
import SearchCategory from "../SearchCategory/SearchCategory";
import Logo from "../../Assets/images/megalogo.png";
const { Header, Content, Footer } = Layout;

function Topheader(props){

      let history = useHistory();
      const handelLogin=()=>{
       history.push('/userlogin');
    }

      const handelRegistration=()=>{
      history.push('/registerform');
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
           <div className="makeflex  container-fluid">
           <div className="site-brand">
              <a href="">  <img src={Logo} className="logo" /> </a>
            </div>
            <div className="set-search">
               <SearchCategory />
            </div>
            <div className="makeflex loginorregister">
               <div className="mr-3">
                 <span className="login-click" onClick={handelLogin}><AiOutlineLock />Login</span>
                  <span className="register-click" onClick={handelRegistration}>  or Register <br/> <FaPhoneSquareAlt /> Hotline (+123)1 234 567 </span>
                </div>
               {/* <div >|</div> */}
               
            </div>
          </div>

          </div>
      </>
    );
}
 
export default windowSize(Topheader);