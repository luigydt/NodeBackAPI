
const Etiqueta = require('../models/etiqueta');
require('colors');

const etiquetasGet = async (req, res) => {

    const { id } = req.body;
    if (!id) {
        console.log(`No existe id en el body`.red);
        res.json("No existe Id en el body")
    }
    else {
        const etiqueta = await Etiqueta.findAndCountAll({ where: { idUser: id } });
        if (etiqueta) {
            console.log(etiqueta);
            res.json(etiqueta);
            return;
        }
        console.log(`No existe id ${id}de esa etiqueta`.yellow);
        res.json("Etiqueta no existe");
    }
}
const etiquetasUpdate = async (req, res) => {

    const body = req.body;
    const { id, idUser } = body;
    if (!id || !idUser) {
        console.log("id, idUser no existen en el Body".yellow);
        res.status(202).json("id, idUser no existen en el Body");
    }
    else {
        try {
            const etiqueta = await Etiqueta.findOne({ where: { id: id, idUser: idUser } });
            await etiqueta.update(body);
            console.log(`ETIQUETA UPDATED ${etiqueta.id}`.green);
            res.json("Updated");
        }
        catch (err) {
            console.log(err);
            console.log("NO SE PUDO ACTUALIZAR ETIQUETA".magenta);
            res.status(400).json({
                msg: "DataBase Update Fail o Etiqueta no existe"
            })
        }
    }
}
const etiquetasDelete = async (req, res) => {

    const { id } = req.body;
    if (!id) {
        console.log(`No existe id en el body`.red);
        res.json("No existe Id en el body");
    }
    else {
        const etiqueta = await Etiqueta.findOne({ where: { id: id } });
        if (etiqueta) {
            await etiqueta.destroy();
            console.log(`ETIQUETA Id: ${etiqueta.id} ELIMINADA`);
            res.json("Etiqueta Borrada");
            return;
        }
        console.log(`No existe id ${id}de esa etiqueta`.yellow);
        res.json("Etiqueta no existe");
    }
}
const etiquetasInsert = async (req, res) => {

    const { body } = req;
    console.log(body);
    if (!body.idUser) {
        console.log("UserID no esta en el body".red);
        res.json({
            message: "UserID no esta en el body"
        });
    }
    else {

        const etiqueta = await Etiqueta.build(body);
        console.log(etiqueta);
        if (!body.nombreEtiqueta) {
            const c = await Etiqueta.count({ where: { idUser: body.idUser } });
            etiqueta.nombreEtiqueta = "ETIQUETA-000" + (c + 1);
        }
        try {
            const et = await etiqueta.save();
            console.log("ETIQUETA INSERT".green);
            res.json({
                msg: "Etiqueta Subida"
            })
        }
        catch (err) {
            console.log(err);
            res.json("No se pudo Subir")
            console.log("NO SE PUDO SUBIR ETIQUETA".magenta);

        }
    }
}

module.exports = {
    etiquetasDelete,
    etiquetasGet,
    etiquetasInsert,
    etiquetasUpdate
}