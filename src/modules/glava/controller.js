
import model from './model.js'
 
const GET = async (req, res) => {

    try {
        const fan = await model.GET_Table_Chapter(req.params)
        res.status(200).send(fan)
    } catch (error) {
        console.log('GET_Table_Chapter/controller!', error.message);
    }


}
const GETS = async (req, res) => {
    try {
        const fan = await model.GET_Table_Chapters(req.params)
        res.status(200).send(fan)
    } catch (error) {
        console.log('GET_Table_Chapter/controller!', error.message);
    }

   
}


export default {
 GET,GETS
}
