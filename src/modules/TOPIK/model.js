
import { fetch,fetchAll } from "../../utils/db.js";


const GET_Table_TOPIK = async () => {
    try {
        return await fetchAll('select * from Table_TOPIK  ')
    } catch (error) {
        console.log('Table_TOPIK', error.message);
    }
}

export default {
    GET_Table_TOPIK
}


  
