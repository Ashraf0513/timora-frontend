import About from "./AboutPage/abouthandle";
import Home from "./home";
import Login from "./Sign&Login/login";
import SignIn from "./Sign&Login/signin";
import WatchCollection from "./watchPage/watchcollectionpage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WishList from "./Wishlist/wishlist";
import { WatchProvider } from "./watchPage/watchcontext";
import Cart from "./CartPage/cart";
import WatchInfo from "./watchPage/watchinfo";
import OurCollection from "./ourcollectio";
function App() {
  return (
    <BrowserRouter>
      <WatchProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/our" element={<OurCollection/>}/>
          <Route path="/watchcollection" element={<WatchCollection />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/watch/:id" element={<WatchInfo/>}></Route>
        </Routes>
      </WatchProvider>
    </BrowserRouter>
  )
}

export default App