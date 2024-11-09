
import { fetch,fetchAll } from "../../utils/db.js";


const GET_Table_Chapter = async () => {
    try {
        return await fetchAll('select * from Table_Chapter  ')
    } catch (error) {
        console.log('Table_Chapter', error.message);
    }
}

export default {
    GET_Table_Chapter
}



