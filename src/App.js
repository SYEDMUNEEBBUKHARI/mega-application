import './App.css';
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
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
      <Route exact path="/"  component={Home}/>
      <Route path="/blog"  component={Blog}/>
      <Redirect to="/" />
    </Switch>
    

  </BrowserRouter>
  <Footer />

   </>
  );
}

export default App;
