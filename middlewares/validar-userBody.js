const { request, response } = require('express');

const validarIdUserBody = (req = request, res = response, next) => {
    const { id } = req.body;
    if (!id) {

        console.log("No existe id en el Body.".green)
        return res.status(400).json({
            msg: "No existe un id en la petición."
        })
    }
    next();
}

const validarUserBody = (req = request, res = response, next) => {

    const { username, password } = req.body;
    if (!username) {
        console.log("No existe Username en la petición.".yellow)
        return res.status(400).json({
            msg: "No existe Username en la petición ."
        })
    }
    if (!password) {
        console.log("No existe Password en la petición.".yellow)
        return res.status(400).json({
            msg: "No existe Password en la petición ."
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

module.exports = {
    validarIdUserBody,
    validarUserBody,
    validarIDToken

}
