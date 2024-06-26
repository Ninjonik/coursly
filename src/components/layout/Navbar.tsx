import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton, Button, Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {Link, useLocation} from "react-router-dom";

function NavList() {
    const location = useLocation();
    const className = "text-purple-500";

    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 items-center sticky z-10 bg-white rounded-lg">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold"
            >
                <Link to="/" className={`flex items-center hover:text-blue-500 transition-colors ${location.pathname === "/" && className}`}>
                    Domov
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold"
            >
                <Link to="/about" className={`flex items-center hover:text-blue-500 transition-colors ${location.pathname === "/about" && className}`}>
                    O Nás
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold"
            >
                <Link to="/contact" className={`flex items-center hover:text-blue-500 transition-colors ${location.pathname === "/contact" && className}`}>
                    Kontakt
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-bold"
            >
                <Link to={"/courses"}><Button color={location.pathname === "/courses" ? "deep-purple" : "purple"}>Kurzy</Button></Link>
            </Typography>
        </ul>
    );
}

export default function AppNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar fullWidth={true} className="w-screen px-6 py-3 sticky top-0 z-10 custom-navbar h-16 mb-16" shadow={false}>
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 flex flex-row justify-center items-center gap-2"
                >
                    <Avatar src={"img/courslio.png"} size={"sm"} />
                    <h1>courslio.</h1>
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}