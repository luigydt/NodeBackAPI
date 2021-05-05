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

module.exports = {
    validadJWT
}