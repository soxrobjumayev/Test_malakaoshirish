
import { fetch,fetchAll } from "../../utils/db.js";


const GET_Table_subject = async ({Table_Section_id,Table_subject_id}) => {
    try {
        return await fetch(subject,[Table_Section_id,Table_subject_id])
    } catch (error) {
        console.log('Table_subject', error.message);
    }
}

const GET_Table_subjects = async ({Table_Section_id}) => {
    try {
        return await fetchAll(subjects,[Table_Section_id])
    } catch (error) {
        console.log('Table_subject', error.message);
    }
}

  

export default {
    GET_Table_subject,GET_Table_subjects
}


const   subject = ` select * from Table_subject as tss join Table_Section as tcc on tss.Table_Section_id= tcc.Table_Section_id where tcc.Table_Section_id = $1  and tss.Table_subject_id = $2 ;`
const   subjects = ` select * from Table_subject as tss join Table_Section as tcc on tss.Table_Section_id= tcc.Table_Section_id where tcc.Table_Section_id = $1 ;`


//  ` select * from Table_subject as tss join Table_Section as tcc on tss.Table_Section_ id= tcc.Table_Section_id where tcc.Table_Section_id = 1 ;`


