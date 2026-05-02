import express from 'express'
import multer from 'multer'
import { createPost, deletePost, getAllPosts, getMyPost } from '../controller/post.controller.js'

const upload = multer({
    storage: multer.memoryStorage()
})

const postRoutes = express.Router()
postRoutes.post('/create-post', upload.single('image'), createPost)
postRoutes.delete('/delete-post/:id', deletePost)
postRoutes.get('/', getAllPosts)
postRoutes.get('/my-posts', getMyPost)

export default postRoutes