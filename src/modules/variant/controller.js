
import model from './model.js'
import an from './newmodel.js'
 
const GET = async (req, res) => {

    try {
        const TEST = await model.GET_Test(req.params)
        res.status(200).send(TEST)
    } catch (error) {
        console.log('GET_TEST', error.message);
    }


}

const Post = async (req, res)=>{
    try {
        const AN = await an(req,res)
        res.status(200).send(AN)
    } catch (error) {
        console.log('GET_TEST', error.message);
    }

}

// const GET_D = async (req, res) => {

//     try {
//         const TEST = await model.GET_Test_D(req.params)
//         res.status(200).send(TEST)
//     } catch (error) {
//         console.log('GET_TEST', error.message);
//     }


// }

// const GET = async (req, res) => {

//     try {
//         const fan = await model.GET_Table_Section(req.params)
//         res.status(200).send(fan)
//     } catch (error) {
//         console.log('fan', error.message);
//     }

// }


export default {
 GET,
 Post
}


