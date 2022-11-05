const mongoose = require('mongoose')

const ProyectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    link: {type: String, required: true},
    logo: {type: String, required: true},
})
const Proyect = mongoose.model('proyect', ProyectSchema)
module.exports = Proyect