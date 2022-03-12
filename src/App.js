import "./App.css";
import Nav from "./components/Nav/Nav.js";
import Flag from "./components/Home/Carousel";
import Cards from "./components/Home/Card";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Flag />
      <Cards /> */}
      <Home />
    </div>
  );
}

export default App;
