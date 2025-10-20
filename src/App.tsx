import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
// import Privacy from "./pages/privacy";
import "./App.css";


import { useEffect } from "react";
import { initScrollAnimations } from "./script";


function App() {

  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <Router>
      <div className="app">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/privacy" element={<Privacy />} /> */} 
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
