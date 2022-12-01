import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import CallJavaScript from './Components/CallJavaScript/CallJavaScript';
import Register from './pages/Register/Register';
import Hat from './pages/Products/Hat/Hat';
import Blog from './pages/Blog/Blog';
import Catagori from './pages/Catagori/Catagori';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Shoes from './pages/Products/Shoes/Shoes';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/register" element={<Register />} />
                <Route path="/hat" element={<Hat />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/catagori" element={<Catagori />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/shoes" element={<Shoes />} />
            </Routes>
            <Footer />
            <CallJavaScript />
        </div>
    );
}

export default App;
