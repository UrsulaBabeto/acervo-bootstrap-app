import "./App.css";

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { BannerProvider } from "./contexts/BannerContext";
import MainPage from "./pages/MainPage/MainPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import FAQPage from "./pages/FAQPage/FAQPage";



function App() {
  return (
    <BannerProvider>
          
      <Router>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/contato" element={<ContactPage/>} />
              <Route path="/faq" element={<FAQPage/>}/> 
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Router>
      
    </BannerProvider>
  );
}

export default App;
