import "./App.css";
import Nav from "./components/Nav/Nav.js";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import Profile from "./components/Profile/Profile";
import { Navigate, Route, Routes } from "react-router-dom";
import Configurator from "./components/Configurator/Configurator";
import Invoice from "./components/Invoice/Invoice";
import About from "./components/About/About";
import Create from "./components/Create/Create";
import { useEffect, useState } from "react";
import Admin from "./components/Admin/Admin";
import { UserContext } from "./UserContext";
import { ProtectedRoute } from "./ProtectedRoute";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(undefined);
  let refresh = {};

  useEffect(() => {
    if (localStorage.getItem("token") !== undefined) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    let token = localStorage.getItem("token");

    axios
      .get(`http://localhost:5000/api/auth/user`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        refresh = res.data;
        refresh.id = res.data._id;
        setUser(refresh);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<Details />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/configurator"
            element={
              <ProtectedRoute user={user}>
                <Configurator />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create"
            element={
              <ProtectedRoute user={user}>
                <Create />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute user={user}>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContext.Provider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/invoice/:id" element={<Invoice />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
