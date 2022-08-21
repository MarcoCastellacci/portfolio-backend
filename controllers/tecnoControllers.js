const Tecno = require('../models/tecno')

const TecnoController = {
    createTecno: async (req, res) => {
        const {name,image,info} = req.body
        let tecno
        let error = null
        try {
            tecno = await new Tecno({
                name,
                image,
                info
            }).save()
        }catch(err) { error = err }
        res.json({
            response: error ? error : tecno,
            success: error ? false : true,
            error: error,
            console: console.log('Error en CreateTecno: ', error)
            })
    },
    getTecnos: async (req, res) => {
        let tecnos
        let error = null
        try {
            tecnos = await Tecno.find()
        } catch (err) { error = err }
        res.json({
            response: error ? error : tecnos,
            success: error ? false : true,
            error: error,
            console: console.log('Error en GetTecnos: ', error)
            })
    },
    createMultipleTecnos: async (req, res) => {
        const tecnologies = req.body.data
        let tecnology
        let error = null
        try {
            tecnologies.map(async (tecno) => {
                await new Tecno({
                    name: tecno.name,
                    image: tecno.image,
                    info: tecno.info
                }).save()
            })
        } catch (err) { error = err }
        res.json({
            response: error ? error : tecnology,
            success: error ? false : true,
            error: error,
            console: console.log('Error en CreateMultipleTecnos: ', error)
            })
    },

    // uploadTecno: (req, res) => {}
}
module.exports = TecnoController