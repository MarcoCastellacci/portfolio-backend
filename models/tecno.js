const mongoose = require('mongoose')

const TecnoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    info: {type: String, required: true},
})

const Tecno = mongoose.model('tecno', TecnoSchema)
module.exports = Tecno