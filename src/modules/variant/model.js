
import { fetch,fetchAll } from "../../utils/db.js";


const GET_Test = async ({Question_id}) => {
    try {
        return await fetchAll(Test,[Question_id])
    } catch (error) {
        console.log('question_options_get', error.message);
    }
}

const one = async ({Question_id}) => {
    try {
        return await fetchAll(Testone,[Question_id])
    } catch (error) {
        console.log('question_options_get', error.message);
    }
}

const result_ball = async (Question_id) => { 
       
    try {
        return await fetchAll(ball,Question_id)
    } catch (error) {
        console.log('question_options_ball', error.message);
    }
}






export default {
    GET_Test,
    one,
    result_ball
} 

const   Testone = `select * from question_options as TS join Questions as QS on TS.Question_id = QS.Question_id where TS.Question_id = $1 ;`

const   Test = `select question_options_id, question_options_bd from question_options as TS join Questions as QS on TS.Question_id = QS.Question_id where TS.Question_id = $1 ;`


const ball = `INSERT INTO results_ball (user_id, ball, Table_Chapter_id)
VALUES ($1, $2, $3)
ON CONFLICT (user_id, Table_Chapter_id)
DO UPDATE SET ball = EXCLUDED.ball
RETURNING *; `






// select * from Questions as ts join Table_Section as sub on ts.table_section_id= sub.table_section_id where sub.table_section_id =1;

