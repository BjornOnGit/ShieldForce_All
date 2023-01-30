import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
