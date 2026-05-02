import { NavLink } from "react-router-dom";

const NavButton = ({ title, route }) => {
    return (
        <>
            <div className="flex flex-col  relative">
                <NavLink
                    to={route}
                    className="bg-(--primary) h-10 w-30 px-1 py-1 border-3 border-white z-100 cursor-pointer hover:bg-(--bg2) transition-colors duration-200 ease-in-out flex items-center justify-center"
                >
                    <h1 className="text-white font-semibold text-lg text-center">
                        {title}
                    </h1>
                </NavLink>
                <div className="absolute top-1.5 left-1.5 bg-[#5F5F5F] h-10 w-30"></div>
            </div>
        </>
    )
}

export default NavButton