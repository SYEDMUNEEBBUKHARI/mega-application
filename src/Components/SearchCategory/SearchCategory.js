import React,{useState} from "react";
import "./searchcategory.css";
import windowSize from 'react-window-size';


const SearchCategory=(props)=>{
const [windows,setWindow]=useState(props.windowWidth);

    return(
        <>
            <div className="category-flex">
            {windows>850?  <div class="input-group mb-3">
            
            <select style={{width: '100%',fontSize: '12px',height: '33px',background: '#8080801f',}} class="custom-select" id="inputGroupSelect01">
                <option selected>Category...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            </div>
            :""}
            <div>
            <form className="search-form">
            {windows>850? 
            <> <input id="search" type="search" className="search-input" style={{height: '33px', width: '260px',}} placeholder="Keyword here..." />
            <button className="search-button">Search</button></>
            :""}
            </form>
            </div>
                </div>
    
        </>
    );
}

export default windowSize(SearchCategory);