
import model from './model.js'
 
const GET = async (req, res) => {

    try {
        const subject = await model.GET_Table_subject(req.params)
        res.status(200).send(subject)
    } catch (error) {
        console.log('GET_Table_subject', error.message);
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


