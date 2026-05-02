import { Post } from '../models/post.model.js'
import { User } from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import { uploadFile } from '../services/storage.service.js'

async function createPost(req, res) {
    const token = req.cookies?.token
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized user' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const owner = decoded.id
        const { title } = req.body
        const file = req.file
        if (!file) {
            return res.status(400).json({ message: 'Image file is required' })
        }
        const result = await uploadFile(file.buffer.toString('base64'))

        const newPost = await Post.create({
            title,
            image_url: result.url,
            owner: owner
        })

        // Add post ID to user's posts array
        await User.findByIdAndUpdate(
            owner,
            { $push: { posts: newPost._id } },
            { new: true }
        )

        return res.status(201).json({
            message: 'Post created successfully',
            post: newPost
        })
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error',
            error: err.message || err
        })
    }
}

async function deletePost(req, res) {
    const id = req.params.id
    const deletedPost = await Post.findByIdAndDelete(id)

    if (!deletedPost) {
        return res.status(404).json({ message: 'Post not found' })
    }

    await User.findByIdAndUpdate(
        deletedPost.owner,
        { $pull: { posts: deletedPost._id } },
        { new: true }
    )

    return res.status(200).json({
        message: `Post of id ${id} got deleted`
    })
}

async function getAllPosts(req, res) {
    const posts = await Post.find().populate('owner', 'username')
    return res.status(200).json({
        message: 'Posts fetched successfully',
        posts
    })
}

async function getMyPost(req, res) {
    const token = req.cookies?.token
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized user' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const owner = decoded.id

        const posts = await Post.find({ owner }).populate('owner', 'username')
        return res.status(200).json({
            message: 'My posts fetched successfully',
            posts
        })
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error',
            error: err.message || err
        })
    }
}

export { createPost, deletePost, getAllPosts, getMyPost }