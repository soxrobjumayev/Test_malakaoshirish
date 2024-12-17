
import { fetch,fetchAll } from "../../utils/db.js";


const GET_quesion = async ({Table_Chapter_id}) => {
    try {
        return await fetchAll(quesion,[Table_Chapter_id])
    } catch (error) {
        console.log('GET_quesion', error.message);
    }
}
    

export default {
    GET_quesion
}  


const   quesion = `select * from results_ball where table_chapter_id = $1;`
