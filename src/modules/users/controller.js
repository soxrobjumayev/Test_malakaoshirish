
import model from './model.js'
import jwt from '../../utils/jwt.js'
 
 const REGISTER =async (req,res) =>{
    try {
        const user = await model.REGISTER(req.body)
        if(user){
            delete user[0].password;
            res.status(200).json({
                status:200,
                message:'ok',
                data:user
                
            })


        }else{
            res.status(400).json({
                status:400,
                message: error.message ,
                data: user,
            })
        }
    } catch (error) {
        console.log('REGISTER_error',error.message);
    }
 }

 const LOGIN =async (req,res) =>{
    try {
        const user = await model.LOGIN(req.body)
        console.log(user);
        if(user){

            user.password = null;
            res.status(200).json({
                status:200,
                message:'ok',
                data: user,
                token: jwt.sign({userId: user.user_id})
            })

        }else{
            res.status(403).json({
                status:403,
                message:'wrong username or password',
                data: user,
            })
        }
    } catch (error) {
        console.log('LOGIN_error',error.message);
    }
 }



//  const GET = async (req, res) => {

//     try {
//         const userssss = await model.GETT(req.query)
//         res.status(200).send(userssss)
//     } catch (error) {
//         console.log('elonlaa', error.message);
//     }

// }


// const GET_ID = async (req, res) => {

//     try {
//         const posts = await model.GETCC(req.params)
//         res.status(200).send(posts)
//     } catch (error) {
//         console.log('elonlaa', error.message);
//     }

// }


// const DELETE = async (req, res) => {

//     try {
//         const posts = await model.DEL_ID(req.params,req.body)
//         res.status(200).send(posts)
//     } catch (error) {
//         console.log('elonlaa', error.message);
//     }

// }








export default {
 REGISTER,LOGIN
// ,GET,GET_ID,DELETE
}


