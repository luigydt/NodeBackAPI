const { request, response } = require('express');

const validarIdUser = (req = request, res = response, next) => {

    const { id } = req.params;
    if (!id) {

        console.log("No existe ID Usuario en la Peticion.".green)
        return res.status(400).json({
            msg: "No existe un ID Usuario en la petición."
        })
    }
    next();
}
const validarIDToken = (req = request, res = response, next) => {
    const { id } = req.params;
    const { idCheck } = req;
    if (id != idCheck) {
        console.log("Token no valido - No corresponde a ese Usuario");
        return res.status(401).json({
            msg: "Token no valido - No corresponde a ese Usuario"
        })
    }
    console.log("Token valido");
    next();
}

const validarBody = (req = request, res = response, next) => {
    const { codEmpresa, nombreEmpresa } = req.body;
    if (!codEmpresa) {

        console.log("No existe Código de Empresa en la Peticion.".green)
        return res.status(400).json({
            msg: "No existe Código de Empresa en la petición."
        })
    }
    if (!nombreEmpresa) {

        console.log("No existe nombreEmpresa de Empresa en la Peticion.".green)
        return res.status(400).json({
            msg: "No existe nombreEmpresa de Empresa en la petición."
        })
    }
    next();
}

const validarIdEmpresa = (req = request, res = response, next) => {

    const { id } = req.body;
    if (!id) {

        console.log("No existe ID Empresa en la Peticion.".green)
        return res.status(400).json({
            msg: "No existe un ID Empresa en la petición."
        })
    }
    next();
}

module.exports = {
    validarIdUser,
    validarIdEmpresa,
    validarBody
}


