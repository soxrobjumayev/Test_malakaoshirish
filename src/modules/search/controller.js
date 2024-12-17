
import model from './model.js'

const GET = async (req, res) => {
    try {
        const quesion = await model.GET_quesion(req.params)
         res.status(200).send(quesion)
    } catch (error) {
        console.log('GET_quesion', error.message);
    }


}


// const GET = async (req, res) => {
//     try {
//         const fan = await model.GET_Table_Section(req.params)
//         res.status(200).send(fan)
//     } catch (error) {
//         console.log('fan', error.message);
//     }


   
// }


export default {
 GET
}


