
import { fetch, fetchAll } from "../../utils/db.js";


const GET_quesion = async ({Table_Chapter_id}) => {
    try {
        return await fetch(q,[Table_Chapter_id])
    } catch (error) {
        console.log('GET_quesion', error.message);
    }
}



export default {
    GET_quesion
}

const q = `(
  SELECT *
  FROM Table_Section 
  WHERE Table_Section.Table_Section_topic LIKE '%' || $1 || '%'
)
UNION ALL
(
  SELECT *
  FROM Table_subject 
  WHERE Table_subject.Table_subject_topic LIKE '%' || $1 || '%'
);

`


const   quesion = `select * from Questions as QS join Table_Chapter as TS on QS.Table_Chapter_id = TS.Table_Chapter_id where TS.Table_Chapter_id = $1;`


// select * from Questions as ts join Table_Section as sub on ts.table_section_id= sub.table_section_id where sub.table_section_id =1;



















// (
//     SELECT 
//       Table_Section.Table_Section_id, 
//       Table_Section.Table_Section_topic, 
//       Table_Section.Table_Section_name, 
//       NULL AS Table_subject_id, 
//       NULL AS Table_subject_topic
//     FROM Table_Section 
//     WHERE Table_Section.Table_Section_topic LIKE '%' || $1 || '%'
//   )
//   UNION ALL
//   (
//     SELECT 
//       NULL AS Table_Section_id, 
//       NULL AS Table_Section_topic, 
//       NULL AS Table_Section_name, 
//       Table_subject.Table_subject_id, 
//       Table_subject.Table_subject_topic
//     FROM Table_subject 
//     WHERE Table_subject.Table_subject_topic LIKE '%' || $1 || '%'
//   );
  