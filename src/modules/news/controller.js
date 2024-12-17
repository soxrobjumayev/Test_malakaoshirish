
import model from './model.js'
 
const GET = async (req, res) => {

    try {
        const fan = await model.GET_Table_news()
        res.status(200).send(fan)
    } catch (error) {
        console.log('GET_Table_news/controller!', error.message);
    }


   
}


export default {
 GET
}

