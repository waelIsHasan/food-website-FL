import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Reservation from "./pages/Reservation/Reservation";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Checkout from "./pages/Checkout/Checkout";
import DetailMeal from "./pages/DetailMeal/DetailMeal";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/order" element={<Menu />} />
          <Route path='/reservation' element ={<Reservation />} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='detail-meal/:id' element={<DetailMeal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
// import { Form } from 'react-router-dom';

export default App;
