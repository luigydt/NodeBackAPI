const Direccion = require('../models/direccion');

const direccionesArrPut = async (req, res) => {

    const { direcciones, idUser } = req.body;
    if (!direcciones || !idUser) {
        console.log("No existen direcciones o idUser en el body".yellow);
        res.status(400).json("No existen direcciones o idUser en el body");
    }
    else {
        try {
            direcciones.forEach(element => {
                element.idUser = idUser;
            });
            const list = await Direccion.bulkCreate(direcciones, { validate: true });
            if (list) {
                list.forEach(element => {
                    console.log("Direcciones updated con ID: " + element.dataValues.id.toString().green);
                })
                res.json("SUBIDO");
            }
        }
        catch (err) {
            console.log(err);
            res.status(400).json({
                msg: "DataBase insert Fail"
            })
        }
    }
}
const direccionDelete = async (req, res) => {
    const body = req.body;
    const { id, idUser } = body;
    if (!id || !idUser)
        console.log("id, idUser no existen en el Body");
    else {
        try {
            const direccion = await Direccion.findOne({ where: { id: id, idUser: idUser } });
            await direccion.destroy();
            console.log(`Dirección id:${id} y userID: ${idUser} Eliminado de la DB`.yellow);
            res.json("Eliminado");

        }
        catch (err) {
            console.log(err);
            res.status(400).json({
                msg: "DataBase Delete not Success"
            })
        }
    }
}
const direccionPut = async (req, res) => {

    const { body } = req;
    console.log(body);
    const { idUser, nombreEmpresa } = body;
    if (!idUser || !nombreEmpresa)
        console.log("No existe algun campo Not Null(idUser,nombreEmpresa)".yellow);
    else {
        try {
            const direcc = new Direccion(body);
            await direcc.save();
            console.log("Subido".green);
            res.json("Subido");
        }
        catch (err) {
            console.log(err)
            res.status(400).json({
                msg: 'Error al subir'
            })
        }
    }
}
const direccionesGet = async (req, res) => {
    const { id } = req.params;
    if (id) {
        try {
            const direcciones = await Direccion.findAndCountAll({ where: { idUser: id } });
            if (direcciones.count !== 0) {
                console.log(direcciones);
                res.json({ direcciones });
            }
            else {
                console.log(`No hay direcciones para el id: ${id}`.yellow);
                res.status(302).json({
                    Message: "No hay direcciones  para ese id"
                })
            }
        }
        catch (err) {
            console.log(err);
            res.json("No se pudo completar la accion");
        }
    } else {
        console.log("No id en el body".red);
        res.status(400).json("No hay un id en el body");
    }
}
const direccionUpdate = async (req, res) => {

    const body = req.body;
    const { id, idUser } = body;
    if (!id || !idUser)
        console.log("id, idUser no existen en el Body");
    else {
        try {
            const address = await Direccion.findOne({ where: { id: id, idUser: idUser } });
            await address.update(body);
            console.log(address);
            res.json("Updated");

        }
        catch (err) {
            console.log(err);
            res.status(400).json({
                msg: "DataBase Update Fail o Direccion no existe"
            })
        }
    }
}

module.exports = {
    direccionesGet,
    direccionesArrPut,
    direccionDelete,
    direccionPut,
    direccionUpdate
}