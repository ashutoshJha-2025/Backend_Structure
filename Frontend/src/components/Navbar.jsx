import { NavLink } from "react-router-dom"
import { useState } from "react";

const Navbar = () => {
    const [isOnCreatePost, setIsOnCreatePost] = useState(false);

    return (
        <>
            <NavLink
                to={isOnCreatePost ? '/' : '/create-post'}
                className="absolute bg-(--bg) h-10 w-31 px-3 py-1 border-3 top-6 right-8 -rotate-z-2 border-white z-100 cursor-pointer hover:bg-(--bg2) transition-colors duration-200 ease-in-out"
                onClick={() => setIsOnCreatePost(!isOnCreatePost)}

            >
                <h1 className="text-white font-semibold text-lg text-center ">
                    {isOnCreatePost ? 'Home' : 'Create Post'}
                </h1>
            </NavLink >
            <div className="absolute right-6 top-8 bg-[#5F5F5F] h-10 w-31 -rotate-z-2"></div>
        </>
    )
}

export default Navbar