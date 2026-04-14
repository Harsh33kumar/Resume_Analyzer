import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Resume from "./components/Resume";
import Results from "./components/Results";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume_results" element={<Results />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
