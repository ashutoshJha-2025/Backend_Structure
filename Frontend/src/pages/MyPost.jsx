import { useEffect, useState } from "react"
import axios from 'axios'
import PostBox from "../components/PostBox"


const MyPost = () => {
    const [myPosts, setMyPosts] = useState([])

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://backend-0pln.onrender.com/api/posts/my-posts', { withCredentials: true })
            setMyPosts(response.data.posts)
        } catch (error) {
            console.error('Posts fetching from backend failed!', error, error.response?.data?.message)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            <div className="w-full h-full flex flex-wrap md:gap-8 gap-2 absolute top-25 md:px-15">
                {myPosts && myPosts.length > 0 ? (
                    myPosts.map((individualPost) => {
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
                                property=""
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

export default MyPost