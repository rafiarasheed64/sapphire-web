
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import men_banner from '../src/Components/Assets/mens-banner.jpg'
import women_banner from '../src/Components/Assets/women-banner.jpg'
import kids_banner from '../src/Components/Assets/kids-banner.jpg'
import fragrance_banner from '../src/Components/Assets/fragrance_banner.webp'
import Footer from './Components/Footer';
import Cart from './Pages/Cart';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} heading='MEN COLLECTION' category="mens"/>}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner} heading='WOMEN COLLECTION' category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kids_banner} heading='KIDS COLLECTION' category="kids"/>}/>
      <Route path='/fragrance' element={<ShopCategory banner={fragrance_banner} heading='FRAGRANCE' category="fragrance"/>}/>
      <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>




    </Routes>
    <Footer/>
    </BrowserRouter>
     
    </>
  );
}

export default App;
