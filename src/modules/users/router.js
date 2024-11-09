import { Router } from "express";
import controller from './controller.js'
import token from '../../middlewares/checktoken.js'
import validation_registers from '../../middlewares/validationss/validatorss_registers.js'
import validation_login from '../../middlewares/validationss/validators_login.js'





const router = Router()

router.post('/register',validation_registers,controller.REGISTER)
router.post('/login',validation_login,controller.LOGIN)


// router.get('/users',controller.GET)

// router.get('/users/:user_id',token,controller.GET_ID)

// router.delete('/users/:user_id',controller.DELETE)








export default router