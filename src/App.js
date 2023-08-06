
import './App.css';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { Route,Routes } from 'react-router-dom';
import Product from './components/Product';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <div className="App"> 
    <Routes>
    <Route path="/" element={<ProductPage/>} />
    <Route path="/cart" element={<CartPage/>} />
    <Route path="/Product/:id" element={ <SingleProductPage/>}></Route>
    </Routes> 
    </div>
  );
}

export default App;
