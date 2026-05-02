import { useState, useEffect } from "react"
import axios from "axios"

const CreatePost = () => {
    const [caption, setCaption] = useState('')
    const [imageFile, setImageFile] = useState(null)
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(''), 5000)
            return () => clearTimeout(timer)
        }
    }, [message])


    const pushPost = async (e) => {
        e.preventDefault()

        if (!imageFile) {
            return alert("Please select an image")
        }

        const formData = new FormData()
        formData.append('image', imageFile)
        formData.append('title', caption)

        try {
            const result = await axios.post(
                'https://backend-0pln.onrender.com/api/posts/create-post',
                formData,
                { withCredentials: true }
            )
            setMessage(result.data.message)
            setCaption('')
            setImageFile(null)
        } catch (error) {
            setMessage(error.response?.data?.message || 'Invalid credentials')
        }

    }

    return (
        <>
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-100  max-sm:w-70 bg-[#f3f3f3] p-4 sm:p-8 rounded-lg">
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
                            name="title"
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

                        <p className="text-red-500 text-center">{message}</p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreatePost