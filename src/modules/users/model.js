
import { fetch,fetchAll } from "../../utils/db.js";


const REGISTERS = ` insert into users(lastname,surname,gmail,phone_nomer,password) values ($1,$2,$3,$4, crypt($5, gen_salt('bf'))) returning * `



const REGISTER = async ({lastname,surname,gmail,phone_nomer,password}) => {
    try {
        return await fetchAll(REGISTERS,[lastname,surname,gmail,phone_nomer,password])
    } catch (error) {
        console.log('error_register', error.message);
    }
}

const LOGIN = async ({ gmail, password }) => {
    try {
        return await fetch(
            `
            select
                user_id,
                gmail,
                password
            from users
            where gmail = $1 and password = crypt($2, password)
            `, [gmail, password]
        )
    } catch (error) {
        console.log(error.message);
    }
}


// const GETT = async ({username}) => {
//     try {
//         return await fetchAll(`select * from users where username Ilike concat($1::varchar, '%')  ` ,[username])
//     } catch (error) {
//         console.log('getuser', error.message);
//     }
// }


// const GETCC = async ({user_id}) => {
//     try {
//         return await fetchAll('select * from users as u  join posts as p on u.user_id  =  p.user_id where u.user_id = $1 ',[user_id])
//     } catch (error) {
//         console.log('getuser', error.message);
//     }
// } 

// const DEL_ID = async ({user_id},{password}) => {
//     try {
//         return await fetch('delete from users where   user_id = $1 and  crypt($2, password)  returning *',[user_id,password])

//     } catch (error) {
//         console.log('getuser', error.message);
//     }
// } 


export default {
    REGISTER,LOGIN,
    // GETT,GETCC,DEL_ID
}

