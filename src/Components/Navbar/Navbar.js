import React from "react";
import "./navbar.css";
import {AiOutlineLock} from "react-icons/ai";
import {FaPhoneSquareAlt} from "react-icons/fa";
function Navbar(){
    return(
      <>
       <div className="login-title">
               <div className="flex-item"><AiOutlineLock /> Login or Register
                </div>
               <div className="flex-item">|</div>
               <div className="flex-item"><FaPhoneSquareAlt /> Hotline (+123)4 567 890 </div>
               </div>

       <header className="header">
          
      <a href="#" className="logo">LOGO</a>
      <nav>
        <ul className="menu-items">
        <li>
              
              <a href="#" className="menu-item">HOME</a>
              <div className="mega-menu blog">
                <div className="content">
                  <div className="col">
                    <a href="#" className="img-wrapper"
                      ><span className="img"
                        ><img
                          src="https://picsum.photos/400?random=2"
                          alt="Random Image" /></span
                    ></a>
                    <h2 className="text-center access-title">Title</h2>
                    <p className="accessories-description">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                      quibusdam deserunt quis.
                    </p>
                    <a href="#" className="read-more">read more...</a>
                  </div>
                  <div className="col">
                    <a href="#" className="img-wrapper"
                      ><span className="img"
                        ><img
                          src="https://picsum.photos/400?random=3"
                          alt="Random Image" /></span
                    ></a>
                    <h2 className="text-center access-title">Title</h2>
                    <p className="accessories-description">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                      quibusdam deserunt quis.
                    </p>
                    <a href="#" className="read-more">read more...</a>
                  </div>
                  <div className="col">
                    <a href="#" className="img-wrapper"
                      ><span className="img"
                        ><img
                          src="https://picsum.photos/400?random=4"
                          alt="Random Image" /></span
                    ></a>
                    <h2 className="text-center access-title">Title</h2>
                    <p className="accessories-description">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                      quibusdam deserunt quis.
                    </p>
                    <a href="#" className="read-more">read more...</a>
                  </div>
                </div>
              </div>
            </li>
              <li>
              <a href="#" className="menu-item">FEATURES</a>
              <div className="mega-menu blog">
                <div className="content">
                  <div className="col">
                    <a href="#" className="img-wrapper"
                      ><span className="img"
                        ><img
                          src="https://picsum.photos/400?random=2"
                          alt="Random Image" /></span
                    ></a>
                    <h2 className="text-center access-title">Title</h2>
                    <p className="accessories-description">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                      quibusdam deserunt quis.
                    </p>
                    <a href="#" className="read-more">read more...</a>
                  </div>
                  <div className="col">
                    <a href="#" className="img-wrapper"
                      ><span className="img"
                        ><img
                          src="https://picsum.photos/400?random=3"
                          alt="Random Image" /></span
                    ></a>
                    <h2 className="text-center access-title">Title</h2>
                    <p className="accessories-description">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                      quibusdam deserunt quis.
                    </p>
                    <a href="#" className="read-more">read more...</a>
                  </div>
                  <div className="col">
                    <a href="#" className="img-wrapper"
                      ><span className="img"
                        ><img
                          src="https://picsum.photos/400?random=4"
                          alt="Random Image" /></span
                    ></a>
                    <h2 className="text-center access-title">Title</h2>
                    <p className="accessories-description">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                      quibusdam deserunt quis.
                    </p>
                    <a href="#" className="read-more">read more...</a>
                  </div>
                </div>
              </div>
            </li>
          <li>
            <a href="#" className="menu-item">PAGES</a>
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
          </li>
          <li>
            <a href="#" className="menu-item">CATEGORIES</a>
            <div className="mega-menu">
              <div className="content">
                <div className="col">
                  <section>
                    <h2 className="feature">Featured 1</h2>
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
                    <h2 className="feature">Featured 2</h2>
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
                    <h2 className="feature">Featured 3</h2>
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
                    <h2 className="feature">Featured 4</h2>
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
          </li>
          <li>
              
            <a href="#" className="menu-item">ACCESSORIES</a>
            <div className="mega-menu blog">
              <div className="content">
                <div className="col">
                  <a href="#" className="img-wrapper"
                    ><span className="img"
                      ><img
                        src="https://picsum.photos/400?random=2"
                        alt="Random Image" /></span
                  ></a>
                  <h2 className="text-center access-title">Title</h2>
                  <p className="accessories-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                    quibusdam deserunt quis.
                  </p>
                  <a href="#" className="read-more">read more...</a>
                </div>
                <div className="col">
                  <a href="#" className="img-wrapper"
                    ><span className="img"
                      ><img
                        src="https://picsum.photos/400?random=3"
                        alt="Random Image" /></span
                  ></a>
                  <h2 className="text-center access-title">Title</h2>
                  <p className="accessories-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                    quibusdam deserunt quis.
                  </p>
                  <a href="#" className="read-more">read more...</a>
                </div>
                <div className="col">
                  <a href="#" className="img-wrapper"
                    ><span className="img"
                      ><img
                        src="https://picsum.photos/400?random=4"
                        alt="Random Image" /></span
                  ></a>
                  <h2 className="text-center access-title">Title</h2>
                  <p className="accessories-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                    quibusdam deserunt quis.
                  </p>
                  <a href="#" className="read-more">read more...</a>
                </div>
              </div>
            </div>
          </li>
          <li><a href="#" className="menu-item">BLOG</a></li>
        </ul>
      </nav>
    </header>
      </>
    );
}
 
export default Navbar;