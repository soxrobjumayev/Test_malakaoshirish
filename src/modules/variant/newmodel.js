import GET_Test from './model.js'



const an = async (req, res) => {
    let balls = 0;
    let Table_Chapter_id = 0
    const { userId } = req
    for (const obj of req.body) {
        Table_Chapter_id = obj.chapter_id
        const varants = await GET_Test.one({ Question_id: obj.quesion_id })
        varants?.map(e => {
            if (e.question_options_bd == obj.ans) {
                if (e.question_options_boolean == true) return balls = balls + 10
            }
        })

    }
    return await GET_Test.result_ball([userId, balls, Table_Chapter_id])
}            


export default an

