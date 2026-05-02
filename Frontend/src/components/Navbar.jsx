import { useState } from "react";
import NavButton from "./NavButton.jsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const username = localStorage.getItem("username");

    return (
        <nav className="w-full h-20 fixed z-50 bg-[#1B1B1B] flex items-center justify-between px-6 md:px-10">
            <h1 className="font-bold text-xl lg:text-2xl text-white">
                {username ? `Welcome, ${username}` : "Welcome"}
            </h1>

            <div className="hidden md:flex items-center gap-10">
                <NavButton title="Home" route="/" />
                <NavButton title="Create Post" route="/create-post" />
                <NavButton title="Login" route="/auth/login" />
                <NavButton title="My Post" route="/my-posts" />
            </div>

            <button
                type="button"
                className="md:hidden flex flex-col justify-center items-center gap-1 p-2"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
                <span className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${isOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute top-20 right-0 left-0 bg-[#1B1B1B] border-t border-white/10 shadow-lg md:hidden">
                    <div className="flex flex-col gap-2 p-4">
                        <NavButton title="Home" route="/" />
                        <NavButton title="Create Post" route="/create-post" />
                        <NavButton title="Login" route="/auth/login" />
                        <NavButton title="My Post" route="/my-posts" />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;