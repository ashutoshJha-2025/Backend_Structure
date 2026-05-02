import { User } from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

async function userRegister(req, res) {
    const { username, email, password } = req.body

    const isUserAlreadyExists = await User.findOne({
        $or: [
            { username },
            { email }
        ]
    })
    if (isUserAlreadyExists) {
        return res.status(409).json({ message: 'User Already Exists' })
    }

    const hashPass = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        username,
        email,
        password: hashPass
    })

    const token = jwt.sign({
        id: newUser._id,
    }, process.env.JWT_SECRET)
    res.cookie('token', token)

    res.status(201).json({
        message: 'user registered successfully',
        user: newUser
    })
}

async function userLogin(req, res) {
    const { email, password } = req.body

    const retrieveUser = await User.findOne({
        $or: [
            { email }
        ]
    })
    if (!retrieveUser) {
        return res.status(401).json({ message: 'Invalid credentials' })
    }

    const isPasswordvalid = await bcrypt.compare(password, retrieveUser.password)
    if (!isPasswordvalid) {
        return res.status(401).json({ message: 'Wrong Password' })
    }

    const token = jwt.sign({
        id: retrieveUser._id,
    }, process.env.JWT_SECRET)
    res.cookie('token', token)
    res.status(200).json({
        message: 'Login successfully',
        user: retrieveUser
    })
}

export { userRegister, userLogin }