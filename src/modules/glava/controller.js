
import model from './model.js'
 
const GET = async (req, res) => {

    try {
        const fan = await model.GET_Table_Chapter()
        res.status(200).send(fan)
    } catch (error) {
        console.log('GET_Table_Chapter/controller!', error.message);
    }


   
}


export default {
 GET
}


