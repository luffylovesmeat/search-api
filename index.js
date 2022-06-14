import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import dataRouter from './routes/dataRoute.js'
import connectDB from './db/connect.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v1', dataRouter)

app.get('/', (req, res) => {
    res.send('hello')
});


(async () => {
    await connectDB(process.env.MONGODB_ADDRESS)
})()

app.listen(process.env.PORT, () => {
    console.log(`Server running on Port: ${process.env.PORT}`)
})