import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './pages/Header/Header';
import Cart from './pages/Cart/Cart'
import {CartProvider} from './Contexts/CartContext'
import Menu from './components/Menu/Menu';
import Footer from './pages/Footer/Footer';
import Catalog from './pages/Catalog/Catalog';
import GameDetails from './pages/GameDetails/GameDetails';

const App = () => {
  return (
    <Router>
      <CartProvider>
      <Menu />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/GameDetails/:itemId" element={<GameDetails />} />
          <Route path='/Catalog' element={<Catalog />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      <Footer/>
      </CartProvider>
    </Router>
  );
};

export default App;