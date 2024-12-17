
import { fetch,fetchAll } from "../../utils/db.js";




const GET_Table_Chapter = async ({Table_TOPIK_id,Table_Chapter_id}) => {
    try {
        return await fetch(Table_Chapter,[Table_TOPIK_id,Table_Chapter_id])
    } catch (error) {
        console.log('GET_Table_Chapter', error.message);
    }
}



const GET_Table_Chapters = async ({Table_TOPIK_id}) => {
    try {
        return await fetchAll(Table_Chapters_ball,[Table_TOPIK_id])
    } catch (error) {
        console.log('GET_Table_Chapter', error.message);
    }
}

export default {
    GET_Table_Chapter, GET_Table_Chapters
}  


      const   Table_Chapter = ` select * from Table_Chapter as TCH join Table_TOPIK as TTP on TCH.Table_TOPIK_id= TTP.Table_TOPIK_id where TTP.Table_TOPIK_id = $1  and TCH.Table_Chapter_id = $2 ; `
      const   Table_Chapters = ` select * from Table_Chapter as TCH join Table_TOPIK as TTP on TCH.Table_TOPIK_id= TTP.Table_TOPIK_id where TTP.Table_TOPIK_id = $1 ; `

      const   Table_Chapters_ball =  `SELECT 
    TCH.Table_Chapter_id,
    TCH.Table_Chapter_number,
    TCH.Table_Chapter_topic,
    TTP.Table_TOPIK_id,
    TTP.Table_TOPIK_title,
    COALESCE(RB.Table_Chapter_id, TCH.Table_Chapter_id) AS results_ball_chapter_id,
    RB.results_ball_id,
    RB.user_id,
    RB.ball
FROM Table_Chapter AS TCH
JOIN Table_TOPIK AS TTP 
    ON TCH.Table_TOPIK_id = TTP.Table_TOPIK_id
LEFT JOIN results_ball AS RB
    ON TCH.Table_Chapter_id = RB.Table_Chapter_id
WHERE TTP.Table_TOPIK_id = $1;`

    //  `SELECT *FROM Table_Section AS ts JOIN Table_Chapter AS tc  ON ts.Table_Chapter_id = tc.Table_Chapter_id  WHERE ts.table_topik_id = 1 AND tc.Table_Chapter_id = 2;`
