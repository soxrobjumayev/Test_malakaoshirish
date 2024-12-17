import { Router } from "express";
import controller from './controller.js'
import token from '../../middlewares/checktoken.js'
import an from "./newmodel.js";

const router = Router()




router.get('/question_options/:Question_id',controller.GET)

 router.post('/anwers', token, controller.Post)


export default router 