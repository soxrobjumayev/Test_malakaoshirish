
import { fetch,fetchAll } from "../../utils/db.js";


const GET_Table_subject = async ({Table_Section_id}) => {
    try {
        return await fetchAll(subject,[Table_Section_id])
    } catch (error) {
        console.log('Table_subject', error.message);
    }
}



export default {
    GET_Table_subject
}


const   subject = ` select * from Table_subject as tss join Table_Section as tcc on tss.Table_Section_id= tcc.Table_Section_id where tcc.Table_Section_id = $1 ;`

//  ` select * from Table_subject as tss join Table_Section as tcc on tss.Table_Section_ id= tcc.Table_Section_id where tcc.Table_Section_id = 1 ;`


 
