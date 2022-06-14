import express from 'express'
import Bank from '../model/bank.js'

const router = express.Router()

router.get('/:name', async (req, res) => {
    const { name } = req.params
    var regex = new RegExp(name, 'i');
    const results = await Bank.find({ bank_name: regex })
    res.json(results)
})

export default router