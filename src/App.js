import './App.css';
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import Home from "./Components/Mainpage/MainPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog"
import Category from "./Components/Category/Category";
import BlogMetaData from "./Components/Blog/BlogMetaData/BlogMetaData";
import Accessories from "./Components/Accessories/Accessories";
import General from "./Components/generalCategory/General";
import Topheader from "./Components/TopHeader/Topheader";

function App() {
  return (
   <>
   
  <BrowserRouter>
  <Topheader />
  <div className="makeflex-head">
  <General />
<div className="handleflex"></div>
  <Navbar />

  </div>
  
     <Category />
    <Switch>
      <Route exact path="/"  component={Home}/>
      <Route path="/blog"  component={Blog}/>
      <Route path="/blogmetadata"  component={BlogMetaData}/>
      <Route path="/accessories"  component={Accessories}/>
      <Redirect to="/" />
    </Switch>
    

  </BrowserRouter>
  <Footer />

   </>
  );
}

export default App;
