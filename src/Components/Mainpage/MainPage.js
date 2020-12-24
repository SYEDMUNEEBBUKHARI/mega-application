import './MainPage.css';
import DailyDeals from "../DailyDeals/DailyDeals";
import Slider from "../Slider/Slider";
import LatestProducts from "../LatestProducts/LatestProducts";

function MainPage() {
  return (
    <div className="bgcolor" >
     
     <DailyDeals />
     <LatestProducts />
{/* <Slider /> */}
    </div>
  );
}

export default MainPage;
