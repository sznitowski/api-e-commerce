import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Products from './Pages/Products/ItemListContainer';
import Cart from './Components/CartWidget/CartWidget';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/Login' element={<Login />} exact />
        <Route path='/Register' element={<Register />} exact />
        <Route path='/Products' element={<Products />} exact />
        <Route path='/Cart' element={<Cart />} exact />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
};
