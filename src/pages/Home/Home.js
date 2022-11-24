import Slide from "./Components/Slide/Slide";
import ShopCategory from "./Components/ShopCategory/ShopCategory";
import LatestProducts from "./Components/LatestProducts/LatestProducts";
import BestProduct from "./Components/BestProduct/BestProduct";
import BestCollection from "./Components/BestCollection/BestCollection";
import LatestOffers from "./Components/LatestOffers/LatestOffers";
import Endow from "./Components/Endow/Endow";
import ListImg from "./Components/ListImg/ListImg";

export default function Home() {
  return (
    <main>

      <Slide />

      <ShopCategory />

      <LatestProducts />

      <BestProduct />

      <BestCollection />

      <LatestOffers />

      <Endow />

      <ListImg />

    </main>
  );
}