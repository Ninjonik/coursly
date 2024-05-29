import './App.css'
import Navbar from "./components/layout/Navbar.tsx";
import AppFooter from "./components/layout/Footer.tsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

function App() {

  return (
    <>
        <HashRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </HashRouter>
        <AppFooter />
    </>
  )
}

export default App
