import mongoose from "mongoose"
const { Schema } = mongoose

const BankSchema = new Schema({
    id: Number,
    uid: String,
    account_number: String,
    iban: String,
    bank_name: String,
    routing_number: String,
    swift_bic: String
})

export default mongoose.model('Bank', BankSchema)