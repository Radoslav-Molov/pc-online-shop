import "./App.css";
import Nav from "./components/Nav/Nav.js";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Catalog /> */}
      <Details />
      <Footer />
    </div>
  );
}

export default App;
