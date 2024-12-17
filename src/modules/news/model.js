
import { fetch,fetchAll } from "../../utils/db.js";


const GET_Table_news = async () => {
    try {
        return await fetchAll('select * from Table_news  ')
    } catch (error) {
        console.log('Table_news', error.message);
    }
}

export default {
    GET_Table_news
}