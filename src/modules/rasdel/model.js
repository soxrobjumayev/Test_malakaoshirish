
import { fetch,fetchAll } from "../../utils/db.js";




const GET_Table_Section = async ({Table_Chapter_id,Table_Section_id}) => {
    try {
        return await fetch(section,[Table_Chapter_id,Table_Section_id])
    } catch (error) {
        console.log('Table_Section', error.message);
    }
}
const GET_Table_Sections = async ({Table_Chapter_id}) => {
    try {
        return await fetchAll(sections,[Table_Chapter_id])
    } catch (error) {
        console.log('Table_Sections', error.message);
    }
}

export default {
    GET_Table_Section,GET_Table_Sections
}



      const   section = ` select * from Table_Section as ts join Table_Chapter as tc on ts.Table_Chapter_id= tc.Table_Chapter_id where tc.Table_Chapter_id = $1  and ts.Table_Section_id = $2 ;`
      const   sections = ` select * from Table_Section as ts join Table_Chapter as tc on ts.Table_Chapter_id= tc.Table_Chapter_id where tc.Table_Chapter_id = $1 ;`

    //   const   Table_Chapter = ` select * from Table_Chapter as TCH join Table_TOPIK as TTP on TCH.Table_TOPIK_id= TTP.Table_TOPIK_id where TTP.Table_TOPIK_id = $1  and TCH.Table_Chapter_id = $2 ; `


    //   select * from Table_Chapter as ts join Table_Section as tc on ts.Table_Chapter_id= tc.Table_Chapter_id where tc.Table_Chapter_id = 1
