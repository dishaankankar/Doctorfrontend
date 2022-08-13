import React from "react";
import './App.css';
import Navbar from "./components/inc/Navbar";
import About from "./components/pages/About";
import Contactus from "./components/pages/Contact";
import Home from "./components/pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from './components/inc/Footer';
import SignUp from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Hospitallist from "./components/useEffect/Hospitallist";
import SignupD from "./components/pages/SignupD"
import Slider1 from "./components/inc/Slider1";
import DocInfo from "./components/pages/DocInfo"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>}/>


          <Route  path="/about" element={<About/>}/>

          <Route  path="/contact" element={<Contactus/>}/>
          <Route  path="/Signup" element={<SignUp/>}/>
          <Route  path="/SignupDoctor" element={<SignupD/>}/>
          <Route  path="/login" element={<Login/>}/>
          <Route path="/hospitallist" element={<Hospitallist/>}/>
          <Route path="/slider" element={<Slider1/>}/>
          <Route path="/Docinfo" element={<DocInfo/>}/>


        </Routes>
        <Footer/>
    
         
      </div>
    </Router>
  );
}

export default App;
