import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import HomeComponent from "./Components/Home/HomeComponent";
import ShopComponent from "./Components/Shop/ShopComponent";
import ProdcutComponent from "./Components/Product/productComponent";
import RegistrationForm from "./Components/Register/RegisterComponent";
import LoginComponent from "./Components/Login/LoginComponent";
import AddProductComponent from "./Components/AddProduct/AddProduct";
import ProfileComponent from "./Components/Profile/ProfileComponent";
import CategoryComponent from "./Components/Category/CategoryComponent";
// import Counter from "./CounterComponent";
// import CounterFunc from "./Components/Counter/CounterComponent";
function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/shop" element={<ShopComponent />} />
          <Route path="/product" element={<ProdcutComponent />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/addproduct" element={
            <AddProductComponent />
            
            } />
          <Route path="/category" element={<CategoryComponent/>} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
      {/* <Counter />
      <CounterFunc /> */}
    </>
  );
}

export default App;
