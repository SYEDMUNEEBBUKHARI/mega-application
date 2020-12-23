import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Category from "./Components/Category/Category";
import Slider from "./Components/Slider/Slider";
import LatestProducts from "./Components/LatestProducts/LatestProducts";
import Footer from "./Components/Footer/Footer";
import DailyDeals from "./Components/DailyDeals/DailyDeals";


function App() {
  return (
    <div className="bgcolor" >
     <Navbar />
     <Category />
     <DailyDeals />
<LatestProducts />
<Footer />
{/* <Slider /> */}
    </div>
  );
}

export default App;
