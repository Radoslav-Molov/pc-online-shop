import "./App.css";
import Nav from "./components/Nav/Nav.js";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import Configurator from "./components/Configurator/Configurator";
import Invoice from "./components/Invoice/Invoice";
import About from "./components/About/About";
import Create from "./components/Create/Create";
import { useEffect, useState } from "react";
import Admin from "./components/Admin/Admin";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(undefined);

  setTimeout(() => {
    if (localStorage.getItem("token") !== undefined) {
      setIsLoggedIn(true);
    }
  }, 1000);

  // console.log(user);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/invoice/:id" element={<Invoice />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
