import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="./components/Navbar.jsx" element={<Navbar/>} />
        <Route exact path="./components/Hero.jsx" element={<Hero/>} />
        <Route exact path="./components/Footer.jsx" element={<Footer/>} />
        <Route exact path="./components/Cards.jsx" element={<Cards/>} />
        <Route exact path="bng" element={<Bangalore/>} />
        <Route exact path="goa" element={<Goa/>} />
        <Route exact path="kol" element={<Kolkata/>} />
      </Routes>
    </BrowserRouter>
    )
  }
}
