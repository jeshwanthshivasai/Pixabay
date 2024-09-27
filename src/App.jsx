import React from "react";
import ImageWebsite from "./components/ImageWebsite";
import LoginForm from "./RoutedPages/LoginForm";
import RegexForm from "./RoutedPages/RegexForm";
import Footer from "./components/Footer";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ImageWebsite/>} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/regex" element={<RegexForm/>} />
          </Routes>
        </BrowserRouter>
        </>
    );
}
export default App;