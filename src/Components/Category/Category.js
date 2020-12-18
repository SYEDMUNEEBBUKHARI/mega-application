import React, { useEffect, useState } from "react";
import "./category.css";
import {FaHamburger} from "react-icons/fa";
import {FiChevronDown,FiChevronUp} from "react-icons/fi"
function Category(){
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
useEffect(()=>{},[chevron,show]);

return(
<>
<div>
<div className="categories text-center" onClick={handleCategory}><span className="category-position">Categories {chevron ? chevup : chevdown}</span></div>

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

  </ul>
</div>
</>
);
}

export default Category;