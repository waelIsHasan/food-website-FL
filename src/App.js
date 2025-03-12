import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutus" element={<Menu />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/order" element={<Menu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
// import { Form } from 'react-router-dom';

export default App;
