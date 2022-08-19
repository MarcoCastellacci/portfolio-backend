const Proyect = require('../models/proyect')

const ProyectController = {
    createProyect: async (req, res) => {
        const {name,image,description,link,logo} = req.body
        let proyect
        let error = null
        try {
            proyect = await new Proyect({
                name,
                image,
                description,
                link,
                logo
            }).save()
        }catch(err) { error = err }
        res.json({
            response: error ? error : proyect,
            success: error ? false : true,
            error: error,
            console: console.log('Error en CreateProyect: ', error)
            })
    },
    getProyects: async (req, res) => {
        let proyects
        let error = null
        try {
            proyects = await Proyect.find()
        } catch (err) { error = err }
        res.json({
            response: error ? error : proyects,
            success: error ? false : true,
            error: error,
            console: console.log('Error en GetProyects: ', error)
            })
    },
    // uploadProyect: (req, res) => {}
}
module.exports = ProyectController