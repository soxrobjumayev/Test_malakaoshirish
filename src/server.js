import express from 'express'
import cors from 'cors'
import modules from './modules/index.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(modules)





app.listen(5000, () => console.log('server aktiv'))
