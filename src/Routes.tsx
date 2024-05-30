import {Route, Routes, useLocation} from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Courses from "./pages/Courses.tsx";
import AllCourses from "./pages/AllCourses.tsx";

export const routeVariants = {
    initial: {
        x: '100vw',
        transition: {
            type: "spring",
            mass: 0.4,
        },
    },
    final: {
        x: '0vw',
        transition: {
            type: "spring",
            mass: 0.4,
        },
    }
}

export const childVariants = {
    initial: {
        opacity: 0,
        y: "50px",
    },
    final: {
        opacity: 1,
        y: "0px",
        transition: {
            duration: 0.5,
        },
    },
};


export default function RoutesList() {
    const location = useLocation();

    return (
        <Routes location={location} key={location.key}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/all" element={<AllCourses />} />
        </Routes>
    );
}
