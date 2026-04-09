import { useState } from "react"
import axios from "axios"
import MessageBox from "../components/MessageBox"

const CreatePost = () => {
    const [caption, setCaption] = useState('')
    const [imageFile, setImageFile] = useState(null)
    const [successMessage, setSuccessMessage] = useState('')

    const pushPost = async (e) => {
        e.preventDefault()

        if (!imageFile) {
            return alert("Please select an image")
        }

        const formData = new FormData()
        formData.append('image', imageFile)
        formData.append('caption', caption)

        try {
            const result = await axios.post(
                'https://backend-0pln.onrender.com/create-post',
                formData
            )

            setSuccessMessage('Post created successfully')
            setCaption('')
            setImageFile(null)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className="w-100 max-sm:w-70 bg-[#f3f3f3] p-4 sm:p-8 rounded-lg">
                <h1 className="text-4xl max-sm:text-3xl font-bold mb-6">Create Post</h1>
                <form onSubmit={pushPost} className="space-y-4">
                    <input
                        type="file"
                        name="image"
                        required
                        onChange={(e) => setImageFile(e.target.files[0])}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />

                    <input
                        type="text"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        name="caption"
                        required
                        placeholder="Enter caption"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            </div>
            {successMessage && <MessageBox msg={successMessage} />}
        </>
    )
}

export default CreatePost