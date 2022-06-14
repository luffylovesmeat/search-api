import express from 'express'
import Bank from '../model/bank.js'
import findRoute from './findRoute.js'

const router = express.Router()

router.use('/find', findRoute)

router.get('/banks', async (req, res) => {
    const results = await Bank.find({})
    res.send(results)
})

export default router