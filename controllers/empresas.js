const { sequelize } = require('../models/empresa');
const Empresa = require('../models/empresa');
require('colors');

const empresasGet = async (req, res) => {

    const { id } = req.params;
    try {
        const empresas = await Empresa.findAndCountAll({ where: { idUser: id } });
        if (empresas.count != 0) {
            console.log(empresas);
            res.json({ empresas });
        }
        else {
            console.log(`No hay empresas para el id: ${id}`.yellow);
            res.json({
                Message: "No hay empresas para ese ID de Usuario"
            })
        }
    }
    catch (err) {
        console.log(err);
        res.json("DB Fail");
    }
}

const empresasPut = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const empresa = new Empresa(body);
        empresa.idUser = id;
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

const empresasArrPut = async (req, res) => {

    const { empresas, idUser } = req.body;
    if (!empresas) {
        console.log("No existen empresas  en el body".yellow);
        return res.status(400).json("No existen empresas  en el body");
    }
    if (!idUser) {
        console.log("No existen idUser  en el body".yellow);
        return res.status(400).json("No existen idUser  en el body");
    }
    try {
        empresas.forEach(element => {
            element.idUser = idUser;
        });
        const list = await Empresa.bulkCreate(empresas, { validate: true });
        if (list) {
            list.forEach(element => {
                console.log("Empresa SUBIDA con ID: " + element.dataValues.id.toString().green);
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
const empresaDelete = async (req, res) => {
    const { id } = req.body;
    try {
        const company = await Empresa.findOne({ where: { id: id } });
        if (company) {
            await company.destroy();
            console.log(company);
            console.log(`Empresa id:${id} Eliminado de la DB`.yellow);
            res.json(`Empresa ${company.nombreEmpresa} Eliminada`);
        }
        else {
            console.log("No existe Empresa con ese ID".green);
            res.status(400).json({
                msg: "No existe Empresa con ese ID"
            })
        }


    }
    catch (err) {
        console.log(err);
        res.status(402).json({
            msg: "DataBase problems"
        })
    }
}

const empresaUpdate = async (req, res) => {

    const { id } = req.body;
    const { body } = req;
    try {
        const company = await Empresa.findOne({ where: { id: id } });
        await company.update(body);
        console.log(company);
        res.json("Updated Empresa: " + `${company.nombreEmpresa}`);
    }
    catch (err) {
        console.log(err);
        res.status(403).json({
            msg: "DataBase problems"
        })
    }

}
module.exports = {
    empresasGet,
    empresasArrPut,
    empresasPut,
    empresaUpdate,
    empresaDelete
}