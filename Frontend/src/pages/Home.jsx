import { useEffect, useState } from "react"
import axios from 'axios'
import PostBox from "../components/PostBox"

const Home = () => {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://backend-0pln.onrender.com/api/posts/')
            setPosts(response.data.posts)
        } catch (error) {
            console.error('Posts fetching from backend failed!', error)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            <div className="w-full flex flex-wrap md:gap-8 gap-2 absolute top-25 md:px-15">
                {posts && posts.length > 0 ? (
                    posts.map((individualPost) => {
                        const formattedDate = new Date(individualPost.date).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        });
                        const upperTitle = individualPost.title.toUpperCase();
                        return (
                            <PostBox
                                key={individualPost._id}
                                id={individualPost._id}
                                image={individualPost.image_url}
                                caption={upperTitle}
                                date={formattedDate}
                                owner={individualPost.owner.username}
                                property="invisible"
                            />
                        );
                    })
                ) : (
                    <p className="text-2xl text-center text-white">No posts yet</p>
                )}
            </div >

        </>
    )
}

export default Home