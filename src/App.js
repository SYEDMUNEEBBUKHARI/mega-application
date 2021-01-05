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
import ViewCart from "./Components/Carts/ViewCart/ViewCart";
import Checkout from "./Components/Carts/Checkout/Checkout";
import UserLogin from "./Components/UserLogin/UserLogin";
import RegisterForm from "./Components/Registration/RegisterForm";
import Faq from "./Components/Faq/Faq";
import SiteMap from "./Components/SiteMap/SiteMap";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import MyAccount from "./Components/MyAccount/MyAccount";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import OrderInformation from "./Components/OrderInformation/OrderInformation";
import ProductReturn from "./Components/ProductReturn/ProductReturn";
import GiftVoucher from "./Components/GiftVoucher/GiftVoucher";
import ProductComparison from "./Components/ProductComparison/ProductComparison";
import WishList from "./Components/WishList/WishList";



function App() {
  return (
   <>
   
  <BrowserRouter>
  <Topheader /> 
  <div className="makeflex-head">
  <General />
  <Navbar />
 <Category />
  </div>
  
    <Switch>
      <Route exact path="/"  component={Home}/>
      <Route path="/blog"  component={Blog}/>
      <Route path="/blogmetadata"  component={BlogMetaData}/>
      <Route path="/accessories"  component={Accessories}/>
      <Route path="/viewcart"  component={ViewCart}/>
      <Route path="/checkout"  component={Checkout}/>
      <Route path="/userlogin"  component={UserLogin}/>
      <Route path="/registerform"  component={RegisterForm}/>
      <Route path="/faq"  component={Faq}/>
      <Route path="/sitemap"  component={SiteMap}/>
      <Route path="/contactus"  component={ContactUs}/>
      <Route path="/aboutus"  component={AboutUs}/>
      <Route path="/myaccount" component={MyAccount} />
      <Route path="/orderhistory" component={OrderHistory} />
      <Route path="/orderinformation" component={OrderInformation} />
      <Route path="/productreturn" component={ProductReturn} />
      <Route path="/giftvoucher" component={GiftVoucher} />
      <Route path="/productcomparison" component={ProductComparison} />
      <Route path="/wishlist" component={WishList} />
      <Redirect to="/" />
    </Switch>
    

  </BrowserRouter>
  <Footer />

   </>
  );
}

export default App;
