import {Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cart from "./pages/Cart/Cart"

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
