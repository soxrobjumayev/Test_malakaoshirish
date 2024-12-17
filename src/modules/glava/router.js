import { Router } from "express";
import controller from './controller.js'
import token from '../../middlewares/checktoken.js'
import check from "../../middlewares/check/check.js";


const router = Router()




router.get('/Table_Chapter/:Table_TOPIK_id/:Table_Chapter_id',token,controller.GET)
router.get('/Table_Chapters/:Table_TOPIK_id',token,controller.GETS)












export default router