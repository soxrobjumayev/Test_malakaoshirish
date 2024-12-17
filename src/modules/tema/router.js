import { Router } from "express";
import controller from './controller.js'
import token from '../../middlewares/checktoken.js'


const router = Router()




router.get('/Table_subject/:Table_Section_id/:Table_subject_id',token,controller.GET)
router.get('/Table_subjects/:Table_Section_id',token,controller.GETS)





export default router   