import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image_url: {
            type: String,
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        date: {
            type: Date,
            default: Date.now,
        }
    },
    { timestamps: true }
)

const Post = mongoose.model('Post', postSchema)
export { Post }