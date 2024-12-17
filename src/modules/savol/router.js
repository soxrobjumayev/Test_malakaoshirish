import { Router } from "express";
import controller from './controller.js'
import token from '../../middlewares/checktoken.js'
import check from "../../middlewares/check/check.js";


const router = Router()




router.get('/Quetions/:Table_Chapter_id', token,check,controller.GET)




export default router