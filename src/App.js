import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Mainpage/MainPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog"
import Category from "./Components/Category/Category";




function App() {
  return (
   <>
   
  <BrowserRouter>
  <Navbar />
     <Category />
    <Switch>
      <Route exact path="/"  Component={Home}/>
      <Route exact path="/blog"  Component={Blog}/>

    </Switch>
    

  </BrowserRouter>
  <Footer />

   </>
  );
}

export default App;
