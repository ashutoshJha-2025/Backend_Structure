import { MdDelete } from "react-icons/md";
import { useState } from "react";
import MessageBox from "../components/MessageBox"
import axios from "axios"


const PostBox = ({ id, image, caption = "No caption found", onPostDeleted }) => {
    const [successMessage, setSuccessMessage] = useState('')
    console.log(`http://localhost:3000/del-post/${id}`)

    const deletePost = async (id) => {
        try {
            const result = await axios.delete(`http://localhost:3000/del-post/${id}`)
            setSuccessMessage('Post deleted successfully')
            if (onPostDeleted) {
                onPostDeleted()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div key={id} className="h-65 w-70 bg-(--bg) rounded-2xl flex flex-col justify-between items-center relative hover:scale-101 transition-all duration-100 ease-in">
                <div className="h-[85%] overflow-hidden p-2 rounded-xl ">
                    <img
                        src={image}
                        alt={caption}
                        className="h-full w-full object-contain shadow-2xl rounded-xl"
                    />
                </div>
                <div className="flex justify-between h-[15%] w-full items-center px-6">
                    <p className="text-xl font-semibold text-white text-center">
                        {caption}
                    </p>
                    <MdDelete
                        onClick={() => deletePost(id)}
                        className="text-white font-semibold hover:text-red-500 cursor-pointer text-xl" />
                </div>
            </div>

            {successMessage && <MessageBox msg={successMessage} />}
        </>
    )
}

export default PostBox