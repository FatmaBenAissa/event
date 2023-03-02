import "./App.css";
import React, { useState } from "react";
import Home from "./commponents/Home";
import About from "./commponents/About";
import Galerie from "./commponents/Galerie";
import Register from "./components/Register";
import Logi from "./components/Logi";
import Profil from "./components/Profil";
import { Route, Routes } from "react-router-dom";
import Navbar from "./commponents/Navbar";
import { useDispatch } from "react-redux";
import { userCurrent } from "./JS/userSlice/userSlice";
import { useEffect } from "react";
import { getproduct } from "./JS/productslice";
import Services from "./commponents/Services";
import Ballons from "./commponentss/Ballons";
import { getservices } from "./JS/servicesslice";
import Location from "./commponentss/Location";
import { getlocation } from "./JS/locationSlice";
import { getdeco } from "./JS/decoSlice";
import Deco from "./commponentss/Deco";
import { getcandy } from "./JS/candySlice";
import Candy from "./commponentss/Candy";
import Footer from "./commponents/Footer";
import Modall from "./commponents/Modall";
import { getcomm } from "./JS/commSlice";
import Contact from "./commponents/Contact";


function App() {
  const [ping, setping] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getproduct());
    dispatch(getservices());
    dispatch(getlocation());
    dispatch(getdeco());
    dispatch(getcandy());
    dispatch(getcomm());
  }, [ping]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/ballons" element={<Ballons />} />
        <Route path="/location" element={<Location />} />
        <Route path="/deco" element={<Deco />} />
        <Route path="/modall" element={<Modall />} />
        <Route path="/candy" element={<Candy />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/logi" element={<Logi />} />
        <Route path="/profil" element={<Profil ping={ping} setping={setping} />} />
      </Routes>
    </div>
  );
}

export default App;
