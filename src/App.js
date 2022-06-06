import { Route,Routes } from "react-router-dom";
import "./App.css";
import React, { useContext } from "react";
//  import Products from "./components/products/Products";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {AuthContext} from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
 

function App() {
  let {isAuth,setisAuth}=useContext(AuthContext)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route path="/products" element={<Products/>}/> */}
        <Route path="/" element={ <Home/>}/>
        <Route path="/cartItems" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
