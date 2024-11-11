
import pg from 'pg'


const pool = new pg.Pool({
    connectionString: "postgres://einlbzzm:M_4k6phURuv_HEgN5dzvLeVrj2RMHAgH@arjuna.db.elephantsql.com/einlbzzm",
    // user: 'einlbzzm',
    // host: 'localhost',
    // database: 'learning_practice',
    // password: '1234'
})


async function fetchAll(SQL, params = []) {

    const client = await pool.connect()

    try {
        const { rows } = await client.query(SQL, params)
        return rows
    } catch (error) {
        console.log('db error', error.message);
    } finally {
        client.release()
    }

s
}


async function fetch(SQL, params = []) {

    const client = await pool.connect()

    try {
        const { rows: [row] } = await client.query(SQL, params)
        return row
    } catch (error) {
        console.log('db error', error.message);
    } finally {
        client.release()
    }
}

export {
    fetchAll,
    fetch
}

