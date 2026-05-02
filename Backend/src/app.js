import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import postRoutes from './routes/post.routes.js'

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use('/api/user/authentication', authRoutes)
app.use('/api/posts', postRoutes)

export { app }