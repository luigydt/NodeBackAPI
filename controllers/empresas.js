const { sequelize } = require('../models/empresa');
const Empresa = require('../models/empresa');
require('colors');

const empresasGet = async (req, res) => {
    const { id } = req.body;
    if (id) {
        try {
            const empresas = await Empresa.findAndCountAll({ where: { idUser: id } });
            if (empresas.count !== 0) {
                console.log(empresas);
                res.json({ empresas });
            }
            else {
                console.log(`No hay empresas para el id: ${id}`.yellow);
                res.json({
                    Message: "No hay empresas para ese id"
                })
            }
        }
        catch (err) {
            console.log(err);
            res.json("No se pudo completar la accion");
        }
    } else {
        console.log("No id en el body".red);
        res.json("No hay un id en el body");
    }
}

const empresasPut = async (req, res) => {

    const { body } = req;
    console.log(body);
    const { idUser, codEmpresa, nombreEmpresa } = body;
    if (!idUser || !codEmpresa || !nombreEmpresa)
        console.log("No existe algun campo Not Null(idUser,codEmpresa,nombreEmpresa)".yellow);
    else {
        try {
            const empresa = new Empresa(body);
            await empresa.save();
            console.log("Subido".green);
            res.json(empresa);
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                msg: 'Error al subir'
            })
        }
    }
}

const empresasArrPut = async (req, res) => {

    const { empresas, idUser } = req.body;
    if (!empresas || !idUser) {
        console.log("No existen empresas o idUser en el body".yellow);
        res.status(400).json("No existen empresas o idUser en el body");
    }
    else {
        try {
            empresas.forEach(element => {
                element.idUser = idUser;
            });
            const list = await Empresa.bulkCreate(empresas, { validate: true });
            if (list) {
                list.forEach(element => {
                    console.log("Empresa updated con ID: " + element.dataValues.id.toString().green);
                })
                res.json("SUBIDO");
            }
        }
        catch (err) {
            console.log(err);
            res.status(400).json({
                msg: "DataBase problems"
            })
        }
    }
}
const empresaDelete = async (req, res) => {
    const body = req.body;
    const { id, idUser } = body;
    if (!id || !idUser)
        console.log("id, idUser no existen en el Body");
    else {
        try {
            const company = await Empresa.findOne({ where: { id: id, idUser: idUser } });
            await company.destroy();
            console.log(`Empresa id:${id} y userID: ${idUser} Eliminado de la DB`.yellow);
            res.json("Eliminado");

        }
        catch (err) {
            console.log(err);
            res.status(400).json({
                msg: "DataBase problems"
            })
        }
    }
}

const empresasPost = (req, res) => {

}

const empresaUpdate = async (req, res) => {

    const body = req.body;
    const { id, idUser } = body;
    if (!id || !idUser)
        console.log("id, idUser no existen en el Body");
    else {
        try {
            const company = await Empresa.findOne({ where: { id: id, idUser: idUser } });
            await company.update(body);
            console.log(company);
            res.json("Updated");

        }
        catch (err) {
            console.log(err);
            res.status(400).json({
                msg: "DataBase problems"
            })
        }
    }
}
module.exports = {
    empresasGet,
    empresasPost,
    empresasArrPut,
    empresasPut,
    empresaUpdate,
    empresaDelete
}