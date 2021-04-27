const Direccion = require('../models/direccion');

const direccionesGet = async (req, res) => {
    const { id } = req.params;
    if (id) {
        const direcciones = await Direccion.findAll({ where: { idUser: id } });
        res.json({data:direcciones});
    }
    else{
        res.json({data:null});
    }
}

module.exports = {
    direccionesGet
}