import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };

    }, []);

    return (
        <button onClick={scrollToTop}
                className={`text-white h-16 w-16 bg-deep-purple-500 rounded-full p-4 flex justify-center items-center text-center fixed bottom-8 right-8 ${isVisible ? "opacity-100" : "opacity-0"} transition-all duration-300`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"/>
            </svg>
        </button>
    );
}