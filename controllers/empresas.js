const { sequelize } = require('../models/empresa');
const Empresa = require('../models/empresa');

const empresasGet = async (req, res) => {
    const { id } = req.params;
    if (id) {
        const empresas = await Empresa.findAll({ where: { idUser: id } });
        res.json({ data: empresas });
    }
    else {
        res.json({ data: null });
    }
}

const empresasPost = async (req, res) => {

    const { body } = req;
    // try {
    //     const empresa = new Empresa(body);
    //     await empresa.save();
    //     res.json(empresa);
    // }
    // catch (err) {
    //     console.log(err);
    //     res.status(500).json({
    //         msg: 'Error al subir'
    //     })
    // }
    console.log(body);

}

const empresasArrPost = async (req, res) => {

    const { params, body } = req;
    if (body.empresas) {
        try {
            
            await sequelize.transaction(async (t) => {
                body.empresas.forEach(async empresa => {
                    const emp = new Empresa(empresa);
                    emp.idUser = params.id;
                    const temp = await emp.save({ transaction: t });
                    if(!temp)
                    {
                        return;
                    }                    
                })
            });            

        } catch (error) {
            
            res.status(500).json({
                msg: 'Error al subir archivos'
            })          
            
        }
    }
}
module.exports = {
    empresasGet,
    empresasPost,
    empresasArrPost
}