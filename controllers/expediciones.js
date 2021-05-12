
const { response, request } = require('express');
const { crearRefTransnatur } = require('../helpers/transnatur-helper')
require('colors');
const { Op, where } = require('sequelize');

const Expedicion = require('../models/expedicion');


const expedicionesGet = async (req = request, res = response) => {

    const { id } = req.params;
    const { idEmpresa } = req.query;
    const today = new Date(Date.now());
    const expediciones = await Expedicion.findAll({
        where: {
            [Op.and]: [
                { idUser: id },
                { idEmpresa: idEmpresa },
                {
                    [Op.or]: [
                        { fecha: today },
                        { archivado: 0 }
                    ]
                }
            ]
        }
    });
    if (expediciones) {        
        return res.json({
            msg: "EXPEDICIONES",
            expediciones
        })
        
    }
    return res.status(400).json({
        msg: "NO EXPEDICIONES "
    })
}
const expedicionesPost = async (req = request, res = response) => {

    const { expediciones } = req.body;
    const { list } = req.query;
    const { idExpedicion } = req.query;
    if (!list) {
        try {
            const dir_update = await Expedicion.findByPk(idExpedicion);
            await dir_update.update(req.body).then((result) => {
                console.log(result);
                res.json({
                    msg: "Updated"
                })
            });
        }
        catch {
            res.status(402).json({
                msg: "Error Update",
            })
        }
    }
    else {
        try {
            expediciones.forEach(async element => {
                const expedicion = await Expedicion.findByPk(element.id);
                await expedicion.update(element).then((result) => {
                    console.log(result);
                })
            });
            res.status(200).json({
                msg: 'Updated'
            })
        }
        catch {
            res.status(400).json({
                msg: 'Error al Crear'
            })
        }
    }
}

const expedicionesPut = async (req = request, res = response) => {

    const { idEmpresa, idDireccion, codEmpresa } = req.query;
    const { id } = req.params;
    const count = await Expedicion.count({
        where: {
            idUser: id,
            idEmpresa: idEmpresa
        }
    })
    try {
        const expedicion = new Expedicion(req.body);
        expedicion.idUser = id;
        if (idDireccion) {
            expedicion.idDireccion = idDireccion;
        }
        expedicion.idEmpresa = idEmpresa;
        expedicion.refTransnatur = crearRefTransnatur(codEmpresa, count)
        console.log(expedicion);
        await expedicion.save();
        res.json({
            msg: 'Expedicion Subida'
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            msg: 'Error al Crear'
        })
    }

}
const expedicionesDelete = async (req = request, res = response) => {

    const { expediciones } = req.body;
    try {
        expediciones.forEach(async element => {
            const expedicion = await Expedicion.findByPk(element.id);
            if (expedicion.retenido != 0) {
                await expedicion.update(
                    { archivado: 1 }
                ).then((result) => {

                })
            }
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            msg: "DataBase insert Fail"
        })
    }
}

module.exports = {
    expedicionesGet,
    expedicionesPost,
    expedicionesPut,
    expedicionesDelete
}