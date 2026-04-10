import { useEffect, useState } from "react"
import axios from 'axios'
import PostBox from "../components/PostBox"

const Feed = () => {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://backend-0pln.onrender.com/posts')
            setPosts(response.data.post)
        } catch (error) {
            console.log(`Posts fetching from backend failed !\n`, error)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            <div className="w-full flex flex-wrap gap-8 absolute top-25 left-15 max-sm:left-7">
                {posts && posts.length > 0 ? (
                    posts.map((individualPost) => (
                        <PostBox id={individualPost._id} image={individualPost.image} caption={individualPost.caption} onPostDeleted={fetchPosts} />
                    ))
                ) : (
                    <p className="text-2xl text-center text-white">No posts yet</p>
                )}
            </div >
        </>
    )
}

export default Feed