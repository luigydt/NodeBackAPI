const { request, response } = require('express');

const validarIdExpedicion = (req = request, res = response, next) => {

    const { idExpedicion } = req.query;
    if (!idExpedicion) {
        return res.status(400).json({
            msg: 'Bad Request - Falta idExpedicion la QUERY'
        }).then((err) => console.log(err));
    }
    next();
}

const validarQueryExpedicion = (req = request, res = response, next) => {

    const { idEmpresa, codEmpresa } = req.query;
    if (!idEmpresa) {
        return res.status(400).json({
            msg: 'Bad Request - Falta idEmpresa la QUERY'
        }).then((err) => console.log(err));
    }
    if(req.method == 'PUT'){
        if(!codEmpresa) {
            return res.status(400).json({
                msg: 'Bad Request - Falta codEmpresa la QUERY'
            }).then((err) => console.log(err));
        }        
    }
    next();
}

module.exports = {
    validarIdExpedicion,
    validarQueryExpedicion
}
