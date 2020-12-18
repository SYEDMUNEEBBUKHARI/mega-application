import React from "react";
import "./category.css";
import {FaHamburger} from "react-icons/fa";
function Category(){
return(
<>
<div>
  <ul className="menu">
    <li className="vertical"><a  className="vertical-menu-item" href="#"><FaHamburger className="menu-icon"/>  BURGERS</a>

      <div className="megadrop">

        <div className="col">
          <h3>Title</h3>
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
          <h3>Title</h3>
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
          <h3>Title</h3>
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
</div>
</>
);
}

export default Category;