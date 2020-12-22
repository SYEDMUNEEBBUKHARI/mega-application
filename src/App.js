import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Category from "./Components/Category/Category";
import DailyDeals from "./Components/DailyDeals/DailyDeals";
import Slider from "./Components/Slider/Slider";
import LatestProducts from "./Components/LatestProducts/LatestProducts";


function App() {
  return (
    <div className="bgcolor" >
     <Navbar />
     <Category />
     <DailyDeals />
     <LatestProducts />
{/* <Slider /> */}
    </div>
  );
}

export default App;
