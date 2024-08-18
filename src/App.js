import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory"
import Shop from "./Pages/Shop"
import Products from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import banner_men from './components/Assests/banner_mens.png'
import banner_women from './components/Assests/banner_women.png'
import banner_kids from './components/Assests/banner_kids.png'
function App() {
  return (
    <div >
   
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Shop/>}></Route> 
<Route path="/mens" element={<ShopCategory banner={banner_men} category="men"/>}></Route> 
<Route path="/womens" element={<ShopCategory banner={banner_women} category="women"/>}></Route> 
<Route path="/kids" element={<ShopCategory banner={banner_kids} category="kid"/>}></Route> 
<Route path="product" element={<Products/>}>
   <Route path=":productId" element={<Products/>}></Route>
</Route>
<Route path="/cart" element={<Cart/>}></Route>
<Route path="/login" element={<LoginSignup/>}></Route>
</Routes>
</BrowserRouter>
    </div>
  
  );
}

export default App;
