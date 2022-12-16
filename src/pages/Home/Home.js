import Slide from './Components/Slide/Slide';
import ShopCategory from './Components/ShopCategory/ShopCategory';
import LatestProducts from './Components/LatestProducts/LatestProducts';
import BestProduct from './Components/BestProduct/BestProduct';
import BestCollection from './Components/BestCollection/BestCollection';
import LatestOffers from './Components/LatestOffers/LatestOffers';
import Endow from './Components/Endow/Endow';
import ListImg from './Components/ListImg/ListImg';

import CallJavaScript from '../../Components/CallJavaScript/CallJavaScript';
import Banner from './Components/Banner/Banner';

export default function Home() {
    document.title = 'Home';
    return (
        <main>
            <Slide />
            <LatestProducts />
            <BestProduct />
            <BestCollection />
            <LatestOffers />
            <Endow />
            <Banner />
            <ListImg />
        </main>
    );
}
