
import model from './model.js'
import test from '../variant/model.js' 

const GET = async (req, res) => {
    const {GET_Test}  = test
    try {
        const quesion = await model.GET_quesion(req.params)
        for (const e of quesion) {
            e.variyant = await GET_Test({ Question_id: e.question_id });
          }
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


