import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Cart from './Components/CartWidget.js/CartWidget';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Products />
    <Cart />
    <Footer />
  </BrowserRouter>
  );
}

export default App;
