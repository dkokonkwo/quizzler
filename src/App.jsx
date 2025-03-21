import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import MyHome from "./components/Home";
import MyFooter from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="main-app">
      <MyNavbar />
      <Outlet />
      <MyFooter />
    </div>
  );
}

export default App;
