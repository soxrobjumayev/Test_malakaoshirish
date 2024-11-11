
import { fetch,fetchAll } from "../../utils/db.js";


const GET_quesion = async ({Table_Section_id}) => {
    try {
        return await fetchAll(quesion,[Table_Section_id])
    } catch (error) {
        console.log('GET_quesion', error.message);
    }
}



export default {
    GET_quesion
}


const   quesion = `select * from Questions as QS join Table_Section as TS on QS.Table_Section_id= TS.Table_Section_id where TS.Table_Section_id = $1 ;`


// select * from Questions as ts join Table_Section as sub on ts.table_section_id= sub.table_section_id where sub.table_section_id =1;

