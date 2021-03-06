const { request, response } = require('express');

const validarIdUser = (req = request, res = response, next) => {
    console.log(req.params)
    const { id } = req.params;
    if (!id) {
        console.log("No existe ID Usuario en la Peticion.".green)
        return res.status(400).json({
            msg: "No existe un ID Usuario en la petición."
        })
    }
    next();
}
const validarArrayEmpresa = (req = request, res = response, next) => {

    const { empresas } = req.body;
    if (!empresas) {
        console.log("No existe Empresas en la petición.".green)
        return res.status(400).json({
            msg: "No existe Empresas en la petición"
        })
    }
    if (!Array.isArray(empresas))
    {    
        console.log("no array.".green)
        return res.status(400).json({
            msg: "Empresa debe ser un Array - 'empresa': [] "
        })
    }
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
    validarBody,    
    validarArrayEmpresa
}


