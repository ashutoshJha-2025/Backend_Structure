import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        image: String,
        caption: String,
    }
)

export const Post = mongoose.model('Post', postSchema)