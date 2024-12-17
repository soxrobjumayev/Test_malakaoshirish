import { Router } from "express";
import controller from './controller.js'
import token from '../../middlewares/checktoken.js'


const router = Router()




router.get('/news',controller.GET)







export default router