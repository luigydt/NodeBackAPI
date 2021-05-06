const { request, response } = require('express');

const validarArrayDirecciones = (req = request, res = response, next) => {

    const { direcciones } = req.body;
    if (!direcciones) {
        console.log("No existe Direcciones en la petición.".green)
        return res.status(400).json({
            msg: "No existe Direcciones en la petición"
        })
    }
    if (!Array.isArray(direcciones)) {
        console.log("no array.".green)
        return res.status(400).json({
            msg: "Direcciones debe ser un Array - 'empresa': [] "
        })
    }
    next();
}

const validarBodyDirecciones = (req = request, res = response, next) => {
    const { nombreEmpresa } = req.body;
    if (!nombreEmpresa) {

        console.log("No existe nombreEmpresa de Empresa en la Peticion.".green)
        return res.status(400).json({
            msg: "No existe nombreEmpresa de Empresa en la petición."
        })
    }
    next();
}

const validarIdDireccion = (req = request, res = response, next) => {

    const { id } = req.body;
    if (!id) {

        console.log("No existe ID Direccion en la Peticion.".green)
        return res.status(400).json({
            msg: "No existe un ID Direccion en la petición."
        })
    }
    next();
}

module.exports = {
    validarArrayDirecciones,
    validarBodyDirecciones,
    validarIdDireccion
}

