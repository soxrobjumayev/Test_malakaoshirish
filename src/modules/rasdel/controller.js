
import model from './model.js'
 
const GET = async (req, res) => {

    try {
        const section = await model.GET_Table_Section(req.params)
        res.status(200).send(section)
    } catch (error) {
        console.log('GET_Table_Section', error.message);
    }


   
}


export default {
 GET
}


