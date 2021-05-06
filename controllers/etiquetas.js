
const Etiqueta = require('../models/etiqueta');
require('colors');

const etiquetasGet = async (req, res) => {

    const { id } = req.params;
    const etiqueta = await Etiqueta.findOne({ where: { idUser: id } });
    if (etiqueta) {
        console.log(etiqueta);
        return res.json({
            etiqueta: etiqueta.getEtiqueta
        });
    }
    console.log(`No existe etiqueta para ese Usuario`.yellow);
    res.json({
        msg:"No existe etiqueta para ese Usuario"
    });
}
const etiquetasUpdate = async (req, res) => {

    const { body } = req;
    if (!body) {
        return res.json({
            msg: "No existen parametros en el Body"
        })
    }
    const { id } = req.params;
    try {
        const etiqueta = await Etiqueta.findOne({ where: { idUser: id } });
        await etiqueta.update(body);
        console.log(`ETIQUETA UPDATED ${etiqueta.id}`.green);
        res.json({
            msg: "Etiqueta Updated"
        });
    }
    catch (err) {
        console.log(err);
        console.log("NO SE PUDO ACTUALIZAR ETIQUETA".magenta);
        res.status(400).json({
            msg: "DataBase Update Fail o Etiqueta no existe"
        })
    }
}

module.exports = {
    etiquetasGet,
    etiquetasUpdate
}