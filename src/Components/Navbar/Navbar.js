import React,{useEffect,useState} from "react";
import windowSize from 'react-window-size';
import NavDraw from "../NavsideDraw/NavDraw";
import {NavLink}  from "react-router-dom"
import "./navbar.css";
import {AiOutlineLock} from "react-icons/ai";
import {FaPhoneSquareAlt} from "react-icons/fa";
import { Layout, Menu, Breadcrumb } from 'antd';
import Logo from "../../Assets/images/Mega.jpg";
const { Header, Content, Footer } = Layout;
function Navbar(props){
//858
const [windows,setWindow]=useState(props.windowWidth);
console.log("windows",windows);

     useEffect(()=>{
  setWindow(props.windowWidth)
     },[windows,props.windowWidth])
    return(
      <>
           <div className="login-title">
               <div className="flex-item"><AiOutlineLock /> Login or Register
                </div>
               <div className="flex-item">|</div>
               <div className="flex-item"><FaPhoneSquareAlt /> Hotline (+123)4 567 890 </div>
          </div>
   <Header className="makeflex">
     <div className="site-brand">
      <img src={Logo} className="logo" />
      </div>
      {windows>850?
      <Menu className="adjust-ant"  mode="horizontal" defaultSelectedKeys={['2']}>
       <Menu.Item key="1">
       <NavLink className="cstm-clr" activeClassName="nextclr" to="/"  > HOME
          <div className="mega-menu">
          <div className="content">
                <div className="col">
                  <section>
                    <h2>Featured 1</h2>
                    <a href="#" className="img-wrapper"
                      ><span className="img"
                        ><img
                          src="https://picsum.photos/400?random=1"
                          alt="Random Image" /></span
                    ></a>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </section>
                </div>
                <div className="col">
                  <section>
                    <h2>Featured 2</h2>
                    <ul className="mega-links">
                      <li><a href="#">Item 1</a></li>
                      <li><a href="#">Item 2</a></li>
                      <li><a href="#">Item 3</a></li>
                      <li><a href="#">Item 4</a></li>
                      <li><a href="#">Item 5</a></li>
                    </ul>
                  </section>
                </div>
                <div className="col">
                  <section>
                    <h2>Featured 3</h2>
                    <ul className="mega-links">
                      <li><a href="#">Item 1</a></li>
                      <li><a href="#">Item 2</a></li>
                      <li><a href="#">Item 3</a></li>
                      <li><a href="#">Item 4</a></li>
                      <li><a href="#">Item 5</a></li>
                    </ul>
                  </section>
                </div>
                <div className="col">
                  <section>
                    <h2>Featured 4</h2>
                    <ul className="mega-links">
                      <li><a href="#">Item 1</a></li>
                      <li><a href="#">Item 2</a></li>
                      <li><a href="#">Item 3</a></li>
                      <li><a href="#">Item 4</a></li>
                      <li><a href="#">Item 5</a></li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
            </NavLink>
        </Menu.Item>
       
          <Menu.Item key="2">
          <NavLink className="cstm-clr" activeClassName="nextclr" to="/blog"  >FEATURES
        <div className="mega-menu">
          <div className="content">
                <div className="col">
                  <section>
                    <h2>Featured 1</h2>
                    <a href="#" className="img-wrapper"
                      ><span className="img"
                        ><img
                          src="https://picsum.photos/400?random=1"
                          alt="Random Image" /></span
                    ></a>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </section>
                </div>
                <div className="col">
                  <section>
                    <h2>Featured 2</h2>
                    <ul className="mega-links">
                      <li><a href="#">Item 1</a></li>
                      <li><a href="#">Item 2</a></li>
                      <li><a href="#">Item 3</a></li>
                      <li><a href="#">Item 4</a></li>
                      <li><a href="#">Item 5</a></li>
                    </ul>
                  </section>
                </div>
                <div className="col">
                  <section>
                    <h2>Featured 3</h2>
                    <ul className="mega-links">
                      <li><a href="#">Item 1</a></li>
                      <li><a href="#">Item 2</a></li>
                      <li><a href="#">Item 3</a></li>
                      <li><a href="#">Item 4</a></li>
                      <li><a href="#">Item 5</a></li>
                    </ul>
                  </section>
                </div>
                <div className="col">
                  <section>
                    <h2>Featured 4</h2>
                    <ul className="mega-links">
                      <li><a href="#">Item 1</a></li>
                      <li><a href="#">Item 2</a></li>
                      <li><a href="#">Item 3</a></li>
                      <li><a href="#">Item 4</a></li>
                      <li><a href="#">Item 5</a></li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
            </NavLink>
        </Menu.Item>
        
        <Menu.Item key="3"><NavLink className="cstm-clr" activeClassName="nextclr" to="/blog"  >PAGES</NavLink></Menu.Item>
       <Menu.Item key="4"> <NavLink className="cstm-clr" activeClassName="nextclr" to="/blog"  >CATEGORIES</NavLink></Menu.Item>
       <Menu.Item key="5"> <NavLink className="cstm-clr" activeClassName="nextclr" to="/accessories"  >ACCESSORIES</NavLink></Menu.Item>
         <Menu.Item key="6"><NavLink className="cstm-clr" activeClassName="nextclr" to="/blog"  >BLOG</NavLink></Menu.Item>
      </Menu>
      :<NavDraw />}
    </Header>
    
      </>
    );
}
 
export default windowSize(Navbar);