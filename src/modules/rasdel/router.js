import { Router } from "express";
import controller from './controller.js'
import check from "../../middlewares/check/check.js";
import token from '../../middlewares/checktoken.js'


const router = Router()




router.get('/Table_Section/:Table_Chapter_id/:Table_Section_id',token,controller.GET)
router.get('/Table_Sections/:Table_Chapter_id',token,controller.GETS)











export default router