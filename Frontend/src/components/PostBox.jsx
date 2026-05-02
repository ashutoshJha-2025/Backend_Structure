import { MdDelete } from "react-icons/md";
import axios from "axios"

const PostBox = ({ id, image, caption = "No caption found", date, owner, property }) => {
    const deletePost = async (id) => {
        try {
            const result = await axios.delete(`https://backend-0pln.onrender.com/api/posts/delete-post/${id}`, { withCredentials: true })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div key={id} className="h-80 w-70 border-4 border-[#5F5F5F] rounded-2xl flex flex-col justify-between items-center relative hover:scale-101 transition-all duration-100 ease-in">
                <div className="h-[15%] w-full px-4 flex justify-around items-end">
                    <h1 className="text-white font-medium text-xl">{owner}</h1>
                    <span className="text-red-400 text-md">{date}</span>
                </div>
                <div className="h-[70%] overflow-hidden p-2 rounded-xl ">
                    <img
                        src={image}
                        alt={caption}
                        className="h-full w-full object-contain rounded-xl"
                    />
                </div>
                <div className="flex justify-between h-[15%] w-full items-center px-6">
                    <p className="text-xl font-semibold text-white text-center">
                        {caption}
                    </p>
                    <MdDelete
                        onClick={() => deletePost(id)}
                        className={`text-white font-semibold hover:text-red-500 cursor-pointer text-xl ${property}`} />
                </div>
            </div>
        </>
    )
}

export default PostBox