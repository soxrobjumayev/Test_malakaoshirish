
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


const   quesion = `select * from Questions as QS join Table_Chapter as TS on QS.Table_Chapter_id = TS.Table_Chapter_id where TS.Table_Chapter_id = $1;`


// select * from Questions as ts join Table_Section as sub on ts.table_section _id= sub.table_section_id where sub.table_section_id =1;

