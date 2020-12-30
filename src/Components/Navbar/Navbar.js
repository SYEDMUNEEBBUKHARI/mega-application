import React,{useEffect,useState} from "react";
import windowSize from 'react-window-size';
import NavDraw from "../NavsideDraw/NavDraw";
import {NavLink}  from "react-router-dom"
import "./navbar.css";
import { BsFillCaretDownFill } from "react-icons/bs";
import {AiOutlineLock} from "react-icons/ai";
import GeneralCategory from "../generalCategory/General";
import {FaPhoneSquareAlt} from "react-icons/fa";
import { Layout, Menu, Breadcrumb } from 'antd';
import Category from "../Category/Category";
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
          
   <Header className="makeflex">
     
      {windows>850?
      <Menu className="adjust-ant"  mode="horizontal" defaultSelectedKeys={['2']} >
       <Menu.Item key="1">
       <NavLink className="cstm-clr" activeClassName="nextclr" to="/"  > HOME<BsFillCaretDownFill />
          <div className="mega-menu">
          <div className="content">
                <div className="col">
                  <section>
                    <h2>Dummy Image</h2>
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
                    <h2>Lorem Ipsum ?</h2>
                    <ul className="mega-links">
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                  </section>
                </div>
                <div className="col">
                  <section>
                  <h2>Lorem Ipsum ?</h2>
                    <ul className="mega-links">
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                  </section>
                </div>
                <div className="col">
                  <section>
                  <h2>Lorem Ipsum ?</h2>
                    <ul className="mega-links">
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                  </section>
                </div>
          </div>
            </div>
            </NavLink>
        </Menu.Item>
       
          <Menu.Item key="2">
          <NavLink className="cstm-clr" activeClassName="nextclr" to="/blog"  >FEATURES<BsFillCaretDownFill />
        <div className="mega-menu">
          <div className="content">
                <div className="col">
                  <section>
                    <h2>Dummy Image</h2>
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
                  <h2>Lorem Ipsum ?</h2>
                    <ul className="mega-links">
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                  </section>
                </div>
                <div className="col">
                  <section>
                  <h2>Lorem Ipsum ?</h2>
                    <ul className="mega-links">
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                  </section>
                </div>
                <div className="col">
                  <section>
                  <h2>Lorem Ipsum ?</h2>
                    <ul className="mega-links">
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
            </NavLink>
        </Menu.Item>
        
        <Menu.Item key="3"><NavLink className="cstm-clr" activeClassName="nextclr" to="/blog" >PAGES<BsFillCaretDownFill />
        <div className="mega-menu pages-menu">
          <div className="content" style={{height: '205px',}}>
                <div className="col">
                  <section>
                    <ul className="mega-links">
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                  </section>
                </div>
                <div className="col">
                  <section>
                    <ul className="mega-links">
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                  </section>
                </div>
          </div>
        </div>

        </NavLink>
        </Menu.Item>
       <Menu.Item key="4"> <NavLink className="cstm-clr" activeClassName="nextclr" to="/blog"  >CATEGORIES<BsFillCaretDownFill />
       <div className="mega-menu category-menus">
          <div className="content">
                <div className="col">
                  <section>
                    <h2>Dummy Image</h2>
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
                  <h2>Lorem Ipsum ?</h2>
                    <ul className="mega-links">
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                  </section>
                </div>
                <div className="col">
                  <section>
                  <h2>Lorem Ipsum ?</h2>
                    <ul className="mega-links">
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                  </section>
                </div>
                <div className="col">
                  <section>
                  <h2>Lorem Ipsum ?</h2>
                    <ul className="mega-links">
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                      <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
       </NavLink>
       </Menu.Item>
       <Menu.Item key="5"> <NavLink className="cstm-clr" activeClassName="nextclr" to="/accessories"  >ACCESSORIES</NavLink></Menu.Item>
         <Menu.Item key="6"><NavLink className="cstm-clr" activeClassName="nextclr" to="/blog"  >BLOG</NavLink></Menu.Item>
      </Menu>
      :<NavDraw />}
    </Header>
    
      </>
    );
}
 
export default windowSize(Navbar);