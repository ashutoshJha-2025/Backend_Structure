import express from 'express'
import { userRegister, userLogin } from '../controller/auth.controller.js'
import { registeredUserValidationRules } from '../middleware/registerInputValidation.middleware.js'
import { loginUserValidationRules } from '../middleware/loginInputValidation.middleware.js'

const authRoutes = express.Router()

authRoutes.post('/register', registeredUserValidationRules, userRegister)
authRoutes.post('/login', loginUserValidationRules, userLogin)

export default authRoutes