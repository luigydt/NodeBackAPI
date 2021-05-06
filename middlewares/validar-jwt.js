const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const validadJWT = (req = request, res = response, next) => {

    const token = req.header('tokenKey');
    if (!token) {
        return res.status(401).json({
            message: "No hay Token en la Peticion"
        })
    }
    try {

        const {id} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.idCheck = id;
        next();
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            msg: "Token no valido"
        })
    }    
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

module.exports = {
    validadJWT,
    validarIDToken
}