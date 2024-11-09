
import { fetch,fetchAll } from "../../utils/db.js";




const GET_Table_Section = async ({Table_Chapter_id}) => {
    try {
        return await fetchAll(section,[Table_Chapter_id])
    } catch (error) {
        console.log('Table_Section', error.message);
    }
}

export default {
    GET_Table_Section
}




      const   section = ` select * from Table_Section as ts join Table_Chapter as tc on ts.Table_Chapter_id= tc.Table_Chapter_id where tc.Table_Chapter_id = $1 ;`

    //   select * from Table_Chapter as ts join Table_Section as tc on ts.Table_Chapter_id= tc.Table_Chapter_id where tc.Table_Chapter_id = 1
