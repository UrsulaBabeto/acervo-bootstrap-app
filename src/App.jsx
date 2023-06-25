import "./App.css";

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CardProduct from "./components/CardProduct/CardProduct";

function App() {
 return(
  <>
  <Router>
    <Routes>
        <Route path="/" Component={MainPage}/>
        <Route path="/contato" Component={ContactPage}/>
        {/* <Route path="/produtos" Component={CardProduct}/>
        <Route path="/faq" Component={ContactPage}/> */}
        <Route path="*" Component={NotFoundPage}/>
    </Routes>
  </Router>
  </>
 )
}

export default App;
