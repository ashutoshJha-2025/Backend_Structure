import express from 'express'
import multer from 'multer'
import { uploadFile } from './services/storage.service.js'
import { Post } from './models/post.model.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
const upload = multer({ storage: multer.memoryStorage() })

app.post('/create-post', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    const result = await uploadFile(req.file.buffer)
    const post = await Post.create(
        {
            image: result.url,
            caption: req.body.caption
        }
    )
    return res.status(201).json({
        message: 'post created successfullly',
        post
    })
})

app.get('/posts', async (req, res) => {
    const posts = await Post.find()
    return res.status(200).json({
        message: 'Posts fetched successfully',
        post: posts
    })
})

app.delete('/del-post/:id', async (req, res) => {
    const id = req.params.id
    await Post.findByIdAndDelete(id)
    res.status(200).json({
        message: `Post of id ${id} got deleted`
    })
})

export { app }