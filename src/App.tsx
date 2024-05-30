import './App.css'
import Navbar from "./components/layout/Navbar.tsx";
import AppFooter from "./components/layout/Footer.tsx";
import {HashRouter} from "react-router-dom";
import ScrollToTop from "./ScrollToTop.tsx";
import LocationProvider from "./LocationProvider.tsx";
import RoutesList from "./Routes.tsx";

function App() {

  return (
    <>
        <HashRouter>
            <Navbar/>
            <LocationProvider>
                <RoutesList />
            </LocationProvider>
            <ScrollToTop />
        </HashRouter>
        <AppFooter />
    </>
  )
}

export default App
