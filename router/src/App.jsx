import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Home from "./assets/pages/Home"
import Login from "./assets/pages/Login"
import Product from "./assets/pages/Product"
import Cart from "./assets/pages/Cart"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login/*" element={<Login/>}/>
        <Route path="/product/*" element={<Product/>}/>
        <Route path="/cart/*" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
